package web;

import lombok.NoArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import service.Service;

@RestController
@NoArgsConstructor
public class Controller {

    private Service service;

    @GetMapping("/all")
    public ResponseEntity<String> getAllEntities() {
        return ResponseEntity.ok("ok");
    }
}
