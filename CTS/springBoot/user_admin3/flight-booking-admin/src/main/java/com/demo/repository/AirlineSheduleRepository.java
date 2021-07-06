package com.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.models.AirlineSchedule;

public interface AirlineSheduleRepository extends JpaRepository<AirlineSchedule, Integer> {

}
