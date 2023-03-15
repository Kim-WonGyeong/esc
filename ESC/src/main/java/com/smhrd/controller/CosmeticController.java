package com.smhrd.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.smhrd.entity.Cosmetic;
import com.smhrd.entity.Ingredient;
import com.smhrd.service.CosmeticService;

import lombok.RequiredArgsConstructor;

@RequestMapping("/cosmetic")
@RequiredArgsConstructor // ingredientRepository 속성을 포함하는 생성자 생성(final 속성의 생성자 자동 생성)
@Controller
public class CosmeticController {
	
	// 스프링의 의존성 주입(Dependency Injection) 방식 3가지
	// 1. @Autowired 속성 - 속성에 해당 annotation 적용하여 객체 주입
	// 2. 생성자 - 생성자를 작성하여 객체 주입(권장하는 방식✨)
	// 3. Setter - Setter method를 작성하여 객체 주입(method에 @Autowired annotation 적용 필요)
	// private final IngredientRepository ingredientRepository;
	
	// private final IngredientService ingredientService;
	
	// @GetMapping("/list") // 수정해서 추천화장품 리스트 출력되게 만들기!
	// public String list(Model model) {
	// Model 객체는 따로 생성할 필요없이 컨트롤러 method의 매개변수로 지정하면
	// SpringBoot가 자동으로 Model 객체를 생성한다.
	//	List<Ingredient> ingredientList = this.ingredientService.getIngList();
	//	model.addAttribute("ingredientList", ingredientList);
	//	return "ingredient_list";
	//}
	
	private final CosmeticService cosmeticService;
	
	// 제품 상세보기 기능
	@GetMapping("/detail/{csmtNo}")
	public String csmtDetail(Model model, @PathVariable("csmtNo") String csmtNo) {
		// Ingredient 객체를 template에 전달
		// Ingredient ingredient = this.ingredientService.getIngredient(ingSeq);
		// model.addAttribute("ingredient", ingredient);
		
		Cosmetic csmt = this.cosmeticService.getCosmetic(csmtNo);
		List<Ingredient> ingList = this.cosmeticService.getCosIngList(csmt);
		model.addAttribute("ingList", ingList);
		return "cosmetic_detail";
	}
	
	// 제품 1:1 비교 기능
	@GetMapping("/comparison")
	public String csmtComparison(Model model,
			@RequestParam("csmt1") Cosmetic csmt1,
			@RequestParam("csmt2") Cosmetic csmt2
			) {
		List<Ingredient> csmt1IngList = this.cosmeticService.getCosIngList(csmt1);
		List<Ingredient> csmt2IngList = this.cosmeticService.getCosIngList(csmt2);
		model.addAttribute("csmt1", csmt1);
		model.addAttribute("csmt2", csmt2);
		model.addAttribute("csmt1IngList", csmt1IngList);
		model.addAttribute("csmt2IngList", csmt2IngList);
		return "cmpTestHS";
	}

}