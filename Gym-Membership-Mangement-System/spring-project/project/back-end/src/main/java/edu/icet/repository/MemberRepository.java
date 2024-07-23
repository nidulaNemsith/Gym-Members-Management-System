package edu.icet.repository;

import edu.icet.entity.MemberEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface MemberRepository extends CrudRepository<MemberEntity,Integer> {

}
