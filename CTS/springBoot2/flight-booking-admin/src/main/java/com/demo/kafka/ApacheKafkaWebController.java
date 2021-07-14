package com.demo.kafka;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/my-kafka/")
public class ApacheKafkaWebController {

	@Autowired
	KafkaSender kafkaSender;

	@Autowired
	KafkaProducer kafkaProducer;

	@GetMapping(value = "/producer")
	public String producer(@RequestParam("message") String message) {
		// kafkaSender.send(message);
		//kafkaProducer.sendMessage(message);
		return "Message sent to the Kafka Topic java_in_use_topic Successfully";
	}

}
