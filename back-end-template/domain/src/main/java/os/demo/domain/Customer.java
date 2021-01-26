package os.demo.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Customer {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    Long id;
    String firstName;
    String lastName;
    String email;
    String phoneNumber;

    public void update(Customer customer) {
        this.setFirstName(customer.getFirstName());
        this.setLastName(customer.getLastName());
        this.setEmail(customer.getEmail());
        this.setPhoneNumber(customer.getPhoneNumber());
    }
}
