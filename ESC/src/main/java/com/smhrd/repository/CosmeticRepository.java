package com.smhrd.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smhrd.entity.Cosmetic;

@Repository
public interface CosmeticRepository extends JpaRepository<Cosmetic, String>{
	// MyBatis 처럼 method 위에 annotation 으로 sql문 지정하는 방식
	// @Query("select * from Users")
	// public List<Users> testQuery();
	
	public List<Cosmetic> findAllByCsmtType(String csmtType);
}
