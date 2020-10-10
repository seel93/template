package os.demo.service;


import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import os.demo.dao.OrderTypeRepository;
import os.demo.domain.OrderType;

import java.util.List;

@Service
@AllArgsConstructor
public class MetaService {
    private final OrderTypeRepository orderTypeRepository;

    public List<OrderType> fetchOrderTypes(){
        return orderTypeRepository.findAll();
    }
}
