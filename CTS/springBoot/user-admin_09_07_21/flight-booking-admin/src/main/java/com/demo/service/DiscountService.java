package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.demo.models.Discount;
import com.demo.repository.DiscountRepository;

@Service
public class DiscountService {

	@Autowired
	DiscountRepository discountRepository;

	public List<Discount> getAllDiscount() {
		return discountRepository.findAll();
	}

	public Discount saveDiscount(Discount Discount) {
		return discountRepository.save(Discount);
	}

	public void deleteDiscount(int id) {
		discountRepository.deleteById(id);
	}
}
