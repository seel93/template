import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.testcontainers.containers.MySQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;


import os.demo.dao.CustomerRepository;
import os.demo.domain.Customer;

@EnableJpaRepositories(basePackages = {"os.demo"})
@Testcontainers
@SpringBootTest
public class CustomerRepositoryIntegrationTest {

    @Container
    public static MySQLContainer mySQLContainer = new MySQLContainer("mysql:latest")
            .withUsername("root")
            .withPassword("root")
            .withDatabaseName("demodb");

    private CustomerRepository customerRepository;

    @DynamicPropertySource
    static void properties(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", mySQLContainer::getJdbcUrl);
        registry.add("spring.datasource.password", mySQLContainer::getPassword);
        registry.add("spring.datasource.username", mySQLContainer::getUsername);
    }

    @Test
    public void contextLoads() {
        Customer customer = new Customer();
        customerRepository.save(customer);
        System.out.println("work");
    }

}
