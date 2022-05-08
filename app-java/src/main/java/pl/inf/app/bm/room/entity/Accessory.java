package pl.inf.app.bm.room.entity;

import lombok.Getter;

@Getter
public enum Accessory {
    TABLE("Table");

    private final String value;

    Accessory(final String value) {
        this.value = value;
    }
}
