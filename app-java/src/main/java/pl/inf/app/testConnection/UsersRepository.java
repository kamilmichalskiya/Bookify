package pl.inf.app.testConnection;

import com.sun.xml.bind.v2.model.core.ID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
interface UsersRepository extends JpaRepository<UserBE, ID> {}
