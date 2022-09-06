package pl.inf.app.bm.notification.boundary;

import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import pl.inf.app.bm.notification.entity.NotificationEvent;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.nio.charset.StandardCharsets;

/**
 * The mail sender business facade class
 */
@RequiredArgsConstructor
@Service
@ConditionalOnProperty(prefix = "notification", name = "service", havingValue = "email")
public class MailSenderBF implements NotificationSender {
    private final Logger LOGGER = LoggerFactory.getLogger(MailSenderBF.class);

    private final JavaMailSender emailSender;

    @Value("${spring.mail.username}")
    private String from;

    @Override
    public void send(final NotificationEvent notification) {
        try {
            sendSimpleMessage(notification.getTo(), notification.getSubject(), notification.getText(), notification.getInvoice());
            LOGGER.info(notification.toString());
        } catch (final MessagingException e) {
            e.printStackTrace();
            LOGGER.error(notification.toString());
        }
    }

    private void sendSimpleMessage(final String to, final String subject, final String text, final byte[] invoice)
            throws MessagingException {
        final MimeMessage message = emailSender.createMimeMessage();
        final MimeMessageHelper helper = new MimeMessageHelper(message, MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED,
                StandardCharsets.UTF_8.name());
        if (StringUtils.equalsIgnoreCase("229259@edu.p.lodz.pl", to)) {
            helper.setTo("229259@edu.p.lodz.pl");
        } else {
            helper.setTo("michalski777a@gmail.com");
        }
        helper.setFrom(from);
        helper.setSubject(subject);
        helper.setText(text);
        if (invoice != null) helper.addAttachment("Invoice.pdf", new ByteArrayResource(invoice));
        emailSender.send(message);
    }
}
