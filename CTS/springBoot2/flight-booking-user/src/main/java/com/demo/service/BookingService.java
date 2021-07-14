package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.demo.models.SaveBooking;
import com.demo.repository.BookingRepository;

@Service
public class BookingService {

	@Autowired
	BookingRepository bookingRepository;
	
	public SaveBooking saveBook(SaveBooking saveBooking) {
		
		return bookingRepository.save(saveBooking);
	}
	
	public List<SaveBooking> getAllBooking(){
		return bookingRepository.findAll();
	}
	
	public List<SaveBooking> getBookedSchedule(){
		return bookingRepository.getBookedSchedule();
	}
	
	public void deleteBooking(int id) {
		SaveBooking sb = bookingRepository.getById(id);
		System.out.println(sb);
		sb.setStatus("Canceled");
		System.out.println("Updated "+sb);
		bookingRepository.save(sb);
		//bookingRepository.updateBookingStatus(id);
	}
}
