package com.smhrd.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.smhrd.entity.Cosmetic;
import com.smhrd.entity.Recommendation;
import com.smhrd.entity.Result;
import com.smhrd.service.CosmeticService;
import com.smhrd.service.RecommendationService;
import com.smhrd.service.ResultService;

import lombok.RequiredArgsConstructor;

@RequestMapping("/recommendation")
@RequiredArgsConstructor
@Controller
public class RecommendationController {

	private final RecommendationService recommendationService;
	private final ResultService resultService;
	private final CosmeticService cosmeticService;
	
	// 문진번호로 추천 목록 저장하기
	@GetMapping("/save/{rSeq}")
	public String rsSave(Model model, 
			@PathVariable("rSeq") Long rSeq,
			@PathVariable("csmtNo") String csmtNo){
		
		Recommendation rcm = new Recommendation();
		Result rs = this.resultService.getResult(rSeq);
		Cosmetic csmt = this.cosmeticService.getCosmetic(csmtNo);
		
		rcm.setRs(rs);
		rcm.setCsmt(csmt);
		
		// DB에 추천목록 1개 저장
		recommendationService.saveRcm(rcm);
		return "result";
	}
	
	// 문진번호로 추천 제품 목록 조회하기
	@GetMapping("/detail/{rSeq}")
	public String getRcms(Model model, @PathVariable("rSeq") Long rSeq) {
		Result rs = this.resultService.getResult(rSeq);
		List<Cosmetic> rcmCsmtList = this.recommendationService.getRcms(rs);
		model.addAttribute(rcmCsmtList);
		return "result";
	}
	
	// 문진 후 결과페이지에 추천제품 출력 -- 0314 김원경
	public String getCosmeticList(Model model) { // 문진 후 타입을 변수로 받아오기
		// 점수를 날려서... 결과 가져오기 with 해성 4시부터~~
		String type = (String) model.getAttribute("type"); // 모델 객체 이름 수정 필요
		List<Cosmetic> cosmeticList = recommendationService.getCosmeticList(type);
		model.addAttribute(cosmeticList);
		return "cosmetic_list"; // 결과페이지 리턴
	}
}
