package com.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.exception.CustomException;
import com.demo.models.Airlines;
import com.demo.repository.AirlineRepository;

@Service
public class AirlineService {

	@Autowired
	AirlineRepository airlineRepository;
	
	public Airlines saveAirline(Airlines airline) throws CustomException{
		try {
			return airlineRepository.save(airline);
		}catch(Exception e) {
			throw new CustomException("Invalid Data", e);
		}
	}
}
