package com.mphasis.pizza.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name="addon")
public class AddOn {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column (length=10, updatable=false, insertable=false)
	private String adid;
		
	@Column (length=15, nullable=false)
	private String adname;
	
	@Column (length=10, nullable=false)
	private String adOnType;
	
	private int cost;
	
	private int quantity;
	
	@ManyToOne
	@JoinColumn(name="fid")
	private Food food;

	public String getAdid() {
		return adid;
	}

	public void setAdid(String adid) {
		this.adid = adid;
	}

	public String getAdname() {
		return adname;
	}

	public void setAdname(String adname) {
		this.adname = adname;
	}

	public int getCost() {
		return cost;
	}

	public void setCost(int cost) {
		this.cost = cost;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public Food getFood() {
		return food;
	}

	public void setFood(Food food) {
		this.food = food;
	}

	public String getAdOnType() {
		return adOnType;
	}

	public void setAdOnType(String adOnType) {
		this.adOnType = adOnType;
	}

	
	
	
}
