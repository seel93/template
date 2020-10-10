package os.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import os.demo.domain.OrderType;

@Repository
public interface OrderTypeRepository extends JpaRepository<OrderType, Long> {
}
