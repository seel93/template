package os.demo.web.controllers;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import os.demo.domain.DomainEntity;
import os.demo.service.DomainEntityService;
import java.util.List;

@RestController
@AllArgsConstructor
public class EntityController {

    private final DomainEntityService domainEntityService;

    @GetMapping("/all")
    public ResponseEntity<List<DomainEntity>> get() {
        return ResponseEntity.ok(domainEntityService.getStuff());
    }

    @GetMapping("/check")
    public ResponseEntity<String> check(){
        return ResponseEntity.ok("ok");
    }
}
