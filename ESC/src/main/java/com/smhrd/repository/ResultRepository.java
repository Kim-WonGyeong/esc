package com.smhrd.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smhrd.entity.Result;
import com.smhrd.entity.User;

@Repository
public interface ResultRepository extends JpaRepository<Result, Long>{
	
	public Result findByRseq(Long rseq);
	public List<Result> findAllByUser(User user);
	public List<Result> findAllByUserOrderByRseq(User user);
}
