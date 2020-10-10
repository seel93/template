package os.demo.domain;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;

@Getter
@Setter
@Entity
public class CustomerOrder {
    @Id
    Long id;
    int customerId;
    int addressMovingTo;
    int addressMovingFrom;
    LocalDate completionDate;
    String comment;
}
