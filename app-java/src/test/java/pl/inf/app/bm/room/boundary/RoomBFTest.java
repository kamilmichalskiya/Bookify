package pl.inf.app.bm.room.boundary;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import pl.inf.app.api.room.control.RoomToUiMapper;
import pl.inf.app.api.room.entity.UiRoom;
import pl.inf.app.bm.room.control.RoomRepositoryBA;
import pl.inf.app.bm.room.control.UiRoomToEntityMapper;
import pl.inf.app.bm.room.entity.RoomBE;
import pl.inf.app.error.ProcessException;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class RoomBFTest {

    @InjectMocks
    private RoomBF roomBF;
    @Mock
    private RoomRepositoryBA roomRepository;
    @Mock
    private UiRoomToEntityMapper uiRoomToEntityMapper;
    @Mock
    private RoomBE roomBE1;
    @Mock
    private RoomBE roomBE2;
    @Mock
    private UiRoom uiRoom1;
    @Mock
    private UiRoom uiRoom2;
    @Mock
    private RoomToUiMapper roomToUiMapper;

    @Test
    void getById() {
        final UUID id = UUID.randomUUID();
        when(roomRepository.findById(id)).thenReturn(Optional.of(roomBE1), Optional.empty());
        when(roomToUiMapper.map(roomBE1)).thenReturn(uiRoom1);
        when(uiRoom1.getId()).thenReturn(id);

        final UiRoom uiRoom = roomBF.getById(id, roomToUiMapper);

        assertEquals(id, uiRoom.getId());
        assertThrows(ProcessException.class, () -> roomBF.getById(id, roomToUiMapper));
    }

    @Test
    void getAll() {
        when(roomRepository.findAll()).thenReturn(Arrays.asList(roomBE1, roomBE2));
        when(roomToUiMapper.map(any())).thenReturn(uiRoom1, uiRoom2);

        final List<UiRoom> all = roomBF.getAll(roomToUiMapper);

        assertEquals(2, all.size());
    }

    @Test
    void create() {
        when(roomRepository.save(roomBE1)).thenReturn(roomBE1);
        when(uiRoomToEntityMapper.map(any())).thenReturn(roomBE1);
        when(roomToUiMapper.map(roomBE1)).thenReturn(uiRoom2, null);
        final UUID id = UUID.randomUUID();
        when(uiRoom2.getId()).thenReturn(id);

        final UiRoom uiRoom = roomBF.create(uiRoom1, roomToUiMapper);

        assertEquals(id, uiRoom.getId());
        assertThrows(ProcessException.class, () -> roomBF.create(uiRoom1, roomToUiMapper));
    }

    @Test
    void update() {
        final UUID id = UUID.randomUUID();
        when(roomRepository.findById(id)).thenReturn(Optional.of(roomBE1), Optional.empty(), Optional.of(roomBE1));
        when(uiRoom1.getId()).thenReturn(id);
        when(uiRoomToEntityMapper.map(any())).thenReturn(roomBE1);
        when(roomRepository.save(roomBE1)).thenReturn(roomBE1);
        when(roomToUiMapper.map(roomBE1)).thenReturn(uiRoom1, null);

        final UiRoom update = roomBF.update(uiRoom1, roomToUiMapper);

        assertEquals(id, update.getId());
        assertThrows(ProcessException.class, () -> roomBF.update(uiRoom1, roomToUiMapper));
        assertThrows(ProcessException.class, () -> roomBF.update(uiRoom1, roomToUiMapper));
    }
}
