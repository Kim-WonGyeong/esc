package com.smhrd.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.smhrd.entity.Cosmetic;
import com.smhrd.entity.Recommendation;
import com.smhrd.entity.Result;
import com.smhrd.entity.Review;
import com.smhrd.repository.CosmeticRepository;
import com.smhrd.repository.RecommendationRepository;
import com.smhrd.repository.ReviewRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class RecommendationService {

	private final RecommendationRepository recommendationRepository;
	private final CosmeticRepository cosmeticRepository;
	private final ReviewRepository reviewRepository;

	// 추천 제품 목록 저장 : save()
	public Recommendation saveRcm(Recommendation recommendation) {
		Recommendation rcm = this.recommendationRepository.save(recommendation);
		return rcm;
	}

	// Result로 추천 목록 전체조회
	public List<Cosmetic> getRcms(Result result) {
		List<Recommendation> rcmList = this.recommendationRepository.findAllByRs(result);
		List<Cosmetic> rcmCsmtList = new ArrayList<Cosmetic>();
		for (Recommendation rcm : rcmList) {
			rcmCsmtList.add(rcm.getCsmt());
		}
		return rcmCsmtList;
	}

	// type 정보를 보내면 --> 추천할 제품 list 불러오기 -- 0314 김원경
	public List<Cosmetic> getCosmeticList(String type) {
		// type에서 민감-저항, 지성-건성만 뽑기 (앞의 2글자)
		System.out.println("사용자 피부타입 확인 : " + type);
		type = type.substring(0, 2);

		List<String> category = new ArrayList<>(Arrays.asList("allinone", "toner", "lotion", "cream", "mist", "essnece"));
		
		// 1. CSMT_TYPE 6개 CSMT_NO list 가져오기
		List<Cosmetic> allinone = cosmeticRepository.findAllByCsmtType("allinone");
		List<Cosmetic> toner = cosmeticRepository.findAllByCsmtType("toner");
		List<Cosmetic> lotion = cosmeticRepository.findAllByCsmtType("lotion");
		List<Cosmetic> cream = cosmeticRepository.findAllByCsmtType("cream");
		List<Cosmetic> mist = cosmeticRepository.findAllByCsmtType("mist");
		List<Cosmetic> essence = cosmeticRepository.findAllByCsmtType("essnece");

		// 2. Reviews에서 CSMT_NO, type 정보로 CSMT 정보 가져오기
		// input -- List<String> CsmtNo를 담은 List로 만들어준다, type
		// Repository에서 CsmtNo만 가져오는 방법도 있음 <-- 일단 기능 구현되면 리팩토링
		List<String> allinoneNo = allinone.stream().map(Cosmetic::getCsmtNo).collect(Collectors.toList());
		List<String> tonerNo = toner.stream().map(Cosmetic::getCsmtNo).collect(Collectors.toList());
		List<String> lotionNo = lotion.stream().map(Cosmetic::getCsmtNo).collect(Collectors.toList());
		List<String> creamNo = cream.stream().map(Cosmetic::getCsmtNo).collect(Collectors.toList());
		List<String> mistNo = mist.stream().map(Cosmetic::getCsmtNo).collect(Collectors.toList());
		List<String> essenceNo = essence.stream().map(Cosmetic::getCsmtNo).collect(Collectors.toList());

		// output -- List<Review> 대충 case로
		switch (type) {
		case "OR" : // 지성
			allinoneNo = reviewRepository.findCsmtNoByCsmtNoInOrderByOilyPosCntDesc(allinoneNo);
			tonerNo = reviewRepository.findCsmtNoByCsmtNoInOrderByOilyPosCntDesc(tonerNo);
			lotionNo = reviewRepository.findCsmtNoByCsmtNoInOrderByOilyPosCntDesc(lotionNo);
			creamNo = reviewRepository.findCsmtNoByCsmtNoInOrderByOilyPosCntDesc(creamNo);
			mistNo = reviewRepository.findCsmtNoByCsmtNoInOrderByOilyPosCntDesc(mistNo);
			essenceNo = reviewRepository.findCsmtNoByCsmtNoInOrderByOilyPosCntDesc(essenceNo);
			break;
		case "OS" : // 지성, 민감성
			break;
		case "DR" : // 건성
			allinoneNo = reviewRepository.findCsmtNoByCsmtNoInOrderByDryPosCntDesc(allinoneNo);
			tonerNo = reviewRepository.findCsmtNoByCsmtNoInOrderByDryPosCntDesc(tonerNo);
			lotionNo = reviewRepository.findCsmtNoByCsmtNoInOrderByDryPosCntDesc(lotionNo);
			creamNo = reviewRepository.findCsmtNoByCsmtNoInOrderByDryPosCntDesc(creamNo);
			mistNo = reviewRepository.findCsmtNoByCsmtNoInOrderByDryPosCntDesc(mistNo);
			essenceNo = reviewRepository.findCsmtNoByCsmtNoInOrderByDryPosCntDesc(essenceNo);
			break;
		case "DS" : // 건성, 민감성
			break;
		}

		// 3. Cosmetics에서 CSMT_NO으로 정보 가져오기, 상위 4개씩

		List<Review> reviewList = reviewRepository.findByCsmtNo(null);
		List<Cosmetic> cosmeticList = cosmeticRepository.findAllByCsmtNoIn(reviewList);
		return cosmeticList;
	}

}
