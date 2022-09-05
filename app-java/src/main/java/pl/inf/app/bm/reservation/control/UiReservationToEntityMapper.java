package pl.inf.app.bm.reservation.control;

import org.springframework.stereotype.Component;
import pl.inf.app.api.reservation.entity.UiReservation;
import pl.inf.app.bm.reservation.entity.ReservationBE;
import pl.inf.app.utils.Filler;
import pl.inf.app.utils.Mapper;

import java.sql.Date;
import java.time.OffsetDateTime;

/**
 * Fills the database employee model according to the UI employee model
 */
@Component
public class UiReservationToEntityMapper implements Mapper<Filler<UiReservation, ReservationBE>, ReservationBE> {

    @Override
    public ReservationBE map(final Filler<UiReservation, ReservationBE> filler) {
        if (filler == null) return null;

        final ReservationBE target = filler.getTarget();
        final UiReservation source = filler.getSource();

        if (source.getStartDate() != null && source.getEndDate() != null) {
            target.setStartDate(new Date(source.getStartDate()
                    .toLocalDate()
                    .atStartOfDay()
                    .toInstant(OffsetDateTime.now().getOffset())
                    .toEpochMilli()));
            target.setEndDate(new Date(
                    source.getEndDate().toLocalDate().atStartOfDay().toInstant(OffsetDateTime.now().getOffset()).toEpochMilli()));
        }
        target.setTotalPrice(source.getTotalPrice());
        target.setPaid(source.isPaid());
        target.setCustomerData(source.getCustomerData());
        target.setGuestData(source.getGuestData());
        target.setCompanyName(source.getCompanyName());
        target.setNip(source.getNip());
        target.setStreet(source.getStreet());
        target.setPostalCode(source.getPostalCode());
        target.setCity(source.getCity());
        target.setCountry(source.getCountry());

        return target;
    }
}
