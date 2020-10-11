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

    public OrderAddress(String street, String zip, String city) {
        this.street = street;
        this.zip = zip;
        this.city = city;
    }

    public OrderAddress() {

    }
}
