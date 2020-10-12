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


    public Long createCustomerOrder(CustomerOrder customerOrder) {
        return customerOrderRepository.save(customerOrder).getId();
    }

    public List<CustomerOrder> getAllOrders(){
        return customerOrderRepository.findAll();
    }

    public void deleteOrder(Long id){
        customerOrderRepository.deleteById(id);
    }

}
