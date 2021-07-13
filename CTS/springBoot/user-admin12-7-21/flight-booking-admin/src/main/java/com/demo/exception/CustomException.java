package com.demo.exception;

public class CustomException extends Exception {

	public CustomException() {
	}

	public CustomException(String s) {
		super(s);
	}

	public CustomException(Exception e) {
		super(e);
	}

	public CustomException(String s, Exception e) {
		super(s, e);
	}
}
