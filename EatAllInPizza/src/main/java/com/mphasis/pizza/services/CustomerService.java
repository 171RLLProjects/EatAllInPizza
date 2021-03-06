package com.mphasis.pizza.services;
import java.util.List;
import java.util.Set;

import com.mphasis.pizza.entities.Customer;
import com.mphasis.pizza.exceptions.BusinessException;

public interface CustomerService {
	public void customerRegister(Customer customer) throws BusinessException;
	public Customer  Login(String cname,String pass) throws BusinessException;
	public void updateCustomerProfileDetails(Customer customer)throws BusinessException;
	public void deleteCustomerProfileById(String cuid)throws BusinessException ;
	public Customer getCustomerProfileById(String cuid) throws BusinessException;
	public List<Customer> getAllCustomers() throws BusinessException;	
}
