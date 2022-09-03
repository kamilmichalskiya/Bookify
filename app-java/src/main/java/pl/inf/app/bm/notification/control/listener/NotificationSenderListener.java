package pl.inf.app.bm.notification.control.listener;

import lombok.RequiredArgsConstructor;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;
import pl.inf.app.bm.notification.boundary.NotificationSender;
import pl.inf.app.bm.notification.entity.NotificationEvent;

/**
 * The notification sender listener class
 */
@RequiredArgsConstructor
@Service
public class NotificationSenderListener {

    private final NotificationSender notificationSender;

    /**
     * Process notification event
     *
     * @param event object with params to send notification
     */
    @EventListener
    public void processEvent(final NotificationEvent event) {
        notificationSender.send(event);
    }
}

