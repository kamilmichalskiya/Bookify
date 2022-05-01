package pl.inf.app.bm.room.entity;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

/**
 * Class for bed types
 */
@Getter
@RequiredArgsConstructor
public enum Bed {
    SINGLE_BED("Single Bed"),
    DOUBLE_BED("Double Bed");

    private final String value;
}
