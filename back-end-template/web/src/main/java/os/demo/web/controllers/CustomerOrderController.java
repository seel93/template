package os.demo.web.controllers;


import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import os.demo.domain.CustomerOrder;
import os.demo.service.CustomerOrderService;

@RestController
@AllArgsConstructor
@RequestMapping("/api/customer/order")
public class CustomerOrderController {

    private final CustomerOrderService customerOrderService;

    @PostMapping("/new")
    public ResponseEntity<Long> createOrder(@RequestBody CustomerOrder customerOrder){
        return ResponseEntity.ok(customerOrderService.createCustomerOrder(customerOrder));
    }
}
