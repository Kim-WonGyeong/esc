package com.smhrd.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name="ingredientss")
@NoArgsConstructor // 기본생성자
@AllArgsConstructor // 전체생성자
@Data // Getter, Setter
public class Ingredient {
	
	@Id // Primary key
	@Column(name="ing_seq", length=18)
	private Long ingSeq;
	@Column(name="ing_name")
	private String ingName;
	@Column(name="ing_name_eng")
	private String ingNameEng;
	@Column(name="ing_fcn")
	private String ingFcn;
	@Column(name="ing_ewg")
	private String ingEwg;
	@Column(name="ing_ewg_lev")
	private String ingEwgLev;

	@OneToMany(cascade = CascadeType.REMOVE, mappedBy="ing")
	private List<CosmeticIngredient> ingCos;
	
}
