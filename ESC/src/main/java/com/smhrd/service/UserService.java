package com.smhrd.service;

import org.springframework.stereotype.Service;

import com.smhrd.entity.User;
import com.smhrd.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class UserService {
	
	private final UserRepository repository;
	
	public User loginService(String UserId, String UserPw) {
		
		User user = this.repository.findByUserIdAndUserPw(UserId, UserPw);
		return user;
	}

}
