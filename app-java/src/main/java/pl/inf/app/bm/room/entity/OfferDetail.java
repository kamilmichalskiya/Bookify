package pl.inf.app.bm.room.entity;

import lombok.Getter;

@Getter
public enum OfferDetail {
    FREE_WIFI("Free Wi-Fi");

    private final String value;

    OfferDetail(final String value) {
        this.value = value;
    }
}
