package os.demo.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.Value;
import org.springframework.data.annotation.Id;

@Getter
@Setter
public class OrderAddress {
    @Id
    Long id;
    String street;
    String zip;
    String city;
}
