package pl.inf.app.api.reservation.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Model for UI InvoiceData
 */
@Getter
@Setter
@NoArgsConstructor
public class InvoiceData {
    private String companyName;
    private String nip;
    private String street;
    private String postalCode;
    private String city;
    private String country;

    @Override
    public String toString() {
        return "InvoiceData{" + "companyName='" + companyName + ", nip='" + nip + ", street='" + street + ", postalCode='" +
               postalCode + ", city='" + city + ", country='" + country + '}';
    }
}
