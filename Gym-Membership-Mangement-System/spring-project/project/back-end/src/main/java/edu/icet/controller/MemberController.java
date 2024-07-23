package edu.icet.controller;

import edu.icet.model.Member;
import edu.icet.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class MemberController {

    @Autowired
    MemberService memberService;


    @PostMapping("/member")
    Member persist(@RequestBody Member member){
         return memberService.persist(member);
    }

    @GetMapping("/member")
    List<Member> retrive(){
        return memberService.retrive();
    }

    @DeleteMapping("/product")
    Member remove(@RequestParam(name ="phoneNumber") Integer phoneNumber){
        return memberService.remove(phoneNumber);
    }

    @PutMapping("/member/{phoneNumber}")
    Member update(@PathVariable("phoneNumber") Integer phoneNumber, @RequestBody Member updatedMember){
        return memberService.update(phoneNumber,updatedMember);
    }






}
