package com.demo.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Discount {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String discountName;
	private String discountCode;
	private double discountPercentage;
	private int discountAmount;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDiscountName() {
		return discountName;
	}

	public void setDiscountName(String discountName) {
		this.discountName = discountName;
	}

	public String getDiscountCode() {
		return discountCode;
	}

	public void setDiscountCode(String discountCode) {
		this.discountCode = discountCode;
	}

	public double getDiscountPercentage() {
		return discountPercentage;
	}

	public void setDiscountPercentage(double discountPercentage) {
		this.discountPercentage = discountPercentage;
	}

	public int getDiscountAmount() {
		return discountAmount;
	}

	public void setDiscountAmount(int discountAmount) {
		this.discountAmount = discountAmount;
	}

	@Override
	public String toString() {
		return "Discount [id=" + id + ", discountName=" + discountName + ", discountCode=" + discountCode
				+ ", discountPercentage=" + discountPercentage + ", discountAmount=" + discountAmount + "]";
	}

	public Discount(int id, String discountName, String discountCode, double discountPercentage, int discountAmount) {
		super();
		this.id = id;
		this.discountName = discountName;
		this.discountCode = discountCode;
		this.discountPercentage = discountPercentage;
		this.discountAmount = discountAmount;
	}

	public Discount() {
		super();
		// TODO Auto-generated constructor stub
	}

}
