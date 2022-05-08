package pl.inf.app.api.room.boundary;

import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import org.springframework.hateoas.CollectionModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.inf.app.api.room.control.RoomToUiMapper;
import pl.inf.app.api.room.entity.UiRoom;
import pl.inf.app.bm.room.boundary.RoomBF;

import java.util.UUID;
import java.util.stream.Collectors;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;
import static pl.inf.app.api.LinkRelations.GET_ALL_ROOMS;
import static pl.inf.app.api.LinkRelations.GET_ROOM;

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
    public ResponseEntity<CollectionModel<UiRoom>> getAllRooms() {
        return ResponseEntity.ok(CollectionModel.of(roomBF.getAllRooms(roomToUiMapper).stream().map(uiRoom -> uiRoom
                .add(linkTo(methodOn(RoomController.class).getRoom(uiRoom.getId())).withRel(GET_ROOM.toString())))
                                                          .collect(Collectors.toList()))
                                                .add(linkTo(methodOn(RoomController.class).getAllRooms()).withSelfRel()));
    }

    /**
     * Get room from database
     *
     * @param id the id of room
     * @return room
     */
    @GetMapping("/{id}")
    public ResponseEntity<UiRoom> getRoom(@PathVariable final UUID id) {
        return ResponseEntity.ok(roomBF.getRoom(id, roomToUiMapper)
                                       .add(linkTo(methodOn(RoomController.class).getRoom(id)).withSelfRel())
                                       .add(linkTo(methodOn(RoomController.class).getAllRooms())
                                                    .withRel(GET_ALL_ROOMS.toString())));
    }

}
