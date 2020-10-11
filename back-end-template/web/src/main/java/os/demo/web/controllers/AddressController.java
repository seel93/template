package os.demo.web.controllers;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import os.demo.domain.OrderAddress;
import os.demo.service.AddressService;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/address")
public class AddressController {

    private final AddressService addressService;

    @PostMapping("/new")
    public ResponseEntity<Long> createAddress(@RequestBody OrderAddress orderAddress){
        return ResponseEntity.ok(addressService.addAddress(orderAddress));

    }

    @GetMapping("/all")
    public ResponseEntity<List<OrderAddress>> getAll(){
        return ResponseEntity.ok(addressService.getAll());
    }
}
