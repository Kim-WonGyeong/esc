package com.smhrd.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name="rcms")
@NoArgsConstructor // 기본생성자
@AllArgsConstructor // 전체생성자
@Data // Getter, Setter
@IdClass(RecommendationID.class)
public class Recommendation implements Serializable{
	private static final long serialVersionUID = 1L;

	@Id @ManyToOne(optional=false)
	@JoinColumn(name="csmt_no")
	private Cosmetic csmt;
	
	@Id @ManyToOne(optional=false)
	@JoinColumn(name="r_seq")
	private Result rs;
}
