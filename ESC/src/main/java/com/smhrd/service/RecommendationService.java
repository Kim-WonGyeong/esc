package com.smhrd.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.smhrd.entity.Cosmetic;
import com.smhrd.entity.Recommendation;
import com.smhrd.entity.Result;
import com.smhrd.repository.RecommendationRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class RecommendationService {
	
	private final RecommendationRepository recommendationRepository;

	// 추천 제품 목록 저장 : save()
	public Recommendation saveRcm(Recommendation recommendation) {
		Recommendation rcm = this.recommendationRepository.save(recommendation);
		return rcm;
	}
	
	// Result로 추천 목록 전체조회
	public List<Cosmetic> getRcms(Result result){
		Long RSeq = result.getRSeq();
		List<Recommendation> rcmList = this.recommendationRepository.findAllByRSeq(RSeq);
		List<Cosmetic> rcmCsmtList = new ArrayList<Cosmetic>();

		for(Recommendation rcm : rcmList) {
			rcmCsmtList.add(rcm.getCsmt());
		}
		
		return rcmCsmtList;
	}
	
}
