package repository;

import domain.DomainEntity;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

@Repository
public interface TestRepository extends CrudRepository<DomainEntity, Long> {
}
