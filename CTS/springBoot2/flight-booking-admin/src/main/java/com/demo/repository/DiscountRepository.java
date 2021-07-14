package com.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.models.Discount;

public interface DiscountRepository extends JpaRepository<Discount, Integer> {

}
