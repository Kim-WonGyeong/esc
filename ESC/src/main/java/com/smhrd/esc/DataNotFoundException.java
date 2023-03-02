package com.smhrd.esc;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "entity not found")
public class DataNotFoundException extends RuntimeException{
	// DataNotFoundException이 발생하면 @ResponseStatus annotation에 의해 404오류 발생
	private static final long serialVersionUID = 1L;
	public DataNotFoundException(String message) {
		super(message);
	}

}
