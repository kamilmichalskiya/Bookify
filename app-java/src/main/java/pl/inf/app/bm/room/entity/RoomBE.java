package pl.inf.app.bm.room.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;
import java.util.List;
import java.util.Set;
import java.util.UUID;

/**
 * Class that represents the room entities in the database
 */
@Getter
@Setter
@Entity
@Table(name = "rooms")
public class RoomBE {
    @Id
    @GeneratedValue
    @Column(updatable = false)
    private UUID id;

    private String image;

    @Enumerated(EnumType.STRING)
    private RoomType roomType;

    private float price;

    private int capacity;

    @Enumerated(EnumType.STRING)
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "beds", joinColumns = @JoinColumn(name = "room_id"))
    @Column(name = "bed")
    private List<Bed> beds;

    private String description;

    private int area;

    @Enumerated(EnumType.STRING)
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "add_ons", joinColumns = @JoinColumn(name = "room_id"))
    @Column(name = "add_on")
    private Set<AddOn> addOns;

    @Enumerated(EnumType.STRING)
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "accessories", joinColumns = @JoinColumn(name = "room_id"))
    @Column(name = "accessory")
    private Set<Accessory> accessories;

    @Enumerated(EnumType.STRING)
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "offer_details", joinColumns = @JoinColumn(name = "room_id"))
    @Column(name = "offer_detail")
    private Set<OfferDetail> offerDetails;

    private boolean isActive;
}
