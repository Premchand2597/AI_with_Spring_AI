package com.example.SpringAi_Demo.controller;

import org.springframework.ai.chat.client.ChatClient;
//import org.springframework.ai.ollama.OllamaChatModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.SpringAi_Demo.Service.ChatImpl;

import reactor.core.publisher.Flux;

@RestController
public class chatController {

	/*private ChatClient chatClient;

	public chatController(ChatClient.Builder builder) {
		this.chatClient = builder.build();
	}
	
	@GetMapping("/chat")
	public ResponseEntity<String> getChatResponse(@RequestParam String message){
		String content = chatClient.prompt(message).call().content();
		return ResponseEntity.ok(content);
	}*/
	
	/*private ChatClient ollamaChatClient;

	public chatController(OllamaChatModel ollamaChatModel) {
		this.ollamaChatClient = ChatClient.builder(ollamaChatModel).build();
	}
	
	@GetMapping("/chat")
	public ResponseEntity<String> getChatResponse(@RequestParam String message){
		String content = ollamaChatClient.prompt(message).call().content();
		return ResponseEntity.ok(content);
	}*/
	
	/*@Autowired
	private ChatImpl chatImpl;

	@GetMapping("/chat")
	public ResponseEntity<String> getChatResponse(@RequestParam String message){
		String content = chatImpl.chat(message);
		return ResponseEntity.ok(content);
	}*/
	
	@Autowired
	private ChatImpl chatImpl;

	@GetMapping("/stream-chat/{uid}")
	public ResponseEntity<Flux<String>> getChatResponseAsSmallChunks(@RequestParam String message, @PathVariable String uid){
		Flux<String> content = chatImpl.streamChat(message, uid);
		return ResponseEntity.ok(content);
	}
	
}
