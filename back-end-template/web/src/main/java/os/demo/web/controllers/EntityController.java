package os.demo.web.controllers;

import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import os.demo.domain.DomainEntity;
import os.demo.service.DomainEntityService;
import java.util.List;

@RestController
@AllArgsConstructor
public class EntityController {

    private final DomainEntityService domainEntityService;
    private final Logger logger = LoggerFactory.getLogger(EntityController.class);

    @GetMapping("/all")
    public ResponseEntity<List<DomainEntity>> get() {
        logger.info("Fetching all rows");
        return ResponseEntity.ok(domainEntityService.getStuff());
    }

    @GetMapping("/check")
    public ResponseEntity<String> check(){
        logger.info("Api healthcheck");
        return ResponseEntity.ok("ok");
    }

    @PostMapping("/new")
    public ResponseEntity addEntity(@RequestBody DomainEntity domainEntity){
        domainEntityService.addEntity(domainEntity);
        return ResponseEntity.ok("done");
    }
}
