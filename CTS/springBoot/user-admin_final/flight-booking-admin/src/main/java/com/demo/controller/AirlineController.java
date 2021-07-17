package com.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.exception.CustomException;
import com.demo.models.Airlines;
import com.demo.repository.AirlineRepository;
import com.demo.service.AirlineService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AirlineController {

	@Autowired
	AirlineRepository airlineRepository;
	
	@Autowired
	AirlineService airlineService;

	@PostMapping("airline")
	public Airlines saveAirline(@RequestBody Airlines airline) throws CustomException{
		return airlineService.saveAirline(airline);
	}

	@GetMapping("airline")
	public List<Airlines> getAllAirlines() {
		return airlineRepository.findAll();
	}

	@GetMapping("airline/{airlineid}")
	@Cacheable(key = "#airlineid", value = "airlines")
	public Optional<Airlines> getAirlines(@PathVariable("airlineid") int airlineid) {
		System.out.println("Getting Airline by Id");
		return airlineRepository.findById(airlineid);  
	}

	@DeleteMapping("airline/{airlineid}")
	@CacheEvict(key = "#airlineid", value = "airlines")
	public void deleteAirline(@PathVariable("airlineid") int airlineid) {
		airlineRepository.deleteById(airlineid);
	}

	
	@PutMapping("airline/{airlineid}")
	@CachePut(key = "#airlineid", value = "airlines")
	public Airlines updateAirline(@PathVariable String airlineid, @RequestBody Airlines airline) {
		
		return airlineRepository.save(airline);
	}
	
	
}
