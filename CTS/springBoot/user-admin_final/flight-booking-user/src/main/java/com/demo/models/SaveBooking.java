package com.demo.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class SaveBooking {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private String mobile;
	private String email;
	private String password;

	private String trip;
	private String fromplace;
	private String toplace;
	private String onworddate;
	private String returndate;
	private int persons;
	private int total;

	private int airlineid;
	private double discount;

	private String status;

	public SaveBooking() {
		super();
		// TODO Auto-generated constructor stub
	}

	public SaveBooking(int id, String name, String mobile, String email, String password, String trip, String fromplace,
			String toplace, String onworddate, String returndate, int persons, int total, int airlineid,
			double discount, String status) {
		super();
		this.id = id;
		this.name = name;
		this.mobile = mobile;
		this.email = email;
		this.password = password;
		this.trip = trip;
		this.fromplace = fromplace;
		this.toplace = toplace;
		this.onworddate = onworddate;
		this.returndate = returndate;
		this.persons = persons;
		this.total = total;
		this.airlineid = airlineid;
		this.discount = discount;
		this.status = status;
	}

	@Override
	public String toString() {
		return "SaveBooking [id=" + id + ", name=" + name + ", mobile=" + mobile + ", email=" + email + ", password="
				+ password + ", trip=" + trip + ", fromplace=" + fromplace + ", toplace=" + toplace + ", onworddate="
				+ onworddate + ", returndate=" + returndate + ", persons=" + persons + ", total=" + total
				+ ", airlineid=" + airlineid + ", discount=" + discount + ", status=" + status + "]";
	}

	public double getDiscount() {
		return discount;
	}

	public void setDiscount(double discount) {
		this.discount = discount;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getEmail() {
		return email;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getTrip() {
		return trip;
	}

	public void setTrip(String trip) {
		this.trip = trip;
	}

	public String getFromplace() {
		return fromplace;
	}

	public void setFromplace(String fromplace) {
		this.fromplace = fromplace;
	}

	public String getToplace() {
		return toplace;
	}

	public void setToplace(String toplace) {
		this.toplace = toplace;
	}

	public String getOnworddate() {
		return onworddate;
	}

	public void setOnworddate(String onworddate) {
		this.onworddate = onworddate;
	}

	public String getReturndate() {
		return returndate;
	}

	public void setReturndate(String returndate) {
		this.returndate = returndate;
	}

	public int getPersons() {
		return persons;
	}

	public void setPersons(int persons) {
		this.persons = persons;
	}

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	public int getAirlineid() {
		return airlineid;
	}

	public void setAirlineid(int airlineid) {
		this.airlineid = airlineid;
	}

}
