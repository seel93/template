package os.demo.web.controllers;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import os.demo.domain.OrderType;
import os.demo.service.MetaService;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/meta")
public class MetaController {


    private final MetaService metaService;

    @GetMapping("/order")
    public ResponseEntity<List<OrderType>> fetchAllOrderTypes(){
        return ResponseEntity.ok(metaService.fetchOrderTypes());
    }
}
