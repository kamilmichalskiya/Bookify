package pl.inf.app.bm.employee.control;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.inf.app.bm.employee.entity.EmployeeBE;

import java.util.Optional;

/**
 * Class to manage the employee entity in the database
 */
@Repository
public interface EmployeeRepositoryBA extends JpaRepository<EmployeeBE, Integer> {
    boolean existsByEmail(String email);

    Optional<EmployeeBE> findByEmail(String email);
}
