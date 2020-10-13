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
        logger.info("Fetching all customers");
        return ResponseEntity.ok(customerService.fetchAllCustomers());
    }

    @PostMapping("/new")
    public ResponseEntity<Long> newCustomer(@RequestBody Customer customer) {
        logger.info("Creating new customer: {}", customer);
        return ResponseEntity.ok(customerService.createCustomer(customer));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Long> updateCustomer(@RequestBody Customer customer){
        logger.info("Updating customer with id: {}", customer.getId());
        return ResponseEntity.ok(customerService.updateCustomer(customer));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCustomer(@PathVariable Long id){
        logger.info("Deleting customer with id {}", id);
        customerService.deleteCustomer(id);
        return ResponseEntity.noContent().build();
    }
}
