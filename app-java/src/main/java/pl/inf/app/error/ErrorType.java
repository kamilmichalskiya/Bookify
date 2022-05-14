package pl.inf.app.error;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

import static org.springframework.http.HttpStatus.NOT_FOUND;
import static org.springframework.http.HttpStatus.UNPROCESSABLE_ENTITY;

/**
 * Class with error types
 */
@Getter
@RequiredArgsConstructor
public enum ErrorType {
    ROOM_NOT_FOUND("B001", "Room not found. Room id: {}", NOT_FOUND),
    ROOM_ADDING_ERROR("B002", "Room cannot be added. Room : {}", UNPROCESSABLE_ENTITY),
    ROOM_UPDATING_ERROR("B003", "Room cannot be updated. Room : {}", UNPROCESSABLE_ENTITY);

    private final String code;
    private final String description;
    private final HttpStatus defaultStatus;
}
