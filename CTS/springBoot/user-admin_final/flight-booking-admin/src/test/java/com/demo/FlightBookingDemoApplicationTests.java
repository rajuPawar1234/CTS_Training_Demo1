package com.demo;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.mockito.stubbing.Answer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.demo.exception.CustomException;
import com.demo.models.Airlines;
import com.demo.models.Discount;
import com.demo.repository.DiscountRepository;
import com.demo.service.AirlineService;
import com.demo.service.DiscountService;

@SpringBootTest
class FlightBookingDemoApplicationTests {

	@Autowired
	DiscountService discountService;
	
	@MockBean
	DiscountRepository discountRepository;
	
	@MockBean
	AirlineService airlineService; 
	
	@Test
	public void shouldGetAllDiscount() {
		
		Mockito
			.when(discountRepository.findAll())
			.thenReturn(Stream.of(
					new Discount(1, "Dis1", 30),
					new Discount(2, "Dis2", 20),
					new Discount(3, "Dis3", 15),
					new Discount(5, "Dis4", 10)
			).collect(Collectors.toList()));
		
		List<Discount> dis = discountService.getAllDiscount();
		
		System.out.println(dis);
		
		assertEquals(4, discountRepository.findAll().size());
		assertEquals(3, discountRepository.findAll().size());
		
		Assertions.assertEquals(4, dis.size());
		Assertions.assertEquals(5, dis.size());
		
	}
	
	
	@Test
	public void shouldGetAllFlight() throws CustomException {
		
		Airlines airline = new Airlines();
		
		Mockito
			.when(airlineService.saveAirline(airline))
			.thenReturn(new Airlines());
		
		 airlineService.saveAirline(airline);
		
//		Assertions.assertEquals(5, dis.size());
		
	}
	
	@Test
	public void shouldSaveDiscount() {
		Discount discount = new Discount(1, "Dis1", 30);
		Mockito.when(discountRepository.save(discount))
				.thenReturn(new Discount(5, "Dis4", 50));
		Discount discountModal = null;
		try {
			discountModal = discountService.saveDiscount(discount);
		} catch (Exception e) {
			e.printStackTrace();
		}
		Assertions.assertEquals(new Long(105), discountModal.getId());
	}
	
	@Test
	public void shouldFindDiscountByDiscountNumber() throws Exception {
		Mockito.when(discountRepository.findById(10));
				//.then((Answer<?>) new Discount(105, "DS1014", 20));
		
		Discount discount = discountService.getDiscountById(13);
		Assertions.assertEquals(12, discount.getId());
	}
	
	@Test
	void testJunit(){
		Assertions.assertEquals(5, 5);
	}
}
