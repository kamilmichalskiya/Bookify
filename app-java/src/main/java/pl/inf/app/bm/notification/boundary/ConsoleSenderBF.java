package pl.inf.app.bm.notification.boundary;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Service;
import pl.inf.app.bm.notification.entity.NotificationEvent;

/**
 * The console sender business facade class
 */
@Service
@ConditionalOnProperty(prefix = "notification", name = "service", havingValue = "console")
public class ConsoleSenderBF implements NotificationSender {
    private final Logger LOGGER = LoggerFactory.getLogger(ConsoleSenderBF.class);

    @Override
    public void send(final NotificationEvent notification) {
        System.out.println(notification);
        LOGGER.info(notification.toString());
    }
}
