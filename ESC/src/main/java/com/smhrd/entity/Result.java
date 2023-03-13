package com.smhrd.entity;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name="results")
@NoArgsConstructor // 기본생성자
@AllArgsConstructor // 전체생성자
@Data
public class Result {
	
	@Id @Column(name="r_seq")
	private Long rseq;
	
	@ManyToOne(optional=false)
	@JoinColumn(name="user_id")
	private User user;
	
	@Column(name="r_date")
	private LocalDateTime rdate;
	
	@Column(name="r_skin")
	private String rskin;
	
	@Column(name="r_oily")
	private Long roily;
	
	@Column(name="r_resistant")
	private Long rresistant;
	
	@Column(name="r_non_pigment")
	private Long rnonPigment;
	
	@Column(name="r_tight")
	private Long rtight;

	@OneToMany(cascade = CascadeType.REMOVE, mappedBy = "rs")
	private List<Recommendation> rcms;
	
}
