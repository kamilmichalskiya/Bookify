package pl.inf.app.bm.room.entity;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

/**
 * Class for room types
 */
@Getter
@RequiredArgsConstructor
public enum RoomType {
    BUDGET("Budget"),
    STANDARD("Standard"),
    PREMIUM("Premium");

    private final String value;
}
