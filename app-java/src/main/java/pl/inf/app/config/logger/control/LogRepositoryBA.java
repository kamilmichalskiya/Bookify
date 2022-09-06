package pl.inf.app.config.logger.control;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.inf.app.config.logger.entity.LogBE;

import java.util.UUID;

/**
 * Class to manage the log entity in the database
 */
@Repository
public interface LogRepositoryBA extends JpaRepository<LogBE, UUID> {}
