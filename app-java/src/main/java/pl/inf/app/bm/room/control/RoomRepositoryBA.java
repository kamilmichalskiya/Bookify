package pl.inf.app.bm.room.control;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.inf.app.bm.room.entity.RoomBE;

import java.util.UUID;

@Repository
public interface RoomRepositoryBA extends JpaRepository<RoomBE, UUID> {
}
