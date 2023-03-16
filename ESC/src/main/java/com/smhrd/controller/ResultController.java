package com.smhrd.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	
	@GetMapping("/detail/{rseq}")
	public String rsDetail(Model model, @PathVariable("rseq") Long rseq) {
		Result result = this.resultService.getResult(rseq);
		model.addAttribute("result", result);
		System.out.println(result.getUser().getUserId());
		return "resultHS";
	}
	
	@GetMapping("/history")
	public String rsHistory(Model model) {
		User user = (User) httpSession.getAttribute("user");
		System.out.println(user.getUserNick());
		List<Result> rsList = this.resultService.getResultList(user);
		model.addAttribute("rsList", rsList);
		return "historyHS";
	}
	
	@GetMapping("/save")
	public String rsSave(Model model,
			@RequestParam("roily1") Long roily1, 
			@RequestParam("rresistant1") Long rresistant1,
			@RequestParam("rnonPigment1") Long rnonPigment1,
			@RequestParam("rtight1") Long rtight1,
			@RequestParam("roily2") Long roily2, 
			@RequestParam("rresistant2") Long rresistant2,
			@RequestParam("rnonPigment2") Long rnonPigment2,
			@RequestParam("rtight2") Long rtight2,
			@RequestParam("roily3") Long roily3, 
			@RequestParam("rresistant3") Long rresistant3,
			@RequestParam("rnonPigment3") Long rnonPigment3,
			@RequestParam("rtight3") Long rtight3){
			// r_date, r_seq 는 자동시퀀스
		
		User user = (User) httpSession.getAttribute("user");
		System.out.println(user.getUserNick());
		
		Long roily = roily1 + roily2 + roily3;
		Long rresistant = rresistant1 + rresistant2 + rresistant3;
		Long rnonPigment = rnonPigment1 + rnonPigment2 + rnonPigment3;
		Long rtight = rtight1 + rtight2 + rtight3;
		
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
		model.addAttribute("result", result);
		return "resultHS";
	}
	
}
