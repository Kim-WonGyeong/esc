package com.smhrd.service;

import java.util.List;

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
	
	private final UserRepository repository;
	
	public User loginService(String userId, String userPw) {
		
		User userinfo = repository.findByUserIdAndUserPw(userId, userPw);
		return userinfo;
	}

}
