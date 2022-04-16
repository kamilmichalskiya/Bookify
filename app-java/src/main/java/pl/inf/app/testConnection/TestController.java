package pl.inf.app.testConnection;

import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/hello")
public class TestController {
    private final SimpMessagingTemplate messagingTemplate;
    private final UsersRepository usersRepository;

    public TestController(SimpMessagingTemplate messagingTemplate, UsersRepository usersRepository) {
        this.messagingTemplate = messagingTemplate;
        this.usersRepository = usersRepository;
    }

    @GetMapping
    public ResponseEntity<List<UserBE>> hello() {
        messagingTemplate.convertAndSend("/topic/test", new Message("websocket test"));
        return ResponseEntity.ok(usersRepository.findAll());
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
