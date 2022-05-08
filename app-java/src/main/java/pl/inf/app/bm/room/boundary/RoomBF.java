package pl.inf.app.bm.room.boundary;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.inf.app.bm.room.control.RoomRepositoryBA;
import pl.inf.app.bm.room.entity.RoomBE;
import pl.inf.app.error.ErrorType;
import pl.inf.app.error.ProcessException;
import pl.inf.app.utils.Mapper;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

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
     * @param id     the id of room
     * @param mapper entity mapper
     * @return mapped room
     * @throws ProcessException if no room with the given id was found
     */
    public <T> T getRoom(final UUID id, final Mapper<RoomBE, T> mapper) {
        return roomRepository.findById(id).map(mapper::map).orElseThrow(() -> new ProcessException(ErrorType.ROOM_NOT_FOUND, id));
    }

    /**
     * Retrieve list of all rooms form database
     *
     * @param mapper entity mapper
     * @return list of mapped rooms
     */
    public <T> List<T> getAllRooms(final Mapper<RoomBE, T> mapper) {
        return roomRepository.findAll().stream().map(mapper::map).collect(Collectors.toList());
    }

}
