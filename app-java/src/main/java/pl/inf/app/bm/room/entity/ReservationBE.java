package pl.inf.app.bm.room.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.sql.Date;
import java.util.UUID;

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
}
