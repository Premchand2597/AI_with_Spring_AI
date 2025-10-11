package com.example.SpringAi_Demo.Repo;

import reactor.core.publisher.Flux;

public interface ChatRepo {
	String chat(String query);
	Flux<String> streamChat(String query, String uid);
}
