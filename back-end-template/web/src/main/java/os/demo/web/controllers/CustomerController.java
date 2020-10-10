package os.demo.web.controllers;

import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import os.demo.service.CustomerService;

@RestController
@AllArgsConstructor
public class CustomerController {

//    private final CustomerService customerService;
//    private final Logger logger = LoggerFactory.getLogger(CustomerController.class);
//
//    @PostMapping("/new")
//    public ResponseEntity<Integer> newCustomer() {
//        logger.info("Creating new customer");
//        return ResponseEntity.ok(customerService.createCustomer());
//    }
}
