package com.smhrd.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {
	
//	@ResponseBody : URL 요청의 응답으로 문자열 리턴
	
	@RequestMapping("/goMain")
	public String goMain() {
		
		// Spring Boot는 기본 설정이 html
		// prefix = templates/
		// suffix = .html
		return "main"; // templates/main.html
	}
}
