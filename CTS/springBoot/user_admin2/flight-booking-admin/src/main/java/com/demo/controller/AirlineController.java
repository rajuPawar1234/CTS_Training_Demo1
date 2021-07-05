package com.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.models.Airlines;
import com.demo.repository.AirlineRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AirlineController {

	@Autowired
	AirlineRepository airlineRepository;
	
	@PostMapping("airline")
	public Airlines saveAirline(@RequestBody Airlines airline) {
		return airlineRepository.save(airline);
	}
	
	@GetMapping("airline")
	public List<Airlines> getAllAirlines(){
		return airlineRepository.findAll();
	}
	
	@GetMapping("airline/{airlineid}")
	public Optional<Airlines> getAirlines(@PathVariable("airlineid") int airlineid){
		return airlineRepository.findById(airlineid);
	}
	
	@DeleteMapping("airline/{airlineid}")
	public void deleteAirline(@PathVariable("airlineid") int airlineid) {
		airlineRepository.deleteById(airlineid);
	}
	
}
