package com.smhrd.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {
	@RequestMapping("/goMain")
	public String goMain() {
		
		// Spring Boot는 기본 설정이 html
		// prefix = templates/
		// suffix = .html
		return "main"; // templates/main.html
	}
}
