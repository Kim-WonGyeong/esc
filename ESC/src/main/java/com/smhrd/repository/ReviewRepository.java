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
	
	// Comb
	@Query(value="select c.csmt_no from reviews r, (select csmt_no from cosmetics where csmt_type='allinone') c where r.csmt_no = c.csmt_no and rownum <= 4 order by r.comb_pos_cnt desc",
			nativeQuery = true)
	public List<Review> findAllinoneComb(@Param("list")List<Cosmetic> list);
	@Query(value="select c.csmt_no from reviews r, (select csmt_no from cosmetics where csmt_type='toner') c where r.csmt_no = c.csmt_no and rownum <= 4 order by r.comb_pos_cnt desc",
			nativeQuery = true)
	public List<Review> findTonerComb(@Param("list")List<Cosmetic> list);
	@Query(value="select c.csmt_no from reviews r, (select csmt_no from cosmetics where csmt_type='lotion') c where r.csmt_no = c.csmt_no and rownum <= 4 order by r.comb_pos_cnt desc",
			nativeQuery = true)
	public List<Review> findLotionComb(@Param("list")List<Cosmetic> list);
	@Query(value="select c.csmt_no from reviews r, (select csmt_no from cosmetics where csmt_type='cream') c where r.csmt_no = c.csmt_no and rownum <= 4 order by r.comb_pos_cnt desc",
			nativeQuery = true)
	public List<Review> findCreamComb(@Param("list")List<Cosmetic> list);
	@Query(value="select c.csmt_no from reviews r, (select csmt_no from cosmetics where csmt_type='mist') c where r.csmt_no = c.csmt_no and rownum <= 4 order by r.comb_pos_cnt desc",
			nativeQuery = true)
	public List<Review> findMistComb(@Param("list")List<Cosmetic> list);
	@Query(value="select c.csmt_no from reviews r, (select csmt_no from cosmetics where csmt_type='essence') c where r.csmt_no = c.csmt_no and rownum <= 4 order by r.comb_pos_cnt desc",
			nativeQuery = true)
	public List<Review> findEssenceComb(@Param("list")List<Cosmetic> list);
	
	
	// Dry
	@Query(value="select c.csmt_no from reviews r, (select csmt_no from cosmetics where csmt_type='allinone') c where r.csmt_no = c.csmt_no and rownum <= 4 order by r.dry_pos_cnt desc",
			nativeQuery = true)
	public List<Review> findAllinoneDry(@Param("list")List<Cosmetic> list);
	@Query(value="select c.csmt_no from reviews r, (select csmt_no from cosmetics where csmt_type='toner') c where r.csmt_no = c.csmt_no and rownum <= 4 order by r.dry_pos_cnt desc",
			nativeQuery = true)
	public List<Review> findTonerDry(@Param("list")List<Cosmetic> list);
	@Query(value="select c.csmt_no from reviews r, (select csmt_no from cosmetics where csmt_type='lotion') c where r.csmt_no = c.csmt_no and rownum <= 4 order by r.dry_pos_cnt desc",
			nativeQuery = true)
	public List<Review> findLotionDry(@Param("list")List<Cosmetic> list);
	@Query(value="select c.csmt_no from reviews r, (select csmt_no from cosmetics where csmt_type='cream') c where r.csmt_no = c.csmt_no and rownum <= 4 order by r.dry_pos_cnt desc",
			nativeQuery = true)
	public List<Review> findCreamDry(@Param("list")List<Cosmetic> list);
	@Query(value="select c.csmt_no from reviews r, (select csmt_no from cosmetics where csmt_type='mist') c where r.csmt_no = c.csmt_no and rownum <= 4 order by r.dry_pos_cnt desc",
			nativeQuery = true)
	public List<Review> findMistDry(@Param("list")List<Cosmetic> list);
	@Query(value="select c.csmt_no from reviews r, (select csmt_no from cosmetics where csmt_type='essence') c where r.csmt_no = c.csmt_no and rownum <= 4 order by r.dry_pos_cnt desc",
			nativeQuery = true)
	public List<Review> findEssenceDry(@Param("list")List<Cosmetic> list);
	
	
	// Oily
	@Query(value="select c.csmt_no from reviews r, (select csmt_no from cosmetics where csmt_type='allinone') c where r.csmt_no = c.csmt_no and rownum <= 4 order by r.oily_pos_cnt desc",
			nativeQuery = true)
	public List<Review> findAllinoneOily(@Param("list")List<Cosmetic> list);
	@Query(value="select c.csmt_no from reviews r, (select csmt_no from cosmetics where csmt_type='toner') c where r.csmt_no = c.csmt_no and rownum <= 4 order by r.oily_pos_cnt desc",
			nativeQuery = true)
	public List<Review> findTonerOily(@Param("list")List<Cosmetic> list);
	@Query(value="select c.csmt_no from reviews r, (select csmt_no from cosmetics where csmt_type='lotion') c where r.csmt_no = c.csmt_no and rownum <= 4 order by r.oily_pos_cnt desc",
			nativeQuery = true)
	public List<Review> findLotionOily(@Param("list")List<Cosmetic> list);
	@Query(value="select c.csmt_no from reviews r, (select csmt_no from cosmetics where csmt_type='cream') c where r.csmt_no = c.csmt_no and rownum <= 4 order by r.oily_pos_cnt desc",
			nativeQuery = true)
	public List<Review> findCreamOily(@Param("list")List<Cosmetic> list);
	@Query(value="select c.csmt_no from reviews r, (select csmt_no from cosmetics where csmt_type='mist') c where r.csmt_no = c.csmt_no and rownum <= 4 order by r.oily_pos_cnt desc",
			nativeQuery = true)
	public List<Review> findMistOily(@Param("list")List<Cosmetic> list);
	@Query(value="select c.csmt_no from reviews r, (select csmt_no from cosmetics where csmt_type='essence') c where r.csmt_no = c.csmt_no and rownum <= 4 order by r.oily_pos_cnt desc",
			nativeQuery = true)
	public List<Review> findEssenceOily(@Param("list")List<Cosmetic> list);
	
	
	// Sens
	@Query(value="select c.csmt_no from reviews r, (select csmt_no from cosmetics where csmt_type='allinone') c where r.csmt_no = c.csmt_no and rownum <= 4 order by r.sens_pos_cnt desc",
			nativeQuery = true)
	public List<Review> findAllinoneSens(@Param("list")List<Cosmetic> list);
	@Query(value="select c.csmt_no from reviews r, (select csmt_no from cosmetics where csmt_type='toner') c where r.csmt_no = c.csmt_no and rownum <= 4 order by r.sens_pos_cnt desc",
			nativeQuery = true)
	public List<Review> findTonerSens(@Param("list")List<Cosmetic> list);
	@Query(value="select c.csmt_no from reviews r, (select csmt_no from cosmetics where csmt_type='lotion') c where r.csmt_no = c.csmt_no and rownum <= 4 order by r.sens_pos_cnt desc",
			nativeQuery = true)
	public List<Review> findLotionSens(@Param("list")List<Cosmetic> list);
	@Query(value="select c.csmt_no from reviews r, (select csmt_no from cosmetics where csmt_type='cream') c where r.csmt_no = c.csmt_no and rownum <= 4 order by r.sens_pos_cnt desc",
			nativeQuery = true)
	public List<Review> findCreamSens(@Param("list")List<Cosmetic> list);
	@Query(value="select c.csmt_no from reviews r, (select csmt_no from cosmetics where csmt_type='mist') c where r.csmt_no = c.csmt_no and rownum <= 4 order by r.sens_pos_cnt desc",
			nativeQuery = true)
	public List<Review> findMistSens(@Param("list")List<Cosmetic> list);
	@Query(value="select c.csmt_no from reviews r, (select csmt_no from cosmetics where csmt_type='essence') c where r.csmt_no = c.csmt_no and rownum <= 4 order by r.sens_pos_cnt desc",
			nativeQuery = true)
	public List<Review> findEssenceSens(@Param("list")List<Cosmetic> list);
	
	
	
}
