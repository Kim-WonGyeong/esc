package com.smhrd.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.smhrd.entity.User;
import com.smhrd.esc.DataNotFoundException;
import com.smhrd.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class UserService {
	
	private final UserRepository repository;

	// 로그인
	public User loginService(String userId, String userPw) {
		User userinfo = repository.findByUserIdAndUserPw(userId, userPw);
		return userinfo;
	}
	
	public void joinService(User user) {
		repository.save(user);
	}

	// userId로 객체 찾기
	public User findUserService(String userId) {
		Optional<User> user = repository.findById(userId);
		if(user.isPresent()) {
			return user.get();
		}else {
			throw new DataNotFoundException("ingredient not found");
		}
	}
}


