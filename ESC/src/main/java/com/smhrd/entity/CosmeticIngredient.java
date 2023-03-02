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

@Entity(name="cmst_ing")
@NoArgsConstructor // 기본생성자
@AllArgsConstructor // 전체생성자
@Data // Getter, Setter
@IdClass(CosmeticIngredient.class)
public class CosmeticIngredient implements Serializable{
	
	@Id // Primary key
//	@Column(name="csmt_seq")
	@ManyToOne(optional=false)
	@JoinColumn(name="csmt_seq")
	private Cosmetic csmt;
	@Id // Primary key
//	@Column(name="ing_seq", length=18)
	@ManyToOne(optional=false)
	@JoinColumn(name="ing_seq")
	private Ingredient ing;
	
//	@ManyToOne ex)answer.getQuestion().getSubject()
//	private Question question;
//		>> 반대로 Question entity 에서는
//		>> @OneToMany(mappedBy = "question", cascade = CascadeType.REMOVE)
//		>> private List<Answer> answerList;
//		>> mappedBy 는 참조 Entity 의 속성명

}
