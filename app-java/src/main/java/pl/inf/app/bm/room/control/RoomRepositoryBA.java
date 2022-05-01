package pl.inf.app.bm.room.control;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.inf.app.bm.room.entity.RoomBE;

import java.util.UUID;

/**
 * Class to manage the room entity in the database
 */
@Repository
public interface RoomRepositoryBA extends JpaRepository<RoomBE, UUID> {
}
