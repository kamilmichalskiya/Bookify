package pl.inf.app.api.reservation.control;

import org.springframework.stereotype.Component;
import pl.inf.app.api.offer.entity.UiOffer;
import pl.inf.app.api.reservation.entity.UiReservation;
import pl.inf.app.api.room.entity.UiRoom;
import pl.inf.app.bm.reservation.entity.ReservationBE;
import pl.inf.app.bm.room.entity.RoomBE;
import pl.inf.app.utils.Mapper;

import java.util.stream.Collectors;

/**
 * Map database reservation model to ui reservation model
 */
@Component
public class ReservationToUiMapper implements Mapper<ReservationBE, UiReservation> {
    @Override
    public UiReservation map(final ReservationBE source) {
        final UiReservation reservation = new UiReservation();
        reservation.setId(source.getId());
        reservation.setStartDate(source.getStartDate());
        reservation.setEndDate(source.getEndDate());
        reservation.setTotalPrice(source.getTotalPrice());
        reservation.setPaid(source.isPaid());
        reservation.setCustomerData(source.getCustomerData());
        reservation.setGuestData(source.getGuestData());
        reservation.setActive(source.isActive());

        final UiRoom uiRoom = new UiRoom();
        final RoomBE room = source.getRoom();
        uiRoom.setId(room.getId());
        uiRoom.setRoomType(room.getRoomType());
        uiRoom.setCapacity(room.getCapacity());
        uiRoom.setPrice(room.getPrice());
        uiRoom.setSingleBeds(room.getSingleBeds());
        uiRoom.setDoubleBeds(room.getDoubleBeds());
        uiRoom.setDescription(room.getDescription());
        uiRoom.setArea(room.getArea());
        uiRoom.setAddOns(room.getAddOns());
        uiRoom.setAccessories(room.getAccessories());
        uiRoom.setActive(room.isActive());
        reservation.setRoom(uiRoom);

        reservation.setOffers(source.getOffers().stream().map(offerBE -> {
            final UiOffer uiOffer = new UiOffer();
            uiOffer.setId(offerBE.getId());
            uiOffer.setName(offerBE.getName());
            uiOffer.setPrice(offerBE.getPrice());
            uiOffer.setDetails(offerBE.getDetails());
            uiOffer.setActive(offerBE.isActive());
            return uiOffer;
        }).collect(Collectors.toSet()));

        return reservation;
    }
}
