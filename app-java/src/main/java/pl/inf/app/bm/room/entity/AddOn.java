package pl.inf.app.bm.room.entity;

import lombok.Getter;

@Getter
public enum AddOn {
    WIFI("Wi-Fi"),
    TELEPHONE("Telephone");

    private final String value;

    AddOn(final String value) {
        this.value = value;
    }
}
