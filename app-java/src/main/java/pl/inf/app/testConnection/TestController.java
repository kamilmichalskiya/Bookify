package pl.inf.app.testConnection;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/hello")
public class TestController {
    private final UsersRepository usersRepository;

    public TestController(final UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    @GetMapping
    public ResponseEntity<List<UserBE>> hello() {
        return ResponseEntity.ok(usersRepository.findAll());
    }

}
