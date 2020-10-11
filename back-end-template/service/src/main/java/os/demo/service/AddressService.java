package os.demo.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import os.demo.dao.OrderAddressRepository;
import os.demo.domain.OrderAddress;

import java.util.List;

@Service
@AllArgsConstructor
public class AddressService {
    private final OrderAddressRepository orderAddressRepository;

    public Long addAddress(OrderAddress orderAddress){
        OrderAddress orderAddress1 = new OrderAddress(orderAddress.getStreet(), orderAddress.getZip(), orderAddress.getCity());
        return orderAddressRepository.save(orderAddress1).getId();
    }

    public List<OrderAddress> getAll(){
        return orderAddressRepository.findAll();
    }

}
