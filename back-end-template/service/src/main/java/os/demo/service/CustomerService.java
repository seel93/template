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

    public Long updateCustomer(Long id, Customer customer){
        return customerRepository.findById(id).map(
                updatedCustomer -> {
                        updatedCustomer.setFirstName(customer.getFirstName());
                        updatedCustomer.setLastName(customer.getLastName());
                        updatedCustomer.setEmail(customer.getEmail());
                        updatedCustomer.setPhoneNumber(customer.getPhoneNumber());
                        return customerRepository.save(updatedCustomer).getId();
                }).orElseGet(() -> {
                    customer.setId(id);
                    return customerRepository.save(customer).getId();
        });
    }

    public void deleteCustomer(Long customerId){
        customerRepository.deleteById(customerId);
    }
}
