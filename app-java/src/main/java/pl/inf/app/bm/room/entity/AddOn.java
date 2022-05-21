package pl.inf.app.bm.room.entity;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

/**
 * Class for room addons
 */
@Getter
@RequiredArgsConstructor
public enum AddOn {
    WIFI("Wi-Fi"),
    TELEPHONE("Telephone");

    private final String value;
}
