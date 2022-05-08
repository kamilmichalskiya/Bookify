package pl.inf.app.api.room.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.hateoas.RepresentationModel;
import pl.inf.app.bm.room.entity.Accessory;
import pl.inf.app.bm.room.entity.AddOn;
import pl.inf.app.bm.room.entity.Bed;
import pl.inf.app.bm.room.entity.OfferDetail;
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
public class UiRoom extends RepresentationModel<UiRoom> {
    private UUID id;
    private String image;
    private RoomType roomType;
    private float price;
    private int capacity;
    private List<Bed> beds;
    private String description;
    private int area;
    private Set<AddOn> addOns;
    private Set<Accessory> accessories;
    private Set<OfferDetail> offerDetails;
}
