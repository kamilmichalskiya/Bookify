package pl.inf.app.api.employee.control;

import org.springframework.stereotype.Component;
import pl.inf.app.api.employee.entity.UiEmployee;
import pl.inf.app.bm.employee.entity.EmployeeBE;
import pl.inf.app.utils.Mapper;

/**
 * Map database employee model to ui employee model
 */
@Component
public class EmployeeToUiMapper implements Mapper<EmployeeBE, UiEmployee> {
    @Override
    public UiEmployee map(final EmployeeBE source) {
        final UiEmployee employee = new UiEmployee();
        employee.setEmployeeId(source.getId());
        employee.setEmail(source.getEmail());
        employee.setPassword(source.getPassword());
        employee.setName(source.getName());
        employee.setSurname(source.getSurname());
        employee.setActive(source.isActive());
        return employee;
    }
}
