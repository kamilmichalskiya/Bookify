package pl.inf.app.bm.reservation.control;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.inf.app.bm.reservation.entity.ReservationBE;

import java.sql.Date;
import java.util.List;
import java.util.UUID;

/**
 * Class to manage the reservation entity in the database
 */
@Repository
public interface ReservationRepositoryBA extends JpaRepository<ReservationBE, UUID> {

    List<ReservationBE> findByActiveTrueAndEndDateGreaterThanEqual(Date date);
}
