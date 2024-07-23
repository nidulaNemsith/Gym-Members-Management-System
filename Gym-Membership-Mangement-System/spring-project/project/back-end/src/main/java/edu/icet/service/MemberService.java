package edu.icet.service;

import edu.icet.model.Member;

import java.util.List;

public interface MemberService {
    Member persist(Member member);
    List<Member> retrive();
    public Member remove(Integer phoneNumber);
    public Member update(Integer phoneNumber, Member updatedMember);
}
