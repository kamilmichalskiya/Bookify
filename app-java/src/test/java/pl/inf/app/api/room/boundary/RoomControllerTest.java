package pl.inf.app.api.room.boundary;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.hateoas.EntityModel;
import pl.inf.app.api.room.control.RoomToUiMapper;
import pl.inf.app.api.room.entity.UiRoom;
import pl.inf.app.bm.room.boundary.RoomBF;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.UUID;

import static java.util.Objects.requireNonNull;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class RoomControllerTest {

    @InjectMocks
    private RoomController roomController;
    @Mock
    private RoomBF roomBF;
    @Mock
    private RoomToUiMapper roomToUiMapper;
    @Mock
    private UiRoom uiRoom1;
    @Mock
    private UiRoom uiRoom2;

    @Test
    void getAll() {
        final List<UiRoom> t = new ArrayList<>();
        t.add(uiRoom1);
        t.add(uiRoom2);
        when(roomBF.getAll(roomToUiMapper)).thenReturn(t);
        final UUID id1 = UUID.randomUUID();
        final UUID id2 = UUID.randomUUID();
        when(uiRoom1.getId()).thenReturn(id1);
        when(uiRoom2.getId()).thenReturn(id2);

        final Collection<EntityModel<UiRoom>> uiRooms = requireNonNull(roomController.getAll().getBody()).getContent();

        assertEquals(2, uiRooms.size());
        assertEquals(id1, uiRoom1.getId());
        assertEquals(id2, uiRoom2.getId());
    }

    @Test
    void getById() {
        final UUID id = UUID.randomUUID();
        when(roomBF.getById(id, roomToUiMapper)).thenReturn(uiRoom1);
        when(uiRoom1.getId()).thenReturn(id);

        final UiRoom room1 = requireNonNull(roomController.getById(id).getBody()).getContent();

        assertNotNull(room1);
        assertEquals(id, room1.getId());
    }

    @Test
    void createRoom() {
        final UUID id = UUID.randomUUID();
        when(roomBF.create(uiRoom1, roomToUiMapper)).thenReturn(uiRoom1);
        when(uiRoom1.getId()).thenReturn(id);

        final UiRoom room1 = requireNonNull(roomController.createRoom(uiRoom1).getBody()).getContent();

        assertNotNull(room1);
        assertEquals(id, room1.getId());
    }

    @Test
    void updateRoom() {
        final UUID id = UUID.randomUUID();
        when(roomBF.update(uiRoom1, roomToUiMapper)).thenReturn(uiRoom1);
        when(uiRoom1.getId()).thenReturn(id);

        final UiRoom room1 = requireNonNull(roomController.updateRoom(id, uiRoom1).getBody()).getContent();

        assertNotNull(room1);
        assertEquals(id, room1.getId());
    }
}
