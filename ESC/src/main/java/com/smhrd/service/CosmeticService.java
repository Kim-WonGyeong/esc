package com.smhrd.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.smhrd.entity.Cosmetic;
import com.smhrd.entity.CosmeticIngredient;
import com.smhrd.entity.Ingredient;
import com.smhrd.esc.DataNotFoundException;
import com.smhrd.repository.CosmeticIngredientRepository;
import com.smhrd.repository.CosmeticRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class CosmeticService {
	
	private final CosmeticRepository csmtRepository;
	private final CosmeticIngredientRepository csmtIngRepository; 
	
	
	// 특정 제품의 전성분 조회
	//public List<Ingredient> getIngList(){
	//	return this.ingredientRepository.findByCsmtNo();
	//}
	public List<Ingredient> getCosIngList(Cosmetic csmt){
		List<CosmeticIngredient> csmtIngList = this.csmtIngRepository.findAllByCsmt(csmt);
		List<Ingredient> ingList = new ArrayList<Ingredient>();
		for(CosmeticIngredient csmtIng : csmtIngList) {
			ingList.add(csmtIng.getIng());
		}
		return ingList;
	}
	
	
	// 제품번호로 제품 조회
	public Cosmetic getCosmetic(String csmtNo) {
		Optional<Cosmetic> cosmetic = this.csmtRepository.findById(csmtNo);
		if(cosmetic.isPresent()) {
			return cosmetic.get();
		}else {
			throw new DataNotFoundException("ingredient not found");
		}
	}

}
