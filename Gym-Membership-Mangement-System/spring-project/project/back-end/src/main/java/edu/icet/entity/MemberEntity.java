package edu.icet.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "member")
public class MemberEntity {

    @Id
    private Integer phoneNumber;
    private String name;
    private String age;
    private String address;
    private String gender;
    private boolean isExist;
}
