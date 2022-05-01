package pl.inf.app.bm.room.entity;

import lombok.Getter;

@Getter
public enum Bed {
    SINGLE_BED("Single Bed"),
    DOUBLE_BED("Double Bed");

    private final String value;

    Bed(final String value) {
        this.value = value;
    }
}
