package os.demo.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import os.demo.dao.OrderAddressRepository;
import os.demo.domain.OrderAddress;

import java.util.List;

@Service
@AllArgsConstructor
public class OrderAddressService {
    private final OrderAddressRepository orderAddressRepository;

    public List<OrderAddress> getAll() {
        return orderAddressRepository.findAll();
    }

    public Long createOrderAddress(OrderAddress orderAddress) {
        return orderAddressRepository.save(orderAddress).getId();
    }

    public Long updateAddress(Long id, OrderAddress orderAddress) {
        return orderAddressRepository.findById(id).map(
                updatedAddress -> {
                    updatedAddress.updateOrderAddress(orderAddress);
                    return orderAddressRepository.save(updatedAddress).getId();
                }).orElseThrow(IllegalArgumentException::new);
    }

    public void deleteOrderAddress(Long id){
        orderAddressRepository.deleteById(id);
    }

}
