package pl.inf.app.bm.room.entity;

import lombok.Getter;

@Getter
public enum RoomType {
    BUDGET("Budget"),
    STANDARD("Standard"),
    PREMIUM("Premium");

    private final String value;

    RoomType(final String value) {
        this.value = value;
    }
}
