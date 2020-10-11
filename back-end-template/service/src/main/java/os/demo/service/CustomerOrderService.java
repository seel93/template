package os.demo.service;


import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import os.demo.dao.CustomerOrderRepository;
import os.demo.domain.CustomerOrder;

@Service
@AllArgsConstructor
public class CustomerOrderService {
    private final CustomerOrderRepository customerOrderRepository;


    public Long createCustomerOrder(CustomerOrder customerOrder) {
        //CustomerOrder customerOrder1 = new CustomerOrder(
        //        customerOrder.getAddressMovingTo(),
        //        customerOrder.getAddressMovingFrom(),
        //        customerOrder.getCompletionDate(),
        //        customerOrder.getComment()
        //);
        return customerOrderRepository.save(customerOrder).getId();
    }


}
