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
    ROOM_UPDATING_ERROR("B003", "Room cannot be updated. Room : {}", UNPROCESSABLE_ENTITY),

    EMPLOYEE_NOT_FOUND("B004", "Employee not found. Employee id: {}", NOT_FOUND),
    EMPLOYEE_ADDING_ERROR("B005", "Employee cannot be added. Employee : {}", UNPROCESSABLE_ENTITY),
    EMPLOYEE_UPDATING_ERROR("B006", "Employee cannot be updated. Employee : {}", UNPROCESSABLE_ENTITY),

    OFFER_NOT_FOUND("B007", "Offer not found. Offer id: {}", NOT_FOUND),
    OFFER_ADDING_ERROR("B008", "Offer cannot be added. Offer : {}", UNPROCESSABLE_ENTITY),
    OFFER_UPDATING_ERROR("B009", "Offer cannot be updated. Offer : {}", UNPROCESSABLE_ENTITY);

    private final String code;
    private final String description;
    private final HttpStatus defaultStatus;
}
