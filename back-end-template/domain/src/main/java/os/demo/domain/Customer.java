package os.demo.domain;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

@Getter
@Setter
public class Customer {
    @Id
    Long id;
    String name;
    String email;
}
