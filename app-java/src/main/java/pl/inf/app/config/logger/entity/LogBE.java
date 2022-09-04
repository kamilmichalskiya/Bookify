package pl.inf.app.config.logger.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Timestamp;
import java.util.UUID;

/**
 * Class that represents log in the database
 */
@Getter
@Setter
@Entity
@Table(name = "logs")
public class LogBE {
    @Id
    @GeneratedValue
    @Column(updatable = false)
    private UUID id;
    private Timestamp logDate;
    private String username;
    private String message;
    @Enumerated(EnumType.STRING)
    private LogType type;
    private String userRole;
    private String session;
}
