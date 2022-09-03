package pl.inf.app.bm.notification.boundary;

import pl.inf.app.bm.notification.entity.NotificationEvent;

/**
 * The notification sender interface
 */
public interface NotificationSender {
    /**
     * Sends notification
     *
     * @param notification object with params to send notification
     */
    void send(NotificationEvent notification);
}

