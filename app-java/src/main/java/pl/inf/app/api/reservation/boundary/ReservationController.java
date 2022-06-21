package pl.inf.app.api.reservation.boundary;

import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import org.springframework.hateoas.EntityModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.inf.app.api.reservation.control.ReservationToUiMapper;
import pl.inf.app.api.reservation.entity.UiReservation;
import pl.inf.app.bm.reservation.boundary.ReservationBF;

import java.util.UUID;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

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
     * Create new reservation
     *
     * @param uiReservation reservation to save
     * @return saved reservation
     */
    @PostMapping("/{roomId}")
    public ResponseEntity<EntityModel<UiReservation>> createReservation(@PathVariable final UUID roomId,
                                                                        @RequestBody final UiReservation uiReservation) {
        final UiReservation reservation = reservationBF.create(roomId, uiReservation, reservationToUiMapper);
        return ResponseEntity.ok(EntityModel.of(reservation)
                .add(linkTo(methodOn(ReservationController.class).createReservation(reservation.getId(), null)).withSelfRel()));
    }

}
