package pl.inf.app.bm.reservation.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Embeddable;

/**
 * Class that represents customer information
 */
@Getter
@Setter
@Embeddable
public class Customer {
    private String name;

    private String surname;

    private String email;

    @Override
    public String toString() {
        return "Customer{" + "name='" + name + '\'' + ", surname='" + surname + '\'' + ", email='" + email + '\'' + '}';
    }
}
