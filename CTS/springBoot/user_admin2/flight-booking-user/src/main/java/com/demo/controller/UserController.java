package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.models.User;
import com.demo.repository.UserRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

	@Autowired
	UserRepository userRepository;

	@GetMapping("user")
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	@PostMapping("user")
	public User saveUser(@RequestBody User user) {
		return userRepository.save(user);
	}
	
	@DeleteMapping("user/{id}")
	public void deleteAirline(@PathVariable("id") int id) {
		userRepository.deleteById(id);
	}
}
