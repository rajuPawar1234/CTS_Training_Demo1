package com.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class FlightBookingAdminApplication {

	public static void main(String[] args) {
		SpringApplication.run(FlightBookingAdminApplication.class, args);
	}

}
