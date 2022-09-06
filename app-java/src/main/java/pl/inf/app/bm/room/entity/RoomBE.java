package pl.inf.app.bm.room.entity;

import lombok.Getter;
import lombok.Setter;
import pl.inf.app.bm.reservation.entity.ReservationBE;

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
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

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

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "images", joinColumns = @JoinColumn(name = "room_id"))
    @Column(name = "image_url")
    private Set<String> images = new HashSet<>();

    @Enumerated(EnumType.STRING)
    private RoomType roomType;

    private int roomNumber;

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
    private Set<AddOns> addOns = new HashSet<>();

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "accessories", joinColumns = @JoinColumn(name = "room_id"))
    @Column(name = "accessory")
    private Set<String> accessories = new HashSet<>();

    @OneToMany(mappedBy = "room")
    private Set<ReservationBE> reservations = new HashSet<>();

    private boolean active;

    @Override
    public String toString() {
        return "RoomBE{" + "id=" + id + '\'' + ", roomType=" + roomType + ", price=" + price + ", capacity=" + capacity +
               ", singleBeds=" + singleBeds + ", doubleBeds=" + doubleBeds + ", description='" + description + '\'' + ", area=" +
               area + ", addOns=" + addOns + ", accessories=" + accessories + ", reservations=" + reservations.stream().map(
                ReservationBE::getId).collect(Collectors.toList()) + ", active=" + active + '}';
    }
}
