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
	private double discountPercentage;

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

	public double getDiscountPercentage() {
		return discountPercentage;
	}

	public void setDiscountPercentage(double discountPercentage) {
		this.discountPercentage = discountPercentage;
	}

	public Discount(int id, String discountName, double discountPercentage) {
		super();
		this.id = id;
		this.discountName = discountName;
		this.discountPercentage = discountPercentage;
	}

	public Discount() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Discount [id=" + id + ", discountName=" + discountName + ", discountPercentage=" + discountPercentage
				+ "]";
	}

}
