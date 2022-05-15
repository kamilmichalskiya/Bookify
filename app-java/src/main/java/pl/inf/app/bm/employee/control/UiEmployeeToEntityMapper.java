package pl.inf.app.bm.employee.control;

import org.springframework.stereotype.Component;
import pl.inf.app.api.employee.entity.UiEmployee;
import pl.inf.app.bm.employee.entity.EmployeeBE;
import pl.inf.app.utils.Filler;
import pl.inf.app.utils.Mapper;

/**
 * Fills the database employee model according to the UI employee model
 */
@Component
public class UiEmployeeToEntityMapper implements Mapper<Filler<UiEmployee, EmployeeBE>, EmployeeBE> {

    @Override
    public EmployeeBE map(final Filler<UiEmployee, EmployeeBE> filler) {
        if (filler == null) return null;

        final EmployeeBE target = filler.getTarget();
        final UiEmployee source = filler.getSource();

        target.setEmail(source.getEmail());
        target.setPassword(source.getPassword());
        target.setName(source.getName());
        target.setSurname(source.getSurname());

        return target;
    }
}
