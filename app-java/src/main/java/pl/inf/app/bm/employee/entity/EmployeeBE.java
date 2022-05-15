package pl.inf.app.bm.employee.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

/**
 * Class that represents the employee entities in the database
 */
@Getter
@Setter
@Entity
@Table(name = "employees")
public class EmployeeBE {
    @Id
    @SequenceGenerator(name = "emp_id_seq", sequenceName = "emp_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "emp_id_seq")
    @Column(updatable = false)
    private int id;

    private String name;

    private String surname;

    private String email;

    private String password;

    private boolean isActive;
}
