package com.demo.kafka;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import com.demo.models.Discount;

@Service
public class KafkaSender {
	
	@Autowired
	private KafkaTemplate<String, String> kafkaTemplate;
	
	String kafkaTopic = "java_in_use_topic";
	
	
	public void send(String message) {
	    
	    kafkaTemplate.send(kafkaTopic, message);
	    //kafkaTemplate.
	}
	
	
	
	
	public void sendDiscount(List<Discount> discount) {
		
		//kafkaTemplate.send("All Discount List ", discount);
	}
}
