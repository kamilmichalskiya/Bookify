package pl.inf.app.api.room.control;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;
import pl.inf.app.api.room.entity.UiRoom;
import pl.inf.app.bm.room.entity.Accessory;
import pl.inf.app.bm.room.entity.AddOn;
import pl.inf.app.bm.room.entity.Bed;
import pl.inf.app.bm.room.entity.OfferDetail;
import pl.inf.app.bm.room.entity.RoomBE;
import pl.inf.app.bm.room.entity.RoomType;

import java.util.Collections;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(MockitoExtension.class)
class RoomToUiMapperTest {

    @InjectMocks
    private RoomToUiMapper mapper;

    @Test
    void map() {
        final RoomBE roomBE = new RoomBE();
        final UUID id = UUID.randomUUID();
        roomBE.setId(id);
        roomBE.setArea(100);
        roomBE.setAddOns(Collections.singleton(AddOn.TELEPHONE));
        roomBE.setAccessories(Collections.singleton(Accessory.TABLE));
        roomBE.setBeds(Collections.singletonList(Bed.DOUBLE_BED));
        roomBE.setCapacity(4);
        roomBE.setDescription("Description");
        roomBE.setImage("Image");
        roomBE.setOfferDetails(Collections.singleton(OfferDetail.FREE_WIFI));
        roomBE.setPrice(100);
        roomBE.setRoomType(RoomType.BUDGET);

        final UiRoom room = mapper.map(roomBE);

        assertEquals(id, room.getId());
        assertEquals(100, room.getArea());
        assertEquals(1, room.getAddOns().size());
        assertEquals(1, room.getAccessories().size());
        assertEquals(1, room.getBeds().size());
        assertEquals(4, room.getCapacity());
        assertEquals("Description", room.getDescription());
        assertEquals("Image", room.getImage());
        assertEquals(1, room.getOfferDetails().size());
        assertEquals(100, room.getPrice());
        assertEquals(RoomType.BUDGET, room.getRoomType());
    }
}
