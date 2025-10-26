package com.example.SpringAi_Demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SpringAi_Demo.Entity.Dept_Entity;
import com.example.SpringAi_Demo.Repo.AddDept_Repo;

@Service
public class AddDept_Service {

	@Autowired
	private AddDept_Repo addDept_Repo;
	
	public void insertData(Dept_Entity dept_Entity) {
		addDept_Repo.save(dept_Entity);
	}
	
	public List<Dept_Entity> getData() {
		return addDept_Repo.getListData();
	}
}
