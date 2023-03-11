package com.smhrd.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smhrd.entity.Result;

@Repository
public interface ResultRepository extends JpaRepository<Result, Long>{
	
	public Result findByRSeq(Long rSeq);
	public List<Result> findAllByUserId(String userId);
}
