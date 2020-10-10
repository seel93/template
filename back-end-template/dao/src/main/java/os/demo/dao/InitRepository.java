package os.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import os.demo.domain.DomainEntity;

@Repository
public interface InitRepository extends JpaRepository<DomainEntity, Long> {
}
