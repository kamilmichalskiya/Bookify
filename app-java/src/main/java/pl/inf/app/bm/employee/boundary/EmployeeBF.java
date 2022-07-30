package pl.inf.app.bm.employee.boundary;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pl.inf.app.api.employee.entity.UiEmployee;
import pl.inf.app.bm.employee.control.EmployeeRepositoryBA;
import pl.inf.app.bm.employee.control.UiEmployeeToEntityMapper;
import pl.inf.app.bm.employee.entity.EmployeeBE;
import pl.inf.app.error.ProcessException;
import pl.inf.app.utils.Filler;
import pl.inf.app.utils.Mapper;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static pl.inf.app.error.ErrorType.EMPLOYEE_ADDING_ERROR;
import static pl.inf.app.error.ErrorType.EMPLOYEE_NOT_FOUND;
import static pl.inf.app.error.ErrorType.EMPLOYEE_UPDATING_ERROR;

/**
 * The employee business facade class
 */
@Service
@RequiredArgsConstructor
public class EmployeeBF {
    private final EmployeeRepositoryBA employeeRepositoryBA;
    private final UiEmployeeToEntityMapper uiEmployeeToEntityMapper;

    /**
     * Get employee from the database for the given id
     *
     * @param id     the id of employee
     * @param mapper entity mapper
     * @return mapped employee
     * @throws ProcessException if no employee with the given id was found
     */
    public <T> T getById(final int id, final Mapper<EmployeeBE, T> mapper) {
        return employeeRepositoryBA.findById(id).map(mapper::map).orElseThrow(() -> new ProcessException(EMPLOYEE_NOT_FOUND, id));
    }

    /**
     * Retrieve list of all employees form database
     *
     * @param mapper entity mapper
     * @return list of mapped employees
     */
    public <T> List<T> getAll(final Mapper<EmployeeBE, T> mapper) {
        return employeeRepositoryBA.findAll().stream().map(mapper::map).collect(Collectors.toList());
    }

    /**
     * Fills and saves the employee entity
     *
     * @param uiEmployee data to fill the entity
     * @param uiMapper   mapper for the UI model
     * @param <T>        The class type of the mapping target
     * @return saved entity
     * @throws ProcessException if we cannot save the entity
     */
    public <T> T create(final UiEmployee uiEmployee, final Mapper<EmployeeBE, T> uiMapper) {
        final EmployeeBE employeeBE = uiEmployeeToEntityMapper.map(new Filler<>(uiEmployee, new EmployeeBE()));
        return Optional.of(employeeRepositoryBA.save(employeeBE)).map(uiMapper::map).orElseThrow(
                () -> new ProcessException(EMPLOYEE_ADDING_ERROR, employeeBE));
    }

    /**
     * Fills and updates the employee entity
     *
     * @param uiEmployee data to fill the entity
     * @param uiMapper   mapper for the UI model
     * @param <T>        The class type of the mapping target
     * @return updated entity
     * @throws ProcessException if we cannot update the entity
     */
    @Transactional
    public <T> T update(final UiEmployee uiEmployee, final Mapper<EmployeeBE, T> uiMapper) {
        final EmployeeBE employee = employeeRepositoryBA.findById(uiEmployee.getEmployeeId()).orElseThrow(
                () -> new ProcessException(EMPLOYEE_NOT_FOUND, uiEmployee.getEmployeeId()));
        final EmployeeBE employeeBE = uiEmployeeToEntityMapper.map(new Filler<>(uiEmployee, employee));
        return Optional.of(employeeRepositoryBA.save(employeeBE)).map(uiMapper::map).orElseThrow(
                () -> new ProcessException(EMPLOYEE_UPDATING_ERROR, employeeBE));
    }

    /**
     * Check that email is not in database
     *
     * @param email email to check
     * @return true if email was not found
     */
    public boolean checkMail(final String email) {
        return !employeeRepositoryBA.existsByEmail(email);
    }
}
