package com.demo;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.demo.repository.BookingRepository;
import com.demo.repository.UserDao;
import com.demo.service.BookingService;

@SpringBootTest
class FlightBookingUserApplicationTests {

	@Autowired
	private BookingService service;

	@MockBean
	private BookingRepository respository;

	@Autowired
	UserDao userDao;
	
	@Test
	void toTestTheBookingFlightsIfValueIsNull() throws Exception {
		Mockito.when(respository.save(null)).thenThrow(new NullPointerException());
		Assertions.assertThrows(NullPointerException.class, () -> {
			service.saveBook(null);
		});
	}

	@Test
	void saveNull() throws Exception {
		Mockito.when(respository.save(null)).thenThrow(NullPointerException.class);
		Assertions.assertThrows(NullPointerException.class, () -> {
			service.saveBook(null);
		});

	}

	
	@Test
	void contextLoads() {
	}

}
