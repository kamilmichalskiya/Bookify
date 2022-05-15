package pl.inf.app.api.offer.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

/**
 * Model for UI Offer
 */
@Getter
@Setter
@NoArgsConstructor
public class UiOffer {
    private UUID id;
    private String name;
    private float price;
    private String details;
    private boolean isActive;
}
