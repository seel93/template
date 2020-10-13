package os.demo.domain;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@Setter
@Entity
public class OrderAddress {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    Long id;
    String street;
    String zip;
    String city;

    public void updateOrderAddress(OrderAddress orderAddress){
        this.setStreet(orderAddress.getStreet());
        this.setZip(orderAddress.getZip());
        this.setCity(orderAddress.getCity());
    }
}
