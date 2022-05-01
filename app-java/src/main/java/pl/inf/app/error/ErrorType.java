package pl.inf.app.error;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

/**
 * Class with error types
 */
@Getter
@RequiredArgsConstructor
public enum ErrorType {
    ROOM_NOT_FOUND("B001", "Room not found. Room id: {}", HttpStatus.NOT_FOUND);

    private final String code;
    private final String description;
    private final HttpStatus defaultStatus;
}
