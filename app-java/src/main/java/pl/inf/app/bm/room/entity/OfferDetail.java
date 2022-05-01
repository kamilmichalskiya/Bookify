package pl.inf.app.bm.room.entity;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

/**
 * Class for room offer details
 */
@Getter
@RequiredArgsConstructor
public enum OfferDetail {
    FREE_WIFI("Free Wi-Fi");

    private final String value;
}
