package com.mphasis.pizza.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Admin {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column (length=10, updatable=false, insertable=false)
	private String aid;
	@Column (length=10, nullable=false)
	private String aname;
	@Column (length=10, nullable=false)
	private String password;
	@Column (length=16, nullable=false)
	private String type;
}

