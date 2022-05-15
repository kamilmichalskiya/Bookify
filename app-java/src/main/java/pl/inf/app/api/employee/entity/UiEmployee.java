package pl.inf.app.api.employee.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Model for UI Employee
 */
@Getter
@Setter
@NoArgsConstructor
public class UiEmployee {
    private int employeeId;
    private String name;
    private String surname;
    private String email;
    private String password;
}
