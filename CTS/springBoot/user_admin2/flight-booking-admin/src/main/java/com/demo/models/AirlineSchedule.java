package com.demo.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class AirlineSchedule {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String airlinename;
	private String airlinenumber;
	private String fromplace;
	private String toplace;
	private String departuretime;
	private int seats;
	private double price;

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getAirlinename() {
		return airlinename;
	}

	public void setAirlinename(String airlinename) {
		this.airlinename = airlinename;
	}

	public String getAirlinenumber() {
		return airlinenumber;
	}

	public void setAirlinenumber(String airlinenumber) {
		this.airlinenumber = airlinenumber;
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

	public String getDeparturetime() {
		return departuretime;
	}

	public void setDeparturetime(String departuretime) {
		this.departuretime = departuretime;
	}

	public int getSeats() {
		return seats;
	}

	public void setSeats(int seats) {
		this.seats = seats;
	}

	@Override
	public String toString() {
		return "AirlineSchedule [id=" + id + ", airlinename=" + airlinename + ", airlinenumber=" + airlinenumber
				+ ", fromplace=" + fromplace + ", toplace=" + toplace + ", departuretime=" + departuretime + ", seats="
				+ seats + ", price=" + price + "]";
	}

	public AirlineSchedule(int id, String airlinename, String airlinenumber, String fromplace, String toplace,
			String departuretime, int seats, double price) {
		super();
		this.id = id;
		this.airlinename = airlinename;
		this.airlinenumber = airlinenumber;
		this.fromplace = fromplace;
		this.toplace = toplace;
		this.departuretime = departuretime;
		this.seats = seats;
		this.price = price;
	}

	public AirlineSchedule() {
		super();
		// TODO Auto-generated constructor stub
	}

}
