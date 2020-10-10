package os.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import os.demo.domain.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
