package com.smhrd.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smhrd.entity.Recommendation;
import com.smhrd.entity.RecommendationID;
import com.smhrd.entity.Result;

@Repository
public interface RecommendationRepository extends JpaRepository<Recommendation, RecommendationID>{
	
	List<Recommendation> findAllByRs(Result rs);
}
