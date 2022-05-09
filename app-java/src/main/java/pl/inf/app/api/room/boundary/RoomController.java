package pl.inf.app.api.room.boundary;

import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import org.springframework.hateoas.CollectionModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.inf.app.api.room.control.RoomToUiMapper;
import pl.inf.app.api.room.entity.UiRoom;
import pl.inf.app.bm.room.boundary.RoomBF;

import java.util.UUID;
import java.util.stream.Collectors;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;
import static pl.inf.app.api.LinkRelations.CREATE_ROOM;
import static pl.inf.app.api.LinkRelations.GET_ALL_ROOMS;
import static pl.inf.app.api.LinkRelations.GET_ROOM;
import static pl.inf.app.api.LinkRelations.UPDATE_ROOM;

/**
 * Api for rooms management
 */
@Api(tags = {"Rooms"})
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/rooms")
public class RoomController {
    private final RoomBF roomBF;
    private final RoomToUiMapper roomToUiMapper;

    /**
     * Get all rooms from database
     *
     * @return list of rooms
     */
    @GetMapping
    public ResponseEntity<CollectionModel<UiRoom>> getAll() {
        return ResponseEntity.ok(CollectionModel.of(roomBF.getAll(roomToUiMapper).stream().map(uiRoom -> uiRoom
                .add(linkTo(methodOn(RoomController.class).getById(uiRoom.getId())).withRel(GET_ROOM.toString()))
                .add(linkTo(methodOn(RoomController.class).updateRoom(uiRoom.getId(), null)).withRel(UPDATE_ROOM.toString())))
                                                          .collect(Collectors.toList()))
                                                .add(linkTo(methodOn(RoomController.class).createRoom(null))
                                                             .withRel(CREATE_ROOM.toString()))
                                                .add(linkTo(methodOn(RoomController.class).getAll()).withSelfRel()));
    }

    /**
     * Get room from database
     *
     * @param id the id of room
     * @return room
     */
    @GetMapping("/{id}")
    public ResponseEntity<UiRoom> getById(@PathVariable final UUID id) {
        return ResponseEntity.ok(roomBF.getById(id, roomToUiMapper).add(
                linkTo(methodOn(RoomController.class).getAll()).withRel(GET_ALL_ROOMS.toString()))
                                       .add(linkTo(methodOn(RoomController.class).updateRoom(id, null))
                                                    .withRel(UPDATE_ROOM.toString()))
                                       .add(linkTo(methodOn(RoomController.class).getById(id)).withSelfRel()));
    }

    /**
     * Create new room
     *
     * @param uiRoom room to save
     * @return saved room
     */
    @PostMapping
    public ResponseEntity<UiRoom> createRoom(@RequestBody final UiRoom uiRoom) {
        final UiRoom room = roomBF.create(uiRoom, roomToUiMapper);
        return ResponseEntity.ok(
                room.add(linkTo(methodOn(RoomController.class).getById(room.getId())).withRel(GET_ROOM.toString()))
                    .add(linkTo(methodOn(RoomController.class).createRoom(null)).withSelfRel()));
    }

    /**
     * Update room
     *
     * @param id     the id of room
     * @param uiRoom room to update
     * @return updated room
     */
    @PutMapping("/{id}")
    public ResponseEntity<UiRoom> updateRoom(@PathVariable final UUID id, @RequestBody final UiRoom uiRoom) {
        uiRoom.setId(id);
        final UiRoom room = roomBF.update(uiRoom, roomToUiMapper);
        return ResponseEntity.ok(
                room.add(linkTo(methodOn(RoomController.class).getById(room.getId())).withRel(GET_ROOM.toString()))
                    .add(linkTo(methodOn(RoomController.class).updateRoom(id, null)).withSelfRel()));
    }

}
