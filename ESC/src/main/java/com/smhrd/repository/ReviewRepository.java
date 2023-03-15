package com.smhrd.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;

import com.smhrd.entity.Cosmetic;
import com.smhrd.entity.Review;

@org.springframework.stereotype.Repository
public interface ReviewRepository extends Repository<Review, String> {

	public List<Review> findByCsmtNo(String csmtNo);
	
	public List<String> findCsmtNoByCsmtNoInOrderByCombPosCntDesc(List<String> list); // 복합성
	
	//......................................모르겟음
	@Query(value = "SELECT CSMT_NO FROM REVIEWS WHERE CSMT_NO IN (:list) ORDER BY COMB_POS_CNT DESC", nativeQuery = true)
	public List<String> findCombReview(@Param("list") List<String> list);
	
	public List<String> findCsmtNoByCsmtNoInOrderByDryPosCntDesc(List<String> list); // 건성
	public List<String> findCsmtNoByCsmtNoInOrderByOilyPosCntDesc(List<String> list); // 지성
	public List<String> findCsmtNoByCsmtNoInOrderBySensPosCntDesc(List<String> list); // 민감성
}
