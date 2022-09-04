package pl.inf.app.api.room.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pl.inf.app.bm.room.entity.AddOns;
import pl.inf.app.bm.room.entity.RoomType;

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
    private Set<String> images;
    private RoomType roomType;
    private int roomNumber;
    private float price;
    private int capacity;
    private int singleBeds;
    private int doubleBeds;
    private String description;
    private int area;
    private Set<AddOns> addOns;
    private Set<String> accessories;
    private boolean isActive;

    @Override
    public String toString() {
        return "UiRoom{" + "id=" + id + ", image='" + images.size() + '\'' + ", roomType=" + roomType + ", price=" + price +
               ", capacity=" + capacity + ", singleBeds=" + singleBeds + ", doubleBeds=" + doubleBeds + ", description='" +
               description + '\'' + ", area=" + area + ", addOns=" + addOns + ", accessories=" + accessories + ", isActive=" +
               isActive + '}';
    }
}
