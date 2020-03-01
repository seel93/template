package service;

import domain.DomainEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import repository.TestRepository;

@RequiredArgsConstructor
@Service
public class NewService {
    private final TestRepository repository;
    public DomainEntity find(){
        return repository.findById(1L).orElse(null);
    }
}
