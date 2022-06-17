package pl.inf.app.api.room.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pl.inf.app.bm.room.entity.RoomType;

import java.util.List;
import java.util.Set;
import java.util.UUID;

/**
 * Model for UI Room
 */
@Getter
@Setter
@NoArgsConstructor
public class UiRoom {
    private UUID id;
    private String image;
    private RoomType roomType;
    private float price;
    private int capacity;
    private List<String> beds;
    private String description;
    private int area;
    private Set<String> addOns;
    private Set<String> accessories;
    private Set<String> offerDetails;
    private boolean isActive;
}
