package com.smhrd.service;

import org.springframework.stereotype.Service;

import com.smhrd.entity.User;
import com.smhrd.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class UserService {
	
	private final UserRepository repository;
	
	public User loginService(String userId, String userPw) {
		
		User userinfo = repository.findByUserIdAndUserPw(userId, userPw);
		return userinfo;
	}
	
	public void joinService(User user) {
		repository.save(user);
	}

}


