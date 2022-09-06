package pl.inf.app.api.employee.boundary;

import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.inf.app.api.employee.control.EmployeeToUiMapper;
import pl.inf.app.api.employee.entity.UiEmployee;
import pl.inf.app.bm.employee.boundary.EmployeeBF;
import pl.inf.app.config.logger.boundary.LogBF;

import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;
import static pl.inf.app.api.LinkRelations.CREATE_EMPLOYEE;
import static pl.inf.app.api.LinkRelations.GET_EMPLOYEE;
import static pl.inf.app.api.LinkRelations.UPDATE_EMPLOYEE;

/**
 * Api for employees management
 */
@Api(tags = {"Employees"})
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@RequestMapping(value = "/api/employees", produces = "application/hal+json")
public class EmployeeController {
    private final EmployeeBF employeeBF;
    private final EmployeeToUiMapper employeeToUiMapper;

    /**
     * Get all employees from database
     *
     * @return list of employees
     */
    @GetMapping
    public ResponseEntity<CollectionModel<EntityModel<UiEmployee>>> getAll() {
        final List<UiEmployee> uiEmployeeList = employeeBF.getAll(employeeToUiMapper);
        LogBF.logCustom("Retrieve list of employees. Size : %d", uiEmployeeList.size());
        return ResponseEntity.ok(CollectionModel.of(uiEmployeeList.stream().map(employee -> EntityModel.of(employee)
                .add(linkTo(methodOn(EmployeeController.class).getById(employee.getEmployeeId())).withRel(
                        GET_EMPLOYEE.toString()))
                .add(linkTo(methodOn(EmployeeController.class).updateEmployee(employee.getEmployeeId(), null)).withRel(
                        UPDATE_EMPLOYEE.toString()))).collect(Collectors.toList()))
                .add(linkTo(methodOn(EmployeeController.class).createEmployee(null)).withRel(CREATE_EMPLOYEE.toString()))
                .add(linkTo(methodOn(EmployeeController.class).getAll()).withSelfRel()));
    }

    /**
     * Get employee from database
     *
     * @param id the id of employee
     * @return employee
     */
    @GetMapping("/{id}")
    public ResponseEntity<EntityModel<UiEmployee>> getById(@PathVariable final Integer id) {
        final UiEmployee employee = employeeBF.getById(id, employeeToUiMapper);
        LogBF.logGet(employee);
        return ResponseEntity.ok(EntityModel.of(employee)
                .add(linkTo(methodOn(EmployeeController.class).updateEmployee(id, null)).withRel(UPDATE_EMPLOYEE.toString()))
                .add(linkTo(methodOn(EmployeeController.class).getById(id)).withSelfRel()));
    }

    /**
     * Create new employee
     *
     * @param uiEmployee employee to save
     * @return saved employee
     */
    @PostMapping
    public ResponseEntity<EntityModel<UiEmployee>> createEmployee(@RequestBody final UiEmployee uiEmployee) {
        final UiEmployee employee = employeeBF.create(uiEmployee, employeeToUiMapper);
        LogBF.logCreate(employee);
        return ResponseEntity.ok(EntityModel.of(employee)
                .add(linkTo(methodOn(EmployeeController.class).getById(employee.getEmployeeId())).withRel(
                        GET_EMPLOYEE.toString()))
                .add(linkTo(methodOn(EmployeeController.class).updateEmployee(employee.getEmployeeId(), null)).withRel(
                        UPDATE_EMPLOYEE.toString()))
                .add(linkTo(methodOn(EmployeeController.class).createEmployee(null)).withSelfRel()));
    }

    /**
     * Update employee
     *
     * @param id         the id of employee
     * @param uiEmployee employee to update
     * @return updated employee
     */
    @PutMapping("/{id}")
    public ResponseEntity<EntityModel<UiEmployee>> updateEmployee(@PathVariable final Integer id,
                                                                  @RequestBody final UiEmployee uiEmployee) {
        uiEmployee.setEmployeeId(id);
        final UiEmployee employee = employeeBF.update(uiEmployee, employeeToUiMapper);
        LogBF.logUpdate(employee);
        return ResponseEntity.ok(EntityModel.of(employee)
                .add(linkTo(methodOn(EmployeeController.class).getById(employee.getEmployeeId())).withRel(
                        GET_EMPLOYEE.toString()))
                .add(linkTo(methodOn(EmployeeController.class).updateEmployee(id, null)).withSelfRel()));
    }

    /**
     * Check that the email is available to use
     *
     * @param email email to check
     * @return true if email is available to use
     */
    @PostMapping("/email/check")
    public ResponseEntity<Boolean> checkMail(@RequestBody final String email) {
        LogBF.logCustom("Check email : %s", email);
        return ResponseEntity.ok(employeeBF.checkMail(email));
    }

}
