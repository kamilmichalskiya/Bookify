package pl.inf.app.bm.invoice.boundary;

import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDFont;
import org.apache.pdfbox.pdmodel.font.PDType0Font;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;
import pl.inf.app.bm.notification.entity.NotificationEvent;
import pl.inf.app.bm.offer.entity.OfferBE;
import pl.inf.app.bm.reservation.entity.ReservationBE;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.LinkedList;
import java.util.Optional;
import java.util.concurrent.TimeUnit;

@RequiredArgsConstructor
@Service
public class InvoiceBF {
    private final Logger LOGGER = LoggerFactory.getLogger(InvoiceBF.class);
    private final ApplicationEventPublisher eventPublisher;

    @Value("${notification.service}")
    private String service;

    public void generateInvoice(final ReservationBE reservation) {
        final PDDocument document = new PDDocument();
        try {
            final PDPage page = new PDPage();
            document.addPage(page);
            final PDFont font = PDType0Font.load(document, getClass().getResourceAsStream("/Montserrat Regular 400.ttf"));
            final PDPageContentStream cs = new PDPageContentStream(document, page);

            addText(cs, "Bookify", font, 22, 265, 750);
            addText(cs, "Faktura", font, 18, 270, 690);

            final LinkedList<LinkedList<String>> table = new LinkedList<>();
            table.add(getCustomerNames());
            table.add(getCustomerValues(reservation));
            addFirstTable(font, cs, table);

            addSecondTableHeaders(font, cs);

            final float price = reservation.getRoom().getPrice();
            final long days = TimeUnit.DAYS.convert(reservation.getEndDate().getTime() - reservation.getStartDate().getTime(),
                    TimeUnit.MILLISECONDS);
            final LinkedList<LinkedList<String>> table2 = new LinkedList<>();
            table2.add(getProductNames(reservation));
            table2.add(getUnitPrices(reservation, price));
            table2.add(getQuantity(reservation, days));
            table2.add(getPrices(reservation, price, days));
            addSecondTable(font, cs, table2);

            addText(cs, "Suma: ", font, 14, 330, 380 - (20 * (reservation.getOffers().size())));
            addText(cs, String.format("%.2f", reservation.getTotalPrice()), font, 14, 430,
                    380 - (20 * (reservation.getOffers().size())));

            cs.close();

            if (StringUtils.equals("email", service)) {
                final ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
                document.save(byteArrayOutputStream);
                final NotificationEvent notification = NotificationEvent.builder()
                        .to(reservation.getCustomerData().getEmail())
                        .subject("Bookify - Faktura do rezerwacji")
                        .text("W załączniku przesyłamy fakturę do rezerwacji pokoju")
                        .invoice(byteArrayOutputStream.toByteArray())
                        .build();
                eventPublisher.publishEvent(notification);
            } else {
                document.save("/Invoice.pdf");
                LOGGER.info("Zapisano fakturę pod nazwą Invoice.pdf");
            }
        } catch (final IOException e) {
            e.printStackTrace();
        }
    }

    private void addSecondTableHeaders(final PDFont font, final PDPageContentStream cs) throws IOException {
        addText(cs, "Nazwa produktu", font, 14, 80, 420);
        addText(cs, "Cena za szt.", font, 14, 220, 420);
        addText(cs, "Ilość", font, 14, 330, 420);
        addText(cs, "Cena", font, 14, 430, 420);
    }

    private LinkedList<String> getPrices(final ReservationBE reservation, final float price, final long days) {
        final LinkedList<String> col = new LinkedList<>();
        col.add(String.format("%.2f", price * days));
        for (final OfferBE offerBE1 : reservation.getOffers()) {
            col.add(String.format("%.2f", offerBE1.getPrice() * days));
        }
        return col;
    }

    private LinkedList<String> getQuantity(final ReservationBE reservation, final long days) {
        final LinkedList<String> col = new LinkedList<>();
        col.add(String.format("%d", days));
        for (final OfferBE ignored : reservation.getOffers()) {
            col.add(String.format("%d", days));
        }
        return col;
    }

    private LinkedList<String> getUnitPrices(final ReservationBE reservation, final float price) {
        final LinkedList<String> col = new LinkedList<>();
        col.add(String.format("%.2f", price));
        for (final OfferBE offerBE1 : reservation.getOffers()) {
            col.add(String.format("%.2f", offerBE1.getPrice()));
        }
        return col;
    }

    private LinkedList<String> getProductNames(final ReservationBE reservation) {
        final LinkedList<String> col = new LinkedList<>();
        col.add(String.format("Pokój nr %d", reservation.getRoom().getRoomNumber()));
        for (final OfferBE offerBE1 : reservation.getOffers()) {
            col.add(offerBE1.getName());
        }
        return col;
    }

    private void addSecondTable(final PDFont font, final PDPageContentStream cs, final LinkedList<LinkedList<String>> table2)
            throws IOException {
        addColumn(font, cs, table2.remove(), 12, 80, 400);
        addColumn(font, cs, table2.remove(), 12, 220, 400);
        addColumn(font, cs, table2.remove(), 12, 330, 400);
        addColumn(font, cs, table2.remove(), 12, 430, 400);
    }

    private void addFirstTable(final PDFont font, final PDPageContentStream cs, final LinkedList<LinkedList<String>> table)
            throws IOException {
        addColumn(font, cs, table.remove(), 14, 60, 610);
        addColumn(font, cs, table.remove(), 14, 170, 610);
    }

    private LinkedList<String> getCustomerValues(final ReservationBE reservation) {
        final LinkedList<String> values = new LinkedList<>();
        values.add(reservation.getCustomerData().getName());
        values.add(reservation.getCustomerData().getSurname());
        values.add(reservation.getCustomerData().getEmail());
        values.add(reservation.getCompanyName());
        values.add(reservation.getNip());
        values.add(reservation.getStreet());
        values.add(reservation.getPostalCode());
        values.add(reservation.getCity());
        values.add(reservation.getCountry());
        return values;
    }

    private LinkedList<String> getCustomerNames() {
        final LinkedList<String> names = new LinkedList<>();
        names.add("Imię: ");
        names.add("Nazwisko: ");
        names.add("Adres email: ");
        names.add("Nazwa firmy: ");
        names.add("NIP: ");
        names.add("Ulica: ");
        names.add("Kod pocztowy: ");
        names.add("Miasto: ");
        names.add("Kraj: ");
        return names;
    }

    private void addColumn(final PDFont font, final PDPageContentStream cs, final LinkedList<String> names2, final int fontSize,
                           final int tx, final int ty) throws IOException {
        cs.beginText();
        cs.setFont(font, fontSize);
        cs.setLeading((float) 20.0);
        cs.newLineAtOffset(tx, ty);
        if (names2 != null) {
            names2.forEach(text -> {
                try {
                    cs.showText(Optional.ofNullable(text).orElse(""));
                    cs.newLine();
                } catch (final IOException e) {
                    e.printStackTrace();
                }
            });
        }
        cs.endText();
    }

    private void addText(final PDPageContentStream cs, final String text, final PDFont font, final int fontSize, final int tx,
                         final int ty) throws IOException {
        cs.beginText();
        cs.setFont(font, fontSize);
        cs.newLineAtOffset(tx, ty);
        cs.showText(Optional.ofNullable(text).orElse(""));
        cs.endText();
    }
}
