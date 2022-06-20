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
import javax.persistence.OneToMany;
import javax.persistence.Table;
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

    private int singleBeds;

    private int doubleBeds;

    private String description;

    private int area;

    @Enumerated(EnumType.STRING)
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "add_ons", joinColumns = @JoinColumn(name = "room_id"))
    @Column(name = "add_on")
    private Set<AddOns> addOns;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "accessories", joinColumns = @JoinColumn(name = "room_id"))
    @Column(name = "accessory")
    private Set<String> accessories;

    @OneToMany
    private Set<ReservationBE> reservations;

    private boolean active;
}
