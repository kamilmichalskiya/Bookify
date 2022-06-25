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
        uiRoom.setImage(source.getImage());
        uiRoom.setRoomType(source.getRoomType());
        uiRoom.setPrice(source.getPrice());
        uiRoom.setSingleBeds(source.getSingleBeds());
        uiRoom.setDoubleBeds(source.getDoubleBeds());
        uiRoom.setCapacity(source.getCapacity());
        uiRoom.setDescription(source.getDescription());
        uiRoom.setArea(source.getArea());
        uiRoom.setAddOns(source.getAddOns());
        uiRoom.setAccessories(source.getAccessories());
        uiRoom.setActive(source.isActive());
        return uiRoom;
    }
}
