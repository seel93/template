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

    public Integer createCustomer(Customer customer){
        Customer customer1 = new Customer(customer.getFirstName(), customer.getLastName(), customer.getEmail(), customer.getPhoneNumber());
        customerRepository.save(customer1);
        return 1;
    }

    public void deleteCustomer(Long customerId){
        customerRepository.deleteById(customerId);
    }
}
