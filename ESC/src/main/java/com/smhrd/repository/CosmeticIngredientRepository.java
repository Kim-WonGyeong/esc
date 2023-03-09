package com.smhrd.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smhrd.entity.Cosmetic;
import com.smhrd.entity.CosmeticIngredient;
import com.smhrd.entity.CosmeticIngredientID;

@Repository
public interface CosmeticIngredientRepository extends JpaRepository<CosmeticIngredient, CosmeticIngredientID>{

	List<CosmeticIngredient> findAllByCsmt(Cosmetic csmt);
	// MyBatis 처럼 method 위에 annotation 으로 sql문 지정하는 방식
	// @Query("select * from Users")
	// public List<Users> testQuery();
}
