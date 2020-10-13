package os.demo.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import os.demo.dao.CustomerRepository;
import os.demo.domain.Customer;

import java.util.List;

@Service
@AllArgsConstructor
public class CustomerService {

    private final CustomerRepository customerRepository;

    public List<Customer> fetchAllCustomers (){
        return customerRepository.findAll();
    }

    public Long createCustomer(Customer customer){
        return customerRepository.save(customer).getId();
    }

    public Long updateCustomer(Customer customer){
        return customerRepository.findById(customer.getId()).map(
                updatedCustomer -> {
                        updatedCustomer.update(customer);
                        return customerRepository.save(updatedCustomer).getId();
                }).orElseThrow(IllegalArgumentException::new);
    }

    public void deleteCustomer(Long customerId){
        customerRepository.deleteById(customerId);
    }
}
