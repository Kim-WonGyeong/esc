package com.smhrd.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.smhrd.entity.Ingredient;
import com.smhrd.service.IngredientService;

import lombok.RequiredArgsConstructor;

@RequestMapping("/ingredient")
@RequiredArgsConstructor // ingredientRepository 속성을 포함하는 생성자 생성(final 속성의 생성자 자동 생성)
@Controller
public class IngredientController {
	
	// 스프링의 의존성 주입(Dependency Injection) 방식 3가지
	// 1. @Autowired 속성 - 속성에 해당 annotation 적용하여 객체 주입
	// 2. 생성자 - 생성자를 작성하여 객체 주입(권장하는 방식✨)
	// 3. Setter - Setter method를 작성하여 객체 주입(method에 @Autowired annotation 적용 필요)
	// private final IngredientRepository ingredientRepository;
	
	private final IngredientService ingredientService;
	
	@GetMapping("/list")
	public String list(Model model) {
	// Model 객체는 따로 생성할 필요없이 컨트롤러 method의 매개변수로 지정하면
	// SpringBoot가 자동으로 Model 객체를 생성한다.
		List<Ingredient> ingredientList = this.ingredientService.getIngList();
		model.addAttribute("ingredientList", ingredientList);
		return "ingredient_list";
	}
	
	@GetMapping("/detail/{ingSeq}")
	public String ingDetail(Model model, @PathVariable("ingSeq") Long ingSeq) {
		// Ingredient 객체를 template에 전달
		Ingredient ingredient = this.ingredientService.getIngredient(ingSeq);
		model.addAttribute("ingredient", ingredient);
		return "ingredient_detail";
	}

}
