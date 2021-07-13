package com.demo.repository;

import java.util.List;

//import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.demo.models.AirlineSchedule;

public interface AirlineSheduleRepository extends JpaRepository<AirlineSchedule, Integer> {

	@Query("SELECT a FROM AirlineSchedule a WHERE a.fromplace = :f and a.toplace= :t")
	public List<AirlineSchedule> findByFromTo(@Param("f") String fromPlace, @Param("t") String toPlace);
}
