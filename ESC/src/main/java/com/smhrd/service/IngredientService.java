package com.smhrd.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.smhrd.entity.Ingredient;
import com.smhrd.esc.DataNotFoundException;
import com.smhrd.repository.IngredientRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class IngredientService {
	
	private final IngredientRepository ingredientRepository;
	
	public List<Ingredient> getIngList(){
		return this.ingredientRepository.findAll();
	}
	
	public Ingredient getIngredient(Long ingSeq) {
		Optional<Ingredient> ingredient = this.ingredientRepository.findById(ingSeq);
		if(ingredient.isPresent()) {
			return ingredient.get();
		}else {
			throw new DataNotFoundException("ingredient not found");
		}
	}

}
