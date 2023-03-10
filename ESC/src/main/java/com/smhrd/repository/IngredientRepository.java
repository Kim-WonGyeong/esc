package com.smhrd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smhrd.entity.Ingredient;

@Repository
public interface IngredientRepository extends JpaRepository<Ingredient, Long>{

	public Ingredient findByIngSeq(Long ingSeq);
	// MyBatis 처럼 method 위에 annotation 으로 sql문 지정하는 방식
	// @Query("select * from Users")
	// public List<Users> testQuery();
}
