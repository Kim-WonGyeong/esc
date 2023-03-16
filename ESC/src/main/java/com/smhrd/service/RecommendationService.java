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

	// type 정보를 보내면 --> 추천할 제품 list 불러오기 
	public List<Cosmetic> getCosmeticList(String type) {
		// type에서 민감-저항, 지성-건성만 뽑기 (앞의 2글자)
		System.out.println("사용자 피부타입 확인 : " + type);
		type = type.substring(0, 2);

		// 1. CSMT_TYPE 6개 CSMT_NO list 가져오기
		List<Cosmetic> allinone = cosmeticRepository.findAllByCsmtType("allinone");
		List<Cosmetic> toner = cosmeticRepository.findAllByCsmtType("toner");
		List<Cosmetic> lotion = cosmeticRepository.findAllByCsmtType("lotion");
		List<Cosmetic> cream = cosmeticRepository.findAllByCsmtType("cream");
		List<Cosmetic> mist = cosmeticRepository.findAllByCsmtType("mist");
		List<Cosmetic> essence = cosmeticRepository.findAllByCsmtType("essnece");
		
		System.out.println("1번 완료");

		// 2. Reviews에서 CSMT_NO, type 정보로 CSMT 정보 가져오기

		List<Review> allinoneNo = new ArrayList<>();
		List<Review> tonerNo = new ArrayList<>();
		List<Review> lotionNo = new ArrayList<>();
		List<Review> creamNo = new ArrayList<>();
		List<Review> mistNo = new ArrayList<>();
		List<Review> essenceNo = new ArrayList<>();

		switch (type) {
		case "OR": // 지성
			allinoneNo = reviewRepository.findAllinoneOily(allinone).subList(0, 5);
			tonerNo = reviewRepository.findTonerOily(toner).subList(0, 5);
			lotionNo = reviewRepository.findLotionOily(lotion).subList(0, 5);
			creamNo = reviewRepository.findCreamOily(cream).subList(0, 5);
			mistNo = reviewRepository.findMistOily(mist).subList(0, 5);
			essenceNo = reviewRepository.findEssenceOily(essence).subList(0, 5);
			break;
		case "OS": // 지성, 민감성
			// 민감성 2개
			allinoneNo = reviewRepository.findAllinoneSens(allinone).subList(0, 2);
			tonerNo = reviewRepository.findTonerSens(toner).subList(0, 2);
			lotionNo = reviewRepository.findLotionSens(lotion).subList(0, 2);
			creamNo = reviewRepository.findCreamSens(cream).subList(0, 2);
			mistNo = reviewRepository.findMistSens(mist).subList(0, 2);
			essenceNo = reviewRepository.findEssenceSens(essence).subList(0, 2);
			// 지성 2개
			allinoneNo = reviewRepository.findAllinoneOily(allinone).subList(0, 2);
			tonerNo = reviewRepository.findTonerOily(toner).subList(0, 2);
			lotionNo = reviewRepository.findLotionOily(lotion).subList(0, 2);
			creamNo = reviewRepository.findCreamOily(cream).subList(0, 2);
			mistNo = reviewRepository.findMistOily(mist).subList(0, 2);
			essenceNo = reviewRepository.findEssenceOily(essence).subList(0, 2);
			break;
		case "DR": // 건성
			allinoneNo = reviewRepository.findAllinoneDry(allinone);
			tonerNo = reviewRepository.findTonerDry(toner);
			lotionNo = reviewRepository.findLotionDry(lotion);
			creamNo = reviewRepository.findCreamDry(cream);
			mistNo = reviewRepository.findMistDry(mist);
			essenceNo = reviewRepository.findEssenceDry(essence);
			break;
		case "DS": // 건성, 민감성
			allinoneNo = reviewRepository.findAllinoneComb(allinone).subList(0, 2);
			tonerNo = reviewRepository.findTonerComb(toner).subList(0, 2);
			lotionNo = reviewRepository.findLotionComb(lotion).subList(0, 2);
			creamNo = reviewRepository.findCreamComb(cream).subList(0, 2);
			mistNo = reviewRepository.findMistComb(mist).subList(0, 2);
			essenceNo = reviewRepository.findEssenceComb(essence).subList(0, 2);
			break;
		}
		System.out.println("2번 완료");
		
		// 3. Cosmetics에서 CSMT_NO으로 정보 가져오기 > 화면으로 출력
		List<Cosmetic> cosmeticList = new ArrayList<>();

			for (int i = 0; i < 4; i++) {
				cosmeticList.add(allinoneNo.get(i).getCsmt());
			}
			for (int i = 0; i < 4; i++) {
				cosmeticList.add(tonerNo.get(i).getCsmt());
			}
			for (int i = 0; i < 4; i++) {
				cosmeticList.add(lotionNo.get(i).getCsmt());
			}
			for (int i = 0; i < 4; i++) {
				cosmeticList.add(creamNo.get(i).getCsmt());
			}
			for (int i = 0; i < 4; i++) {
				cosmeticList.add(mistNo.get(i).getCsmt());
			}
			for (int i = 0; i < 4; i++) {
				cosmeticList.add(essenceNo.get(i).getCsmt());
			}

			for(int i = 0; i < 4; i++) {
				System.out.println(cosmeticList.get(i).getCsmtName()); 
			}
			
		return cosmeticList;
	}

}
