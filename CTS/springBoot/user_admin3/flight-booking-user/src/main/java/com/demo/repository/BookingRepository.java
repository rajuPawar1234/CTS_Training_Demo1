package com.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.models.SaveBooking;

public interface BookingRepository extends JpaRepository<SaveBooking, Integer>{

}
