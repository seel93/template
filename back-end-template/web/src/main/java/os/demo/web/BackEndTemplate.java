package os.demo.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = {"os.demo"})
@EntityScan(basePackages = {"os.demo"})
@ComponentScan(basePackages = {"os.demo"})
public class BackEndTemplate {
    public static void main(String[] args) {
        SpringApplication.run(BackEndTemplate.class, args);
    }
}
