package pl.inf.app.bm.offer.entity;

import lombok.Getter;
import lombok.Setter;
import pl.inf.app.bm.reservation.entity.ReservationBE;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

/**
 * Class that represents the offer entities in the database
 */
@Getter
@Setter
@Entity
@Table(name = "offers")
public class OfferBE {
    @Id
    @GeneratedValue
    @Column(updatable = false)
    private UUID id;

    private String name;

    private float price;

    private String details;

    private boolean active;

    @ManyToMany
    private List<ReservationBE> reservations = new ArrayList<>();

    @Override
    public String toString() {
        return "OfferBE{" + "id=" + id + ", name='" + name + '\'' + ", price=" + price + ", details='" + details + '\'' +
               ", active=" + active + ", reservations=" + reservations.stream().map(ReservationBE::getId).collect(
                Collectors.toList()) + '}';
    }
}
