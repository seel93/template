package os.demo.domain;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDate;

@Getter
@Setter
@Entity
public class CustomerOrder {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    Long id;
    int customerId;
    int orderTypeId;
    int addressMovingTo;
    int addressMovingFrom;
    LocalDate completionDate;
    String comment;

    public CustomerOrder(int addressMovingTo, int addressMovingFrom, LocalDate completionDate, String comment) {
        this.addressMovingTo = addressMovingTo;
        this.addressMovingFrom = addressMovingFrom;
        this.completionDate = completionDate;
        this.comment = comment;
    }

    public CustomerOrder() {

    }
}
