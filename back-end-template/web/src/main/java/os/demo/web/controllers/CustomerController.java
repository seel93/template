package os.demo.web.controllers;

import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import os.demo.domain.Customer;
import os.demo.service.CustomerService;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/customer")
public class CustomerController {

    private final CustomerService customerService;
    private final Logger logger = LoggerFactory.getLogger(CustomerController.class);

    @GetMapping("/all")
    public ResponseEntity<List<Customer>> fetchAllCustomers() {
        return ResponseEntity.ok(customerService.fetchAllCustomers());
    }

    @PostMapping("/new")
    public ResponseEntity<Integer> newCustomer(@RequestBody Customer customer) {
        logger.info("Creating new customer");
        return ResponseEntity.ok(customerService.createCustomer(customer));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCustomer(@PathVariable Long id){
        logger.info("Deleting customer with id {}", id);
        customerService.deleteCustomer(id);
        return ResponseEntity.noContent().build();
    }
}
