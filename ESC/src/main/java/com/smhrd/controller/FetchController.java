package com.smhrd.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.smhrd.entity.Cosmetic;
import com.smhrd.entity.Ingredient;
import com.smhrd.service.CosmeticService;

import lombok.RequiredArgsConstructor;

@RequestMapping("/fetchtest")
@RequiredArgsConstructor // ingredientRepository 속성을 포함하는 생성자 생성(final 속성의 생성자 자동 생성)
@Controller
public class FetchController {
	
	private final CosmeticService cosmeticService;
	
	@GetMapping("/detail/{csmtNo}")
	public String csmtDetail(Model model, @PathVariable("csmtNo") String csmtNo) {
		
		Cosmetic csmt = this.cosmeticService.getCosmetic(csmtNo);
		List<Ingredient> ingList = this.cosmeticService.getCosIngList(csmt);
		model.addAttribute("ingList", ingList);
		return "cosmetic_detail";
	}

}