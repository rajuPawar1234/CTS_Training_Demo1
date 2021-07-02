package com.demo.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import com.demo.models.Airlines;
import com.demo.repository.FlightRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class FlightController {

	@Autowired
	FlightRepository flightRepository;
	
	@GetMapping(value="airline")
	public List<Airlines> getAllAirline() {
		
		System.out.println("Geting Airline Details...");
		
		return flightRepository.findAll();
	}
	
	@PostMapping(value="addnew")
	public void addAirline() {
		
		Airlines airline = new Airlines("Indigo","9876543210","Pune");
		
		flightRepository.save(airline);
	}
	
}
