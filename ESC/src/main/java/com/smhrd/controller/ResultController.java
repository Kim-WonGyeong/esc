package com.smhrd.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.smhrd.entity.Result;
import com.smhrd.entity.User;
import com.smhrd.service.ResultService;
import com.smhrd.service.UserService;

import lombok.RequiredArgsConstructor;

@RequestMapping("/result")
@RequiredArgsConstructor
@Controller
public class ResultController {
	
	private final ResultService resultService;
	private final UserService userService;
	
	@GetMapping("/save/{id}")
	public String rsSave(Model model, 
			@PathVariable("id") String id,
			@PathVariable("rOily") Long rOily, 
			@PathVariable("rResistant") Long rResistant,
			@PathVariable("rNonPigment") Long rNonPigment,
			@PathVariable("rTight") Long rTight){
			// r_date, r_seq 는 자동시퀀스
		
		// id로 User 객체 찾기
		User user = this.userService.findUserService(id);
		
		// ORNT
		String OD = "D";
		String RS = "R";
		String NP = "N";
		String TW = "T";
		
		if(rOily >= 8) {
			OD = "O";
		}
		
		if(rResistant >= 8) {
			RS = "S";
		}
		
		if (rNonPigment >= 8) {
			NP = "P";
		}
		
		if (rTight >= 8) {
			TW = "W";
		}
		
		// 피부타입 결정
		String ORNT = OD + RS + NP + TW;
		String rSkin = ORNT;
		
		// 저장할 Result 객체
		Result rs = new Result();
		rs.setUser(user);
		rs.setRskin(rSkin);
		rs.setRoily(rOily);
		rs.setRresistant(rResistant);
		rs.setRnonPigment(rNonPigment);
		rs.setRtight(rTight);
		
		// DB에 문진결과 저장
		Result result = this.resultService.rsSave(rs);
		model.addAttribute(result);
		return "result";
	}

}
