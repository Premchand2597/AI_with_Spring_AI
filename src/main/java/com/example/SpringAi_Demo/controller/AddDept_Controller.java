package com.example.SpringAi_Demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.SpringAi_Demo.Entity.Dept_Entity;
import com.example.SpringAi_Demo.Service.AddDept_Service;

@Controller
public class AddDept_Controller {

	@Autowired
	private AddDept_Service addDept_Service;
	
	@PostMapping("/add-data")
	public ResponseEntity<String> saveData(@ModelAttribute Dept_Entity dept_Entity){
		try {
			addDept_Service.insertData(dept_Entity);
			return ResponseEntity.ok("Data inserted Successfully!");
		} catch (Exception e) {
			System.out.println(e);
			return ResponseEntity.ok("Data not inserted");
		}
	}
	
	@GetMapping("/get-data")
	@ResponseBody
	public List<Dept_Entity> getData(){
		return addDept_Service.getData();
	}
}
