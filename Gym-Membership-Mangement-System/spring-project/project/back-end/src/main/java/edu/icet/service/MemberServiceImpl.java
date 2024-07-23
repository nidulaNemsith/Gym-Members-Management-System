package edu.icet.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import edu.icet.entity.MemberEntity;
import edu.icet.model.Member;
import edu.icet.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MemberServiceImpl implements MemberService{

    @Autowired
    MemberRepository repository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public Member persist(Member member) {

        MemberEntity savedMember = repository.save(
                mapper.convertValue(
                        member, MemberEntity.class));

         return mapper.convertValue(savedMember,Member.class);
    }

    @Override
    public List<Member> retrive() {
        Iterable<MemberEntity> memberList = repository.findAll();
        List<Member> memberModels=new ArrayList<>();

        memberList.forEach(memberEntity -> {
            memberModels.add(
                mapper.convertValue(memberEntity,Member.class));
        });
        return memberModels;

    }

    public Member remove(Integer phoneNumber){
        Optional<MemberEntity> byId = repository.findById(phoneNumber);
        repository.delete(byId.get());
        return null;
    }

    @Override
    public Member update(Integer phoneNumber, Member updatedMember) {
            MemberEntity memberEntity=repository.findById(phoneNumber).get();
            memberEntity.setName(updatedMember.getName());
            memberEntity.setAge(updatedMember.getAge());
            memberEntity.setAddress(updatedMember.getAddress());
            memberEntity.setGender(updatedMember.getGender());
            MemberEntity save = repository.save(memberEntity);
            return mapper.convertValue(save,Member.class);


    }
}
