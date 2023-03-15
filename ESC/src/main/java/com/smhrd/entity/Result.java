package com.smhrd.entity;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name="results")
@NoArgsConstructor // 기본생성자
@AllArgsConstructor // 전체생성자
@Data
@SequenceGenerator(
		name = "result_seq_generator",
		sequenceName = "result_seq",
		initialValue = 1,
		allocationSize = 1
)
public class Result {
	
	@Id @Column(name="r_seq")
	@GeneratedValue(
			strategy = GenerationType.SEQUENCE,
			generator = "result_seq_generator"
	)
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
