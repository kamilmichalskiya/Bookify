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
    private final byte[] invoice;

    @Override
    public String toString() {
        return String.format("To: %s\nSubject: %s\nText: %s\nAttachment: %s", to, subject, text, invoice != null);
    }
}
