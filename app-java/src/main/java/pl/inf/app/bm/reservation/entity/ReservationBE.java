package pl.inf.app.bm.reservation.entity;

import lombok.Getter;
import lombok.Setter;
import pl.inf.app.bm.offer.entity.OfferBE;
import pl.inf.app.bm.room.entity.RoomBE;

import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.sql.Date;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

/**
 * Class that represents the reservations entities in the database
 */
@Getter
@Setter
@Entity
@Table(name = "reservations")
public class ReservationBE {
    @Id
    @GeneratedValue
    @Column(updatable = false)
    private UUID id;

    private Date startDate;

    private Date endDate;

    @ManyToOne(fetch = FetchType.LAZY)
    private RoomBE room;

    private float totalPrice;

    private boolean paid;

    @ManyToMany
    @JoinTable(name = "reservations_offers", joinColumns = @JoinColumn(name = "reservation_id"),
               inverseJoinColumns = @JoinColumn(name = "offer_id"))
    private Set<OfferBE> offers = new HashSet<>();

    @Embedded
    @AttributeOverrides({@AttributeOverride(name = "name", column = @Column(name = "customer_name")),
                         @AttributeOverride(name = "surname", column = @Column(name = "customer_surname")),
                         @AttributeOverride(name = "email", column = @Column(name = "customer_email"))})
    private Customer customerData;

    @Embedded
    @AttributeOverrides({@AttributeOverride(name = "name", column = @Column(name = "guest_name")),
                         @AttributeOverride(name = "surname", column = @Column(name = "guest_surname")),
                         @AttributeOverride(name = "email", column = @Column(name = "guest_email"))})
    private Customer guestData;

    private boolean active;

    @Override
    public String toString() {
        return "ReservationBE{" + "id=" + id + ", startDate=" + startDate + ", endDate=" + endDate + ", room=" +
               (room != null ? room.getId() : "") + ", totalPrice=" + totalPrice + ", paid=" + paid + ", offers=" +
               offers.stream().map(OfferBE::getId).collect(Collectors.toList()) + ", customerData=" + customerData +
               ", guestData=" + guestData + ", active=" + active + '}';
    }
}
