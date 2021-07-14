package com.demo.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Airlines {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int airlineid;
	private String airlinename;
	private String airlinecontact;
	private String airlineaddress;

	public int getAirlineid() {
		return airlineid;
	}

	public void setAirlineid(int airlineid) {
		this.airlineid = airlineid;
	}

	public String getAirlinename() {
		return airlinename;
	}

	public void setAirlinename(String airlinename) {
		this.airlinename = airlinename;
	}

	public String getAirlinecontact() {
		return airlinecontact;
	}

	public void setAirlinecontact(String airlinecontact) {
		this.airlinecontact = airlinecontact;
	}

	public String getAirlineaddress() {
		return airlineaddress;
	}

	public void setAirlineaddress(String airlineaddress) {
		this.airlineaddress = airlineaddress;
	}

	@Override
	public String toString() {
		return "Airlines [airlineid=" + airlineid + ", airlinename=" + airlinename + ", airlinecontact="
				+ airlinecontact + ", airlineaddress=" + airlineaddress + "]";
	}

	public Airlines( String airlinename, String airlinecontact, String airlineaddress) {
		super();
//		this.airlineid = airlineid;
		this.airlinename = airlinename;
		this.airlinecontact = airlinecontact;
		this.airlineaddress = airlineaddress;
	}

	public Airlines() {
		super();
		// TODO Auto-generated constructor stub
	}

}
