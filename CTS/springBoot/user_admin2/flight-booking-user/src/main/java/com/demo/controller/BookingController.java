package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.models.SaveBooking;
import com.demo.repository.BookingRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class BookingController {

	@Autowired
	BookingRepository bookingRepository;

	@PostMapping("booking")
	public SaveBooking saveBook(@RequestBody SaveBooking saveBooking) {
		return bookingRepository.save(saveBooking);
	}
}
