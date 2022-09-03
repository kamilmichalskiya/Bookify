package pl.inf.app.api.reservation.boundary;

import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.inf.app.api.reservation.control.ReservationToUiMapper;
import pl.inf.app.api.reservation.entity.UiReservation;
import pl.inf.app.bm.reservation.boundary.ReservationBF;

import java.util.UUID;
import java.util.stream.Collectors;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;
import static pl.inf.app.api.LinkRelations.CREATE_RESERVATION;
import static pl.inf.app.api.LinkRelations.GET_RESERVATION;
import static pl.inf.app.api.LinkRelations.UPDATE_RESERVATION;

/**
 * Api for reservation management
 */
@Api(tags = {"Reservations"})
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@RequestMapping(value = "/api/reservations", produces = "application/hal+json")
public class ReservationController {
    private final ReservationBF reservationBF;
    private final ReservationToUiMapper reservationToUiMapper;

    /**
     * Get all reservations from database
     *
     * @return list of reservations
     */
    @GetMapping
    public ResponseEntity<CollectionModel<EntityModel<UiReservation>>> getAll() {
        return ResponseEntity.ok(CollectionModel.of(reservationBF.getAll(reservationToUiMapper)
                .stream()
                .map(reservation -> EntityModel.of(reservation)
                        .add(linkTo(methodOn(ReservationController.class).getById(reservation.getId())).withRel(
                                GET_RESERVATION.toString()))
                        .add(linkTo(methodOn(ReservationController.class).updateReservation(reservation.getId(), null)).withRel(
                                UPDATE_RESERVATION.toString())))
                .collect(Collectors.toList()))
                .add(linkTo(methodOn(ReservationController.class).createReservation(null, null)).withRel(
                        CREATE_RESERVATION.toString()))
                .add(linkTo(methodOn(ReservationController.class).getAll()).withSelfRel()));
    }

    /**
     * Get reservation from database
     *
     * @param id the id of reservation
     * @return reservation
     */
    @GetMapping("/{id}")
    public ResponseEntity<EntityModel<UiReservation>> getById(@PathVariable final UUID id) {
        return ResponseEntity.ok(EntityModel.of(reservationBF.getById(id, reservationToUiMapper))
                .add(linkTo(methodOn(ReservationController.class).updateReservation(id, null)).withRel(
                        UPDATE_RESERVATION.toString()))
                .add(linkTo(methodOn(ReservationController.class).updateReservation(id, null)).withRel(
                        UPDATE_RESERVATION.toString()))
                .add(linkTo(methodOn(ReservationController.class).getById(id)).withSelfRel()));
    }

    /**
     * Create new reservation
     *
     * @param roomId        id of room
     * @param uiReservation reservation to save
     * @return saved reservation
     */
    @PostMapping("/{roomId}")
    public ResponseEntity<EntityModel<UiReservation>> createReservation(@PathVariable final UUID roomId,
                                                                        @RequestBody final UiReservation uiReservation) {
        final UiReservation reservation = reservationBF.create(roomId, uiReservation, reservationToUiMapper);
        return ResponseEntity.ok(EntityModel.of(reservation)
                .add(linkTo(methodOn(ReservationController.class).getById(reservation.getId())).withRel(
                        GET_RESERVATION.toString()))
                .add(linkTo(methodOn(ReservationController.class).updateReservation(reservation.getId(), null)).withRel(
                        UPDATE_RESERVATION.toString()))
                .add(linkTo(methodOn(ReservationController.class).createReservation(reservation.getId(), null)).withSelfRel()));
    }

    /**
     * Update reservation
     *
     * @param reservationId id of reservation
     * @param uiReservation reservation to update
     * @return updated reservation
     */
    @PutMapping("/{reservationId}")
    public ResponseEntity<EntityModel<UiReservation>> updateReservation(@PathVariable final UUID reservationId,
                                                                        @RequestBody final UiReservation uiReservation) {
        uiReservation.setId(reservationId);
        final UiReservation reservation = reservationBF.update(uiReservation, reservationToUiMapper);
        return ResponseEntity.ok(EntityModel.of(reservation)
                .add(linkTo(methodOn(ReservationController.class).getById(reservation.getId())).withRel(
                        GET_RESERVATION.toString()))
                .add(linkTo(methodOn(ReservationController.class).createReservation(reservation.getId(), null)).withSelfRel()));
    }
}
