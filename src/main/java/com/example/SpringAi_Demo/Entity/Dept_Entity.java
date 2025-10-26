package com.example.SpringAi_Demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "role_dummy")
public class Dept_Entity {

	@Id
	private long role_id;
	private String role_name; 
	private String description;
	private int dept_id;
	
	public long getRole_id() {
		return role_id;
	}
	public void setRole_id(long role_id) {
		this.role_id = role_id;
	}
	public String getRole_name() {
		return role_name;
	}
	public void setRole_name(String role_name) {
		this.role_name = role_name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getDept_id() {
		return dept_id;
	}
	public void setDept_id(int dept_id) {
		this.dept_id = dept_id;
	}
	@Override
	public String toString() {
		return "Dept_Entity [role_id=" + role_id + ", role_name=" + role_name + ", description=" + description
				+ ", dept_id=" + dept_id + "]";
	}
}
