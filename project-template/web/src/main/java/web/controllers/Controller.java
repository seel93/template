package web.controllers;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import service.NewService;

@RestController
@Slf4j
@RequiredArgsConstructor
public class Controller {

    private final NewService newService;

    @GetMapping("/all")
    public ResponseEntity<String> getAllEntities() {
        log.info("request recieved");
        return ResponseEntity.ok("ok");
    }
}
