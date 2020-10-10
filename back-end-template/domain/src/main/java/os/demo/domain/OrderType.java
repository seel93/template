package os.demo.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.Value;
import org.springframework.data.annotation.Id;

@Getter
@Setter
public class OrderType {
    @Id
    Long id;
    String label;
    String description;
}
