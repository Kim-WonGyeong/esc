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
	
}
