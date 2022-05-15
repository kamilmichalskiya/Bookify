package pl.inf.app.api.room.control;

import org.springframework.stereotype.Component;
import pl.inf.app.api.room.entity.UiRoom;
import pl.inf.app.bm.room.entity.RoomBE;
import pl.inf.app.utils.Mapper;

/**
 * Map database room model to ui room model
 */
@Component
public class RoomToUiMapper implements Mapper<RoomBE, UiRoom> {
    @Override
    public UiRoom map(final RoomBE source) {
        final UiRoom uiRoom = new UiRoom();
        uiRoom.setId(source.getId());
        uiRoom.setAccessories(source.getAccessories());
        uiRoom.setAddOns(source.getAddOns());
        uiRoom.setArea(source.getArea());
        uiRoom.setBeds(source.getBeds());
        uiRoom.setCapacity(source.getCapacity());
        uiRoom.setDescription(source.getDescription());
        uiRoom.setImage(source.getImage());
        uiRoom.setOfferDetails(source.getOfferDetails());
        uiRoom.setPrice(source.getPrice());
        uiRoom.setRoomType(source.getRoomType());
        uiRoom.setActive(source.isActive());
        return uiRoom;
    }
}
