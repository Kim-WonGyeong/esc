package com.smhrd.controller;

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
@RequestMapping("/user")
public class UserController {
	
	private final UserService service;
	
	@GetMapping("/main")
	public String main(Model model) {
		return "main";
	}

	@PostMapping("/login")
	public String login(Model model, @RequestParam("UserId") String UserId, @RequestParam("UserPw") String UserPw) {
		
		User user = service.loginService(UserId, UserPw);
		model.addAttribute("user", user);
		return "main";
	}
	
	@PostMapping("/join")
	public String join(User user) {
		service.joinService(user);
		return "main";
	}
	
	@GetMapping("/mypage")
	public String gomypage(Model model) {
		return "mypage";
	}
	
}
