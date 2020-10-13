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

    public void update(CustomerOrder customerOrder){
        this.setCustomerId(customerOrder.getCustomerId());
        this.setOrderTypeId(customerOrder.getOrderTypeId());
        this.setAddressMovingTo(customerOrder.getAddressMovingTo());
        this.setAddressMovingFrom(customerOrder.getAddressMovingFrom());
        this.setCompletionDate(customerOrder.getCompletionDate());
        this.setComment(customerOrder.getComment());
    }
}
