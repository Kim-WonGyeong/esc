package com.smhrd.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name="cmps")
@NoArgsConstructor // 기본생성자
@AllArgsConstructor // 전체생성자
@Data // Getter, Setter
public class Comparison {
	
	@Id
	@Column(name="cmp_seq")
	private Long cmpSeq;
	
	@ManyToOne(optional=false)
	@JoinColumn(name="user_id")
	private User user;
	
	@ManyToOne(optional=false)
	@JoinColumn(name="csmt_src")
	private Cosmetic csmtSrc;
	
	@ManyToOne(optional=false)
	@JoinColumn(name="csmt_cmp")
	private Cosmetic csmtCmp;
	
	@Column(name="cmp_date")
	private LocalDateTime cmpDate;
	
}
