package pl.inf.app.bm.offer.control;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.inf.app.bm.offer.entity.OfferBE;

import java.util.List;
import java.util.UUID;

/**
 * Class to manage the offer entity in the database
 */
@Repository
public interface OfferRepositoryBA extends JpaRepository<OfferBE, UUID> {
    List<OfferBE> findByActiveTrue();
}
