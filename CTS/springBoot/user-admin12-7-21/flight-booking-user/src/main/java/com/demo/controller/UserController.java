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

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

//	@Autowired
//	UserRepository userRepository;
//
//	@GetMapping("user")
//	@ApiOperation(value="Get All Users ", notes="No any argument here ")
//	public List<DaoUser> getAllUsers() {
//		return userRepository.findAll();
//	}
//
//	@PostMapping("user")
//	public DaoUser saveUser(@RequestBody DaoUser user) {
//		return userRepository.save(user);
//	}
//	
//	@DeleteMapping("user/{id}")
//	@ApiOperation(value="Delete User", notes="need id for delete...")
//	public void deleteAirline(@ApiParam(value="Id is Required for delete user ") @PathVariable("id") int id) {
//		userRepository.deleteById(id);
//	}
}
