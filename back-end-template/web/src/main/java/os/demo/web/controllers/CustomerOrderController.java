package os.demo.web.controllers;


import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import os.demo.domain.CustomerOrder;
import os.demo.service.CustomerOrderService;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/customer/order")
public class CustomerOrderController {

    private final CustomerOrderService customerOrderService;
    private final Logger logger = LoggerFactory.getLogger(CustomerOrderController.class);

    @GetMapping("/all")
    public ResponseEntity<List<CustomerOrder>> getAll(){
        logger.info("Fetching all orders");
        return ResponseEntity.ok(customerOrderService.getAllOrders());
    }

    @PostMapping("/new")
    public ResponseEntity<Long> createOrder(@RequestBody CustomerOrder customerOrder){
        logger.info("Creating order: {}", customerOrder);
        return ResponseEntity.ok(customerOrderService.createCustomerOrder(customerOrder));
    }

    @PutMapping()
    public ResponseEntity<Long> updateCustomerOrder(@RequestBody CustomerOrder customerOrder){
        logger.info("updated order with id: {}", customerOrder.getId());
        return ResponseEntity.ok(customerOrderService.updateCustomerOrder(customerOrder));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrder(@PathVariable Long id){
        customerOrderService.deleteOrder(id);
        logger.info("deleted order with id: {}", id);
        return ResponseEntity.noContent().build();
    }

}
