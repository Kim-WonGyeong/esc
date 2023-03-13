package com.smhrd.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.smhrd.entity.User;

@Controller
public class MainController {
	
//	@ResponseBody : URL 요청의 응답으로 문자열 리턴
	
	@GetMapping("/main")
	public String main() {
		return "main";
	}
	
	@GetMapping("/")
	public String root() {
		
		// Spring Boot는 기본 설정이 html
		// prefix = templates/
		// suffix = .html
		return "redirect:/main"; // templates/main.html
	}
	
	@GetMapping("/login")
	public String login() { 
		return "login";
	}
	
	@GetMapping("/join")
	public String join(Model model) {
		User user = new User();
		model.addAttribute("user", user);
		return "join";
	}
}
