package com.smhrd.entity;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor // 기본생성자
@AllArgsConstructor // 전체생성자
@Data // Getter, Setter
public class RecommendationID implements Serializable{
	
	private static final long serialVersionUID = 1L;
	private Cosmetic csmt;
	private Result rs;

}
