package com.mphasis.pizza.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="shop")
public class Shop {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column (length=10, updatable=false, insertable=false)
	private String sid;
		
	@Column (length=10, nullable=false)
	private String sname;
	
	@OneToMany(mappedBy="shop",fetch=FetchType.EAGER)
	@JsonIgnore	
	private List<Food> food;

	@ManyToOne
	private Location location;
	
	

	public String getSid() {
		return sid;
	}

	public void setSid(String sid) {
		this.sid = sid;
	}

	public String getSname() {
		return sname;
	}

	public void setSname(String sname) {
		this.sname = sname;
	}

	public List<Food> getFood() {
		return food;
	}

	public void setFood(List<Food> food) {
		this.food = food;
	}

	public Location getLocation() {
		return location;
	}

	public void setLocation(Location location) {
		this.location = location;
	}



}

