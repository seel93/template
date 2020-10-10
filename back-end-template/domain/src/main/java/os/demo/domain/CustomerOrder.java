package os.demo.domain;


import lombok.Getter;
import lombok.Setter;
import lombok.Value;
import org.springframework.data.annotation.Id;
import java.time.LocalDate;

@Getter
@Setter
public class CustomerOrder {
    @Id
    Long id;
    int customerId;
    int addressMovingTo;
    int getAddressMovingFrom;
    LocalDate completionDate;
    String comment;
}
