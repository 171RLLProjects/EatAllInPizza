package com.mphasis.pizza.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="porder")
public class Order {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(length=10, updatable=false, insertable=false)
	private String oid;

	@OneToOne
	@JoinColumn(name="cid")
	private Customer customer;
	
	@OneToOne
	@JoinColumn(name="sid")
	private Shop shop;
	private int total;

	@Column(length=10)
	private String orderstatus;

	public String getOid() {
		return oid;
	}

	public void setOid(String oid) {
		this.oid = oid;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public Shop getShop() {
		return shop;
	}

	public void setShop(Shop shop) {
		this.shop = shop;
	}

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	public String getOrderstatus() {
		return orderstatus;
	}

	public void setOrderstatus(String orderstatus) {
		this.orderstatus = orderstatus;
	}	
	
	
}
