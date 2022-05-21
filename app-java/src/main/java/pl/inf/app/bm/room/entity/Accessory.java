package pl.inf.app.bm.room.entity;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

/**
 * Class for room accessories
 */
@Getter
@RequiredArgsConstructor
public enum Accessory {
    TABLE("Table");

    private final String value;
}
