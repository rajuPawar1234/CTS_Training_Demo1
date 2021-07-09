package com.demo;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.demo.models.Discount;
import com.demo.repository.DiscountRepository;
import com.demo.service.DiscountService;

@SpringBootTest
class FlightBookingDemoApplicationTests {

	@Autowired
	DiscountService discountService;
	
	@MockBean
	DiscountRepository discountRepository;
	
	@Test
	public void shouldGetAllDiscount() {
		
		Mockito
			.when(discountRepository.findAll())
			.thenReturn(Stream.of(
					new Discount(1, "Dis1", "DIS01", 30, 3000),
					new Discount(1, "Dis2", "DIS03", 20, 2000),
					new Discount(1, "Dis3", "DIS03", 15, 1500),
					new Discount(1, "Dis4", "DIS04", 10, 1000)
			).collect(Collectors.toList()));
		
		List<Discount> dis = discountService.getAllDiscount();
		
		System.out.println(dis);
		
		Assertions.assertEquals(4, dis.size());
		
	}
	
	@Test
	void testJunit(){
		Assertions.assertEquals(5, 5);
	}
}
