package pl.inf.app.bm.invoice.control.listener;

import lombok.RequiredArgsConstructor;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;
import pl.inf.app.bm.invoice.boundary.InvoiceBF;
import pl.inf.app.bm.reservation.entity.ReservationBE;

/**
 * The invoice sender listener class
 */
@RequiredArgsConstructor
@Service
public class InvoiceSenderListener {

    private final InvoiceBF invoiceBF;

    /**
     * Process reservationBE event
     *
     * @param reservationBE object of reservation
     */
    @EventListener
    public void processEvent(final ReservationBE reservationBE) {
        invoiceBF.generateInvoice(reservationBE);
    }
}

