package pl.inf.app.bm.employee.control;

import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import pl.inf.app.api.employee.entity.UiEmployee;
import pl.inf.app.bm.employee.entity.EmployeeBE;
import pl.inf.app.utils.Filler;
import pl.inf.app.utils.Mapper;

/**
 * Fills the database employee model according to the UI employee model
 */
@RequiredArgsConstructor
@Component
public class UiEmployeeToEntityMapper implements Mapper<Filler<UiEmployee, EmployeeBE>, EmployeeBE> {

    private final PasswordEncoder passwordEncoder;

    @Override
    public EmployeeBE map(final Filler<UiEmployee, EmployeeBE> filler) {
        if (filler == null) return null;

        final EmployeeBE target = filler.getTarget();
        final UiEmployee source = filler.getSource();

        target.setEmail(source.getEmail());
        if (StringUtils.isNotBlank(source.getPassword())) {
            target.setPassword(passwordEncoder.encode(source.getPassword()));
        }
        target.setName(source.getName());
        target.setSurname(source.getSurname());
        target.setActive(source.isActive());

        return target;
    }
}
