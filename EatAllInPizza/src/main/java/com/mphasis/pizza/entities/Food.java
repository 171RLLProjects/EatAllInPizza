package com.mphasis.pizza.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="food")
public class Food {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column (length=10, updatable=false, insertable=false)
	private String fid;
		
	@Column (length=10, nullable=false)
	private String fname;

	private int cost;
	
	private int quantity;
	
	@OneToMany(mappedBy="food",fetch=FetchType.EAGER)
	@JsonIgnore	
	private List<AddOn> addOns=new ArrayList<>();

	@ManyToOne
	@JoinColumn(name="sid")
	private Shop shop;

	public String getFid() {
		return fid;
	}

	public void setFid(String fid) {
		this.fid = fid;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
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



	public List<AddOn> getAddOns() {
		return addOns;
	}

	public void setAddOns(List<AddOn> addOns) {
		this.addOns = addOns;
	}

	public Shop getShop() {
		return shop;
	}

	public void setShop(Shop shop) {
		this.shop = shop;
	}
	
}

