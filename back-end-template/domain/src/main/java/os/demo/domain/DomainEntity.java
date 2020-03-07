package os.demo.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "domainEntity")
@Getter
@Setter
public class DomainEntity {
    @Id
    private long id;
    @Column
    private String name;
}
