package service;

import lombok.NoArgsConstructor;
import repository.TestRepository;

@NoArgsConstructor
public class Service {
    private TestRepository testRepository;

    public void stuff(){
        System.out.println(testRepository.findAll());
    }
}
