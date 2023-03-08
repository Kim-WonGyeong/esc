package com.smhrd.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name="cosmetics")
@NoArgsConstructor // 기본생성자
@AllArgsConstructor // 전체생성자
@Data // Getter, Setter
public class Cosmetic {

	@Id @Column(name="csmt_no")
	private String csmtNo;
	@Column(name="csmt_type")
	private String csmtType;
	@Column(name="csmt_brand")
	private String csmtBrand;
	@Column(name="csmt_name")
	private String csmtName;
	@Column(name="csmt_price")
	private Long csmtPrice;
	@Column(name="csmt_url")
	private String csmtUrl;
	@Column(name="csmt_img")
	private String csmtImg;
	
	@OneToOne(cascade = CascadeType.REMOVE, mappedBy = "csmt")
	private Review review;
	
	@OneToMany(cascade = CascadeType.REMOVE, mappedBy = "csmt")
	private List<CosmeticIngredient> cosIng;
	
	@OneToMany(cascade = CascadeType.REMOVE, mappedBy = "csmt")
	private List<Recommendation> rcms;
	
	@OneToMany(cascade = CascadeType.REMOVE, mappedBy = "csmtSrc")
	private List<Comparison> csmtSrc;
	
	@OneToMany(cascade = CascadeType.REMOVE, mappedBy = "csmtCmp")
	private List<Comparison> csmtCmp;

}
