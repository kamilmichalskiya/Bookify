package pl.inf.app.bm.notification.boundary;

import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import pl.inf.app.bm.notification.entity.NotificationEvent;

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
        sendSimpleMessage(notification.getTo(), notification.getSubject(), notification.getText());
        LOGGER.info(notification.toString());
    }

    private void sendSimpleMessage(final String to, final String subject, final String text) {
        final SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(from);
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);
        emailSender.send(message);
    }
}
