package com.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.models.Airlines;

public interface AirlineRepository extends JpaRepository<Airlines, Integer>{

}
