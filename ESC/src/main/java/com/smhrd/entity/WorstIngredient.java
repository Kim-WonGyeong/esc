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

@Entity(name="worst_ing")
@NoArgsConstructor // 기본생성자
@AllArgsConstructor // 전체생성자
@Data // Getter, Setter
@IdClass(WorstIngredient.class)
public class WorstIngredient implements Serializable{
	
	private static final long serialVersionUID = 1L;

	@Id @ManyToOne(optional=false)
	@JoinColumn(name="ing_seq")
	private Ingredient ing;
	
	@Id
	@JoinColumn(name="skin_type")
	private String skinType;

}
