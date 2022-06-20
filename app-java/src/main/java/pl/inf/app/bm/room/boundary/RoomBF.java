package pl.inf.app.bm.room.boundary;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pl.inf.app.api.room.entity.UiRoom;
import pl.inf.app.api.room.entity.UiSearchParams;
import pl.inf.app.bm.reservation.control.ReservationRepositoryBA;
import pl.inf.app.bm.room.control.RoomRepositoryBA;
import pl.inf.app.bm.room.control.UiRoomToEntityMapper;
import pl.inf.app.bm.room.entity.RoomBE;
import pl.inf.app.error.ProcessException;
import pl.inf.app.utils.Filler;
import pl.inf.app.utils.Mapper;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

import static pl.inf.app.error.ErrorType.ROOM_ADDING_ERROR;
import static pl.inf.app.error.ErrorType.ROOM_NOT_FOUND;
import static pl.inf.app.error.ErrorType.ROOM_UPDATING_ERROR;

/**
 * The room business facade class
 */
@Service
@RequiredArgsConstructor
public class RoomBF {
    private final RoomRepositoryBA roomRepository;
    private final UiRoomToEntityMapper uiRoomToEntityMapper;
    private final ReservationRepositoryBA reservationRepository;

    /**
     * Get room from the database for the given id
     *
     * @param id     the id of room
     * @param mapper entity mapper
     * @return mapped room
     * @throws ProcessException if no room with the given id was found
     */
    public <T> T getById(final UUID id, final Mapper<RoomBE, T> mapper) {
        return roomRepository.findById(id).map(mapper::map).orElseThrow(() -> new ProcessException(ROOM_NOT_FOUND, id));
    }

    /**
     * Retrieve list of all rooms form database
     *
     * @param mapper entity mapper
     * @return list of mapped rooms
     */
    public <T> List<T> getAll(final Mapper<RoomBE, T> mapper) {
        return roomRepository.findAll().stream().map(mapper::map).collect(Collectors.toList());
    }

    /**
     * Fills and saves the room entity
     *
     * @param uiRoom   data to fill the entity
     * @param uiMapper mapper for the UI model
     * @param <T>      The class type of the mapping target
     * @return saved entity
     * @throws ProcessException if we cannot save the entity
     */
    public <T> T create(final UiRoom uiRoom, final Mapper<RoomBE, T> uiMapper) {
        final RoomBE targetRoom = new RoomBE();
        final RoomBE roomBE = uiRoomToEntityMapper.map(new Filler<>(uiRoom, targetRoom));
        return Optional.of(roomRepository.save(roomBE)).map(uiMapper::map).orElseThrow(
                () -> new ProcessException(ROOM_ADDING_ERROR, roomBE));
    }

    /**
     * Fills and updates the room entity
     *
     * @param uiRoom   data to fill the entity
     * @param uiMapper mapper for the UI model
     * @param <T>      The class type of the mapping target
     * @return updated entity
     * @throws ProcessException if we cannot update the entity
     */
    @Transactional
    public <T> T update(final UiRoom uiRoom, final Mapper<RoomBE, T> uiMapper) {
        final RoomBE room = roomRepository.findById(uiRoom.getId()).orElseThrow(
                () -> new ProcessException(ROOM_NOT_FOUND, uiRoom.getId()));
        final RoomBE roomBE = uiRoomToEntityMapper.map(new Filler<>(uiRoom, room));
        return Optional.of(roomRepository.save(roomBE)).map(uiMapper::map).orElseThrow(
                () -> new ProcessException(ROOM_UPDATING_ERROR, roomBE));
    }

    /**
     * Get a list of rooms matching your search parameters
     *
     * @param searchParams params to search
     * @param uiMapper     mapper for the UI model
     * @param <T>          The class type of the mapping target
     * @return list of rooms
     */
    public <T> List<T> search(final UiSearchParams searchParams, final Mapper<RoomBE, T> uiMapper) {
        return roomRepository.findByActiveTrue().stream().filter(roomBE -> matchesRoomType(searchParams, roomBE)).filter(
                roomBE -> matchesCapacity(searchParams, roomBE)).filter(roomBE -> matchAddOns(searchParams, roomBE)).filter(
                roomBE -> notMatchesBooking(searchParams, roomBE)).map(uiMapper::map).collect(Collectors.toList());
    }

    private boolean notMatchesBooking(final UiSearchParams searchParams, final RoomBE roomBE) {
        return reservationRepository.getAllByRoomId(roomBE.getId()).stream().noneMatch(
                reservationBE -> reservationBE.getEndDate().after(searchParams.getStartDate()) &&
                                 reservationBE.getStartDate().before(searchParams.getEndDate()));
    }

    private boolean matchAddOns(final UiSearchParams searchParams, final RoomBE roomBE) {
        return searchParams.getAddOns().isEmpty() || roomBE.getAddOns().containsAll(searchParams.getAddOns());
    }

    private boolean matchesRoomType(final UiSearchParams searchParams, final RoomBE roomBE) {
        return searchParams.getRoomTypes().isEmpty() || searchParams.getRoomTypes().contains(roomBE.getRoomType());
    }

    private boolean matchesCapacity(final UiSearchParams searchParams, final RoomBE roomBE) {
        return searchParams.getAdult() + searchParams.getKids() <= roomBE.getCapacity();
    }
}
