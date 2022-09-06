package pl.inf.app.api.reservation.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pl.inf.app.api.offer.entity.UiOffer;
import pl.inf.app.api.room.entity.UiRoom;
import pl.inf.app.bm.reservation.entity.Customer;

import java.sql.Date;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

/**
 * Model for UI Reservation
 */
@Getter
@Setter
@NoArgsConstructor
public class UiReservation {
    private UUID id;
    private Date startDate;
    private Date endDate;
    private UiRoom room;
    private float totalPrice;
    private boolean paid;
    private Set<UiOffer> offers = new HashSet<>();
    private Customer customerData;
    private Customer guestData;
    private boolean isActive;
    private InvoiceData invoiceData;

    @Override
    public String toString() {
        return "UiReservation{" + "id=" + id + ", startDate=" + startDate + ", endDate=" + endDate + ", room=" +
               (room != null ? room.getId() : "") + ", totalPrice=" + totalPrice + ", paid=" + paid + ", offers=" +
               offers.stream().map(UiOffer::getId).collect(Collectors.toList()) + ", customerData=" + customerData +
               ", guestData=" + guestData + ", isActive=" + isActive + ", invoiceData='" +
               (invoiceData != null ? invoiceData.toString() : "") + '}';
    }

}
