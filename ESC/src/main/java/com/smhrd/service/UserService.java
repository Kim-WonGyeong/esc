package com.smhrd.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import com.smhrd.entity.User;
import com.smhrd.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class UserService {
	
	@Autowired
	private static UserRepository repository;
	
	public static User loginService(String UserId, String UserPw) {
		
		User user = repository.findByUserIdAndUserPw(UserId, UserPw);
		return user;
	}

}
