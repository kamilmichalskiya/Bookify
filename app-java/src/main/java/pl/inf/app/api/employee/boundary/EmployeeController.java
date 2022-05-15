package pl.inf.app.api.employee.boundary;

import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.http.ResponseEntity;
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

import java.util.stream.Collectors;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;
import static pl.inf.app.api.LinkRelations.CREATE_EMPLOYEE;
import static pl.inf.app.api.LinkRelations.GET_ALL_EMPLOYEES;
import static pl.inf.app.api.LinkRelations.GET_EMPLOYEE;
import static pl.inf.app.api.LinkRelations.UPDATE_EMPLOYEE;

/**
 * Api for employees management
 */
@Api(tags = {"Employees"})
@RestController
@RequiredArgsConstructor
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
        return ResponseEntity.ok(CollectionModel.of(employeeBF.getAll(employeeToUiMapper).stream().map(employee -> EntityModel.of(
                employee).add(linkTo(methodOn(EmployeeController.class).getById(employee.getEmployeeId()))
                .withRel(GET_EMPLOYEE.toString()))
                .add(linkTo(methodOn(EmployeeController.class).updateEmployee(employee.getEmployeeId(), null))
                        .withRel(UPDATE_EMPLOYEE.toString()))).collect(Collectors.toList()))
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
        return ResponseEntity.ok(EntityModel.of(employeeBF.getById(id, employeeToUiMapper)).add(
                linkTo(methodOn(EmployeeController.class).updateEmployee(id, null)).withRel(UPDATE_EMPLOYEE.toString()))
                .add(linkTo(methodOn(EmployeeController.class).getAll()).withRel(GET_ALL_EMPLOYEES.toString()))
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
        return ResponseEntity.ok(EntityModel.of(employee)
                .add(linkTo(methodOn(EmployeeController.class).getById(employee.getEmployeeId()))
                        .withRel(GET_EMPLOYEE.toString()))
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
        return ResponseEntity.ok(EntityModel.of(employee)
                .add(linkTo(methodOn(EmployeeController.class).getById(employee.getEmployeeId()))
                        .withRel(GET_EMPLOYEE.toString()))
                .add(linkTo(methodOn(EmployeeController.class).updateEmployee(id, null)).withSelfRel()));
    }

}
