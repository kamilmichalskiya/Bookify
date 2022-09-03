package pl.inf.app.bm.notification.entity;

import lombok.Builder;
import lombok.Getter;

/**
 * Class contains params to send notification
 */
@Builder
@Getter
public class NotificationEvent {
    private final String to;
    private final String subject;
    private final String text;

    @Override
    public String toString() {
        return String.format("To: %s\nSubject: %s\nText: %s", to, subject, text);
    }
}
