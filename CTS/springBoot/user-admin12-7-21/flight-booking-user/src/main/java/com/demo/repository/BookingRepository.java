package com.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.demo.models.SaveBooking;

public interface BookingRepository extends JpaRepository<SaveBooking, Integer> {

//	@Modifying
//	@Query("update SaveBooking b set b.status='Canceled' where b.id=:i")
//	public void updateBookingStatus(@Param("i") int id);

	@Query("select b from SaveBooking b where b.status='Booked'")
	public List<SaveBooking> getBookedSchedule();

}
