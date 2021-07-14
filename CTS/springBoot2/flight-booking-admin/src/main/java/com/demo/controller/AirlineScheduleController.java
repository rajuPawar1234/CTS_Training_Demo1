package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.demo.models.AirlineSchedule;
import com.demo.repository.AirlineSheduleRepository;

@RestController
@CrossOrigin
public class AirlineScheduleController {

	@Autowired
	AirlineSheduleRepository airlineSheduleRepository;

	@PostMapping("airlineshedule")
	public AirlineSchedule saveAirlineSchedule(@RequestBody AirlineSchedule airlineSchedule) {
		return airlineSheduleRepository.save(airlineSchedule);
	}

	@GetMapping("airlineshedule")
	public List<AirlineSchedule> getAllAirlineSchedule() {
		return airlineSheduleRepository.findAll();
	}

	@DeleteMapping("airlineshedule/{id}")
	public void deleteAirlineSchedule(@PathVariable("id") int id) {
		airlineSheduleRepository.deleteById(id);
	}

	@PutMapping(value = "airlineshedule/{id}")
	public AirlineSchedule updateAirlineSchedule(@PathVariable("id") int id,
			@RequestBody AirlineSchedule airlineSchedule) {

		return airlineSheduleRepository.save(airlineSchedule);
	}

	@GetMapping(value = "getFlightSchedule")
	public List<AirlineSchedule> getFlightSchedule(@RequestParam("fromP") String fromP,
			@RequestParam("toP") String toP) {
		System.out.println("get by Using " + fromP + " and " + toP);
		List<AirlineSchedule> list = airlineSheduleRepository.findByFromTo(fromP, toP);
		System.out.println("List is : " + list);
		return list;
	}
}
