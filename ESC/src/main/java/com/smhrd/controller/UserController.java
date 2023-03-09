package com.smhrd.controller;

import org.apache.ibatis.annotations.Param;
import org.hibernate.annotations.Parameter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.smhrd.entity.User;
import com.smhrd.service.UserService;

import lombok.RequiredArgsConstructor;

@SessionAttributes("user")
@RequiredArgsConstructor
@Controller
@RequestMapping("/user/*")
public class UserController {
	
	private final UserService service;

	@PostMapping("/login")
	public String login(Model model, @RequestParam("UserId") String UserId, @RequestParam("UserPw") String UserPw) {
		
		User user = service.loginService(UserId, UserPw);
		model.addAttribute("user", user);
		return "main";
	}
	
}
