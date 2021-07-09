package com.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;

import com.demo.models.Airlines;

@ControllerAdvice
public class AdminAdviceController {

	public ResponseEntity<ErrorResponse> handleCustomException(CustomException e){
		ErrorResponse error = new ErrorResponse();
		error.setStatus(500);
		error.setErrorMsg("Something Error Here ");
		error.setException("any Exception here ");
		
		return ResponseEntity.status(HttpStatus.OK).body(error);
		
	}
}
