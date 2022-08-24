package pl.inf.app.api.room.control;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;
import pl.inf.app.api.room.entity.UiRoom;
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
        roomBE.setAccessories(Collections.singleton("TABLE"));
        roomBE.setCapacity(4);
        roomBE.setDescription("Description");
        roomBE.setImages(Collections.singleton("Image"));
        roomBE.setPrice(100);
        roomBE.setRoomType(RoomType.Budget);

        final UiRoom room = mapper.map(roomBE);

        assertEquals(id, room.getId());
        assertEquals(100, room.getArea());
        assertEquals(1, room.getAccessories().size());
        assertEquals(4, room.getCapacity());
        assertEquals("Description", room.getDescription());
        assertEquals(1, room.getImages().size());
        assertEquals(100, room.getPrice());
        assertEquals(RoomType.Budget, room.getRoomType());
    }
}
