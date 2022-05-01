package pl.inf.app.bm.room.boundary;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.inf.app.bm.room.control.RoomRepositoryBA;
import pl.inf.app.bm.room.entity.RoomBE;
import pl.inf.app.error.ErrorType;
import pl.inf.app.error.ProcessException;

import java.util.List;
import java.util.UUID;

/**
 * The room business facade class
 */
@Service
@RequiredArgsConstructor
public class RoomBF {
    private final RoomRepositoryBA roomRepository;

    /**
     * Get room from the database for the given id
     *
     * @param id The id of room
     * @return room entity
     * @throws ProcessException if no room with the given id was found
     */
    public RoomBE getRoom(final UUID id) {
        return roomRepository.findById(id).orElseThrow(() -> new ProcessException(ErrorType.ROOM_NOT_FOUND));
    }

    /**
     * Retrieve list of all rooms form database
     *
     * @return list of rooms
     */
    public List<RoomBE> getAllRooms() {
        return roomRepository.findAll();
    }

}
