package com.demo.exception;

public class ErrorResponse {

	private int status;
	private String errorMsg;
	private String exception;

	@Override
	public String toString() {
		return "ErrorResponse [status=" + status + ", errorMsg=" + errorMsg + ", exception=" + exception + "]";
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getErrorMsg() {
		return errorMsg;
	}

	public void setErrorMsg(String errorMsg) {
		this.errorMsg = errorMsg;
	}

	public String getException() {
		return exception;
	}

	public void setException(String exception) {
		this.exception = exception;
	}

}
