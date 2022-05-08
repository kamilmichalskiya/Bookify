package pl.inf.app.api;

import lombok.Getter;

/**
 * Names of link relations with description
 */
@Getter
public enum LinkRelations {
    GET_ROOM("Get room"),
    GET_ALL_ROOMS("Get all rooms");

    private final String description;

    LinkRelations(final String description) {
        this.description = description;
    }
}
