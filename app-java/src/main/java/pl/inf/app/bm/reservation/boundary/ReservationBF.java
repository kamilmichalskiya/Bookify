package pl.inf.app.bm.reservation.boundary;

import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pl.inf.app.api.offer.entity.UiOffer;
import pl.inf.app.api.reservation.entity.UiReservation;
import pl.inf.app.bm.notification.entity.NotificationEvent;
import pl.inf.app.bm.offer.boundary.OfferBF;
import pl.inf.app.bm.offer.entity.OfferBE;
import pl.inf.app.bm.reservation.control.ReservationRepositoryBA;
import pl.inf.app.bm.reservation.control.UiReservationToEntityMapper;
import pl.inf.app.bm.reservation.entity.ReservationBE;
import pl.inf.app.bm.room.boundary.RoomBF;
import pl.inf.app.error.ProcessException;
import pl.inf.app.utils.Filler;
import pl.inf.app.utils.Mapper;

import java.sql.Date;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

import static pl.inf.app.error.ErrorType.RESERVATION_CREATING_ERROR;
import static pl.inf.app.error.ErrorType.RESERVATION_NOT_FOUND;
import static pl.inf.app.error.ErrorType.RESERVATION_UPDATING_ERROR;
import static pl.inf.app.error.ErrorType.RESERVATION_VALIDATION_ERROR;

/**
 * The reservation business facade class
 */
@Service
@RequiredArgsConstructor
public class ReservationBF {
    private final String SUBJECT = "Bookify - rezerwacja pokoju";

    private final UiReservationToEntityMapper uiReservationToEntityMapper;
    private final ReservationRepositoryBA reservationRepositoryBA;
    private final ApplicationEventPublisher eventPublisher;
    private final RoomBF roomBF;
    private final OfferBF offerBF;

    /**
     * Get reservation from the database for the given id
     *
     * @param id     the id of reservation
     * @param mapper entity mapper
     * @param <T>    The class type of the mapping target
     * @return mapped reservation
     * @throws ProcessException if no reservation with the given id was found
     */
    public <T> T getById(final UUID id, final Mapper<ReservationBE, T> mapper) {
        return reservationRepositoryBA.findById(id).map(mapper::map).orElseThrow(
                () -> new ProcessException(RESERVATION_NOT_FOUND, id));
    }

    /**
     * Retrieve list of all reservations from database
     *
     * @param mapper entity mapper
     * @param <T>    The class type of the mapping target
     * @return list of mapped reservations
     */
    public <T> List<T> getAll(final Mapper<ReservationBE, T> mapper) {
        return reservationRepositoryBA.findAll().stream().map(mapper::map).collect(Collectors.toList());
    }

    /**
     * Fills and create the reservation
     *
     * @param uiReservation data to fill the entity
     * @param uiMapper      mapper for the UI model
     * @param <T>           The class type of the mapping target
     * @return created reservation
     * @throws ProcessException if we cannot create reservation
     */
    public <T> T create(final UUID roomId, final UiReservation uiReservation, final Mapper<ReservationBE, T> uiMapper) {
        final ReservationBE reservationBE = uiReservationToEntityMapper.map(new Filler<>(uiReservation, new ReservationBE()));
        reservationBE.setRoom(roomBF.getActiveById(roomId, roomBE -> roomBE));
        reservationBE.setOffers(Optional.ofNullable(uiReservation)
                .map(UiReservation::getOffers)
                .map(uiOffers -> uiOffers.stream().map(UiOffer::getId).collect(Collectors.toList()))
                .map(idList -> offerBF.getOffersById(idList, HashSet::new))
                .orElse(null));

        if (!validReservation(reservationBE)) {
            throw new ProcessException(RESERVATION_VALIDATION_ERROR, reservationBE, uiReservation);
        }

        return Optional.of(reservationRepositoryBA.save(reservationBE)).map(reservation -> {
            final NotificationEvent notificationEvent = NotificationEvent.builder()
                    .to(reservation.getCustomerData().getEmail())
                    .subject(SUBJECT)
                    .text(getBody(reservation))
                    .build();
            eventPublisher.publishEvent(notificationEvent);
            return reservation;
        }).map(uiMapper::map).orElseThrow(() -> new ProcessException(RESERVATION_CREATING_ERROR, reservationBE));
    }

    /**
     * Fills and update the reservation
     *
     * @param uiReservation data to fill the entity
     * @param uiMapper      mapper for the UI model
     * @param <T>           The class type of the mapping target
     * @return updated reservation
     * @throws ProcessException if we cannot update reservation
     */
    @Transactional
    public <T> T update(final UiReservation uiReservation, final Mapper<ReservationBE, T> uiMapper) {
        final ReservationBE reservation = reservationRepositoryBA.findById(uiReservation.getId()).orElseThrow(
                () -> new ProcessException(RESERVATION_NOT_FOUND, uiReservation.getId()));
        final ReservationBE reservationBE = uiReservationToEntityMapper.map(new Filler<>(uiReservation, reservation));
        return Optional.of(reservationRepositoryBA.save(reservationBE)).map(uiMapper::map).orElseThrow(
                () -> new ProcessException(RESERVATION_UPDATING_ERROR, reservationBE));
    }

    private boolean validReservation(final ReservationBE reservationBE) {
        final Date nowDate = new Date(LocalDate.now().atStartOfDay().toInstant(OffsetDateTime.now().getOffset()).toEpochMilli());
        return reservationBE != null && reservationBE.getTotalPrice() >= 0 && reservationBE.getOffers().stream().allMatch(
                OfferBE::isActive) && roomBF.notMatchesBooking(reservationBE.getStartDate(), reservationBE.getEndDate(),
                reservationBE.getRoom()) && !reservationBE.getStartDate().before(nowDate) && reservationBE.getEndDate().after(
                reservationBE.getStartDate());
    }

    private String getBody(final ReservationBE reservation) {
        return String.format("Dokonano rezerwacji (id: %s) pokoju %s w dniach od %s do %s za kwotę %s zł\n\n" +
                             "Dziękujemy Zespół Bookify\n\n" + "Poniższa wiadomość jest wyłącznie wiadomością testową",
                reservation.getId(), reservation.getRoom().getId(), reservation.getStartDate(), reservation.getEndDate(),
                reservation.getTotalPrice());
    }
}
