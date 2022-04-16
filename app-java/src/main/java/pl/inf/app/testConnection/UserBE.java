package pl.inf.app.testConnection;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "users")
public class UserBE {
    @Id
    private UUID id;
    private String username;
}
