package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.models.AirlineSchedule;
import com.demo.repository.AirlineSheduleRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AirlineScheduleController {

	@Autowired
	AirlineSheduleRepository airlineSheduleRepository; 
	
	@PostMapping("airlineshedule")
	public AirlineSchedule saveAirlineSchedule(@RequestBody AirlineSchedule airlineSchedule) {
		return airlineSheduleRepository.save(airlineSchedule);
	}
	
	@GetMapping("airlineshedule")
	public List<AirlineSchedule> getAllAirlineSchedule(){
		return airlineSheduleRepository.findAll();
	}
	
	@DeleteMapping("airlineshedule/{id}")
	public void deleteAirlineSchedule(@PathVariable("id") int id) {
		airlineSheduleRepository.deleteById(id);
	}
}
