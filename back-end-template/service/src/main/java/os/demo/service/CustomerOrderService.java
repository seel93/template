package os.demo.service;


import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import os.demo.dao.CustomerOrderRepository;
    import os.demo.domain.CustomerOrder;
import java.util.List;

@Service
@AllArgsConstructor
public class CustomerOrderService {
    private final CustomerOrderRepository customerOrderRepository;

    public List<CustomerOrder> getAllOrders(){
        return customerOrderRepository.findAll();
    }

    public Long createCustomerOrder(CustomerOrder customerOrder) {
        return customerOrderRepository.save(customerOrder).getId();
    }

    public Long updateCustomerOrder(CustomerOrder customerOrder){
        return customerOrderRepository.findById(customerOrder.getId()).map(
                updatedCustomerOrder -> {
                    updatedCustomerOrder.update(customerOrder);
                    return customerOrderRepository.save(updatedCustomerOrder).getId();
        }).orElseThrow(IllegalArgumentException::new);
    }

    public void deleteOrder(Long id){
        customerOrderRepository.deleteById(id);
    }

}
