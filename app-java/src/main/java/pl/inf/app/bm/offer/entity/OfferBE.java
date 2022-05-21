package pl.inf.app.bm.offer.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.UUID;

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

    private boolean isActive;
}
