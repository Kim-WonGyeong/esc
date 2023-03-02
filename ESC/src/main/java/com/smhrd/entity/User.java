package com.smhrd.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name="users")
@NoArgsConstructor // 기본생성자
@AllArgsConstructor // 전체생성자
@Data // Getter, Setter
public class User {
	
	@Id // Primary key
	@Column(name="user_id")
	private String userId;
	@Column(name="user_pw")
	private String userPw;
	@Column(name="user_gender")
	private String userGender;
	@Column(name="user_nick")
	private String userNick;
	
}