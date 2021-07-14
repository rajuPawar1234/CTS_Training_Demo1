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

import com.demo.models.SaveBooking;
import com.demo.service.BookingService;

@RestController
@CrossOrigin
public class BookingController {

	@Autowired
	BookingService bookingService;

	@PostMapping("booking")
	public SaveBooking saveBook(@RequestBody SaveBooking saveBooking) {
		
		return bookingService.saveBook(saveBooking);
	}
	
	@GetMapping("booking")
	public List<SaveBooking> getAllBooking(){
		return bookingService.getAllBooking();
	}
	
	@GetMapping("bookedSchedule")
	public List<SaveBooking> getBookedSchedule(){
		return bookingService.getBookedSchedule();
	}
	
	@DeleteMapping("booking/{id}")
	public void deleteBooking(@PathVariable("id") int id) {
		bookingService.deleteBooking(id);
	}
	
	
}
