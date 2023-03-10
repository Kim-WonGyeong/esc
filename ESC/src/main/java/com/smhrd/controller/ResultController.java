package com.smhrd.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.smhrd.entity.Result;
import com.smhrd.entity.User;
import com.smhrd.service.ResultService;

import lombok.RequiredArgsConstructor;

@RequestMapping("/result")
@RequiredArgsConstructor
@Controller
public class ResultController {
	
	private final ResultService resultService;
	private final HttpSession httpSession;
	
	@GetMapping("/save")
	public String rsSave(Model model,
			@RequestParam("roily") Long roily, 
			@RequestParam("rresistant") Long rresistant,
			@RequestParam("rnonPigment") Long rnonPigment,
			@RequestParam("rtight") Long rtight){
			// r_date, r_seq 는 자동시퀀스
		
		User user = (User) httpSession.getAttribute("user");
		System.out.println(user.getUserNick());
		
		// ORNT
		String OD = "D";
		String RS = "R";
		String NP = "N";
		String TW = "T";
		
		if(roily >= 8) {
			OD = "O";
		}
		
		if(rresistant >= 8) {
			RS = "S";
		}
		
		if (rnonPigment >= 8) {
			NP = "P";
		}
		
		if (rtight >= 8) {
			TW = "W";
		}
		
		// 피부타입 결정
		String ORNT = OD + RS + NP + TW;
		String rskin = ORNT;
		
		// 저장할 Result 객체
		Result rs = new Result();
		rs.setUser(user);
		rs.setRskin(rskin);
		rs.setRoily(roily);
		rs.setRresistant(rresistant);
		rs.setRnonPigment(rnonPigment);
		rs.setRtight(rtight);
		
		// DB에 문진결과 저장
		Result result = this.resultService.rsSave(rs);
		model.addAttribute(result);
		return "resultHS";
	}

}
