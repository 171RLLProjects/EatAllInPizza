package com.mphasis.pizza.daos;


import java.sql.SQLException;
import java.util.List;
import java.util.Set;

import com.mphasis.pizza.entities.Customer;


public interface CustomerDao {
	public void customerRegister(Customer customer) throws SQLException;
	public Customer  Login(String cname,String pass);
	public void updateCustomerProfileDetails(Customer customer);
	public void deleteCustomerProfileById(String cuid);
	public Customer getCustomerProfileById(String cuid);
	public List<Customer> getAllCustomers();	
}
