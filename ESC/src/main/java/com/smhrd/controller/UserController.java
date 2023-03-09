package com.smhrd.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.smhrd.entity.User;
import com.smhrd.service.UserService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Controller
@RequestMapping("/user/*")
public class UserController {
	
	@Autowired
	private UserService service; // Dependency Injection 맞나...

	@PostMapping("/login")
	public String login(Model model, User user) {
		
		String UserId = user.getUserId();
		String UserPw = user.getUserPw();
		
		user = service.loginService(UserId, UserPw);
		model.addAttribute("user", user);
		return "main";
	}
	
}
