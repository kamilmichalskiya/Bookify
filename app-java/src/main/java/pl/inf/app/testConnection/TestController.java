package pl.inf.app.testConnection;

import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/hello")
public class TestController {
    private final SimpMessagingTemplate messagingTemplate;

    public TestController(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }

    @GetMapping
    public Message hello() {
        messagingTemplate.convertAndSend("/topic/test", new Message("websocket test"));
        return new Message("hello to you");
    }

    class Message {
        private final String value;

        public Message(final String value) {
            this.value = value;
        }

        public String getValue() {
            return value;
        }
    }
}
