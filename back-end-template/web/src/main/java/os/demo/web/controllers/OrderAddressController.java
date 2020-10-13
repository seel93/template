package os.demo.web.controllers;

import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import os.demo.domain.OrderAddress;
import os.demo.service.OrderAddressService;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/address")
public class OrderAddressController {

    private final OrderAddressService orderAddressService;
    private final Logger logger = LoggerFactory.getLogger(OrderAddressController.class);

    @GetMapping("/all")
    public ResponseEntity<List<OrderAddress>> getAll(){
        logger.info("Fetching all addresses");
        return ResponseEntity.ok(orderAddressService.getAll());
    }

    @PostMapping("/new")
    public ResponseEntity<Long> createAddress(@RequestBody OrderAddress orderAddress){
        logger.info("Creating address: {}", orderAddress);
        return ResponseEntity.ok(orderAddressService.createOrderAddress(orderAddress));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Long> updateOrderAddress(@PathVariable Long id, @RequestBody OrderAddress orderAddress){
        logger.info("Updating address with id: {}", id);
        return ResponseEntity.ok(orderAddressService.updateAddress(id, orderAddress));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrderAddress(@PathVariable Long id){
        logger.info("Deleting address with id: {}", id);
        orderAddressService.deleteOrderAddress(id);
        return ResponseEntity.noContent().build();
    }
}
