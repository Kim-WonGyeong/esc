package com.smhrd.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name="reviews")
@NoArgsConstructor // 기본생성자
@AllArgsConstructor // 전체생성자
@Data // Getter, Setter
public class Review {
	@Id // Primary key
	@Column(name="csmt_no")
	private String csmtNo;
	@Column(name="dry_cnt")
	private Long dryCnt;
	@Column(name="oily_cnt")
	private Long oilyCnt;
	@Column(name="comb_cnt")
	private Long combCnt;
	@Column(name="sens_cnt")
	private Long sensCnt;
	@Column(name="dry_pos_cnt")
	private Long dryPosCnt;
	@Column(name="oily_pos_cnt")
	private Long oilyPosCnt;
	@Column(name="comb_pos_cnt")
	private Long combPosCnt;
	@Column(name="sens_pos_cnt")
	private Long sensPosCnt;
	
	@OneToOne(optional=false)
	@JoinColumn(name = "csmt_no")
	private Cosmetic csmt;
	
}
