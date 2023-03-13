package com.smhrd.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smhrd.entity.Recommendation;
import com.smhrd.entity.RecommendationID;

@Repository
public interface RecommendationRepository extends JpaRepository<Recommendation, RecommendationID>{
	
	public List<Recommendation> findAllByRSeq(Long RSeq);
}
