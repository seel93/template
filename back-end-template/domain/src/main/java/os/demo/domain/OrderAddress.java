package os.demo.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;

@Getter
@Setter
@Entity
public class OrderAddress {
    @Id
    Long id;
    String street;
    String zip;
    String city;
}
