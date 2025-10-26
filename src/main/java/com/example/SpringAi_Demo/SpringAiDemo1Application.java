package com.example.SpringAi_Demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin(origins = "http://192.168.1.66:3000")
public class SpringAiDemo1Application {

	public static void main(String[] args) {
		SpringApplication.run(SpringAiDemo1Application.class, args);
	}

}
