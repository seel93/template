package os.demo.domain;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.Entity;
import javax.persistence.Id;

@Getter
@Setter
@Entity
public class OrderType {
    @Id
    Long id;
    String label;
    String description;
}
