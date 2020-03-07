package os.demo.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import os.demo.dao.InitRepository;
import os.demo.domain.DomainEntity;
import com.google.common.collect.ImmutableList;

import java.util.List;

@Service
@AllArgsConstructor
public class DomainEntityService {

    private final InitRepository initRepository;

    public List<DomainEntity> getStuff() {
        return ImmutableList.copyOf(initRepository.findAll());
    }
}
