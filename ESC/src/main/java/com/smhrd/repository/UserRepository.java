package com.smhrd.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smhrd.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, String>{

	// 회원가입 save();
	
	// 로그인
	public User findByUserIdAndUserPw(String userId, String userPw);
	
	// 탈퇴
	public int deleteUserByUserIdAndUserPw(String userId, String userPw);
	
	// test
	public User findByUserNick(String userNick);
	List<User> findByUserNickLike(String userNick);
	
	// MyBatis 처럼 method 위에 annotation 으로 sql문 지정하는 방식
	// @Query("select * from Users") 
	// public List<Users> testQuery();
	
	public User findByUserId(String userId);
}
