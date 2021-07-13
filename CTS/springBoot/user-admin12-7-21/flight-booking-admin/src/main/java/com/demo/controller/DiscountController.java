package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.kafka.KafkaSender;
import com.demo.models.Discount;
import com.demo.repository.DiscountRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class DiscountController {

	@Autowired
	DiscountRepository discountRepository;
	
	@Autowired
	KafkaSender kafkaSender;
	
	@PostMapping("discount")
	public Discount saveDiscount(@RequestBody Discount Discount) {
		return discountRepository.save(Discount);
	}
	
	@GetMapping("discount")
	public List<Discount> getAllDiscount(){
		List<Discount> dis = discountRepository.findAll();
		//kafkaSender.sendDiscount(dis);
		return dis;
	}
	
	@DeleteMapping("discount/{id}")
	public void deleteDiscount(@PathVariable("id") int id) {
		discountRepository.deleteById(id);
	}
	
	@PutMapping("discount/{id}")
	public void updateDiscount(@PathVariable("id") int id,@RequestBody Discount Discount){
		discountRepository.save(Discount);
	}
}
