package com.demo.kafka;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class KafkaProducer {

//	private static final String TOPIC = "My_topic";
//
//	@Autowired
//	private KafkaTemplate<String, String> kafkaTemplate;
//
//	public void sendMessage(String msg) {
//		this.kafkaTemplate.send(TOPIC, msg);
//	}
}
