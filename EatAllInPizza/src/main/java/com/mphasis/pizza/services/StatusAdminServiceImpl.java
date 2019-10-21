package com.mphasis.pizza.services;

import java.util.List;

import org.springframework.aop.ThrowsAdvice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mphasis.pizza.daos.StatusAdminDao;
import com.mphasis.pizza.entities.Admin;
import com.mphasis.pizza.entities.Order;
import com.mphasis.pizza.exceptions.BusinessException;

@Service
public class StatusAdminServiceImpl implements StatusAdminService {


	@Autowired
	StatusAdminDao statusAdminDao;

	@Override
	public void addAdmin(Admin a) throws BusinessException {
		// TODO Auto-generated method stub

		if(a.getAname().length()>2&& a.getAname().length()<10)
		{
			if(a.getPassword().length()>5&&a.getPassword().length()<10)
			{
				if(a.getType().equals("ShopAdmin") || a.getType().equals("FoodAdmin") || a.getType().equals("StatusAdmin"))
				{
					statusAdminDao.addAdmin(a);
				}else throw new BusinessException("Type of Admin should be either ShopAdmin or FoodAdmin or StatusAdmin");

			}else throw new BusinessException("Length of password should be more than six characters and less than ten characters"); 

		}
		else throw new BusinessException("Length of name should be more than two characters and less than ten characters");



	}

	@Override
	public void updateAdmin(Admin a) throws BusinessException {
		// TODO Auto-generated method stub

		if(a.getAname().length()>2&& a.getAname().length()<10)
		{
			if(a.getPassword().length()>5&&a.getPassword().length()<10)
			{
				if(a.getType().equals("ShopAdmin") || a.getType().equals("FoodAdmin") || a.getType().equals("StatusAdmin"))
				{
					statusAdminDao.updateAdmin(a);
				}else throw new BusinessException("Type of Admin should be either ShopAdmin or FoodAdmin or StatusAdmin");

			}else throw new BusinessException("Length of password should be more than six characters and less than ten characters"); 

		}
		else throw new BusinessException("Length of name should be more than two characters and less than ten characters");


	}

	@Override
	public void deleteAdmin(String oid) throws BusinessException {
		// TODO Auto-generated method stub

		if(oid.startsWith("AD_")&& oid.length()==6)
		{
			statusAdminDao.deleteAdmin(oid);
		}
		else throw new BusinessException("ID should start with AD_ and should be of 6 characters");
	}

	@Override
	public Admin login(String username, String password) throws BusinessException {
		// TODO Auto-generated method stub


		if(username!=null && password!=null)
		{
			return statusAdminDao.login(username, password);
		}
		else
		{
			throw new BusinessException("Username and Password should not be empty");
		}
	}

	@Override
	public Admin getAdminById(String aid) throws BusinessException  {
		// TODO Auto-generated method stub

		if(aid.startsWith("AD_")&&aid.length()==6)
		{

		return statusAdminDao.getAdminById(aid);
		
		}
		else
		{
			throw new BusinessException("ID should start with AD_ and should be of 6 characters");
		}
	}

	@Override
	public void updatePassword(Admin a) {
		// TODO Auto-generated method stub


		if(a.getPassword().length()>2 && a.getPassword().length()<10)
		{
			statusAdminDao.updatePassword(a);
		}
	}


	@Override
	public void addOrder(Order o) {
		// TODO Auto-generated method stub

		

		statusAdminDao.addOrder(o);

	}

	@Override
	public void updateOrder(Order o) {
		// TODO Auto-generated method stub
		
		statusAdminDao.updateOrder(o);

	}

	@Override
	public void deleteOrder(String oid) {
		// TODO Auto-generated method stub
		statusAdminDao.deleteOrder(oid);

	}


	@Override
	public Order getOrderById(String oid) throws BusinessException {
		// TODO Auto-generated method stub
		
		if(oid.startsWith("OR_") && oid.length()==6)
		{
		
		return statusAdminDao.getOrderById(oid);
		}else
		{
			throw new BusinessException("Order Id should start with OR_ and should be of 6 characters");
		}
	}

	@Override
	public List<Order> getAllOrders() throws BusinessException {
		// TODO Auto-generated method stub
		
		
		List<Order> orders=statusAdminDao.getAllOrders();
		
		if(orders!=null)
		{
			return orders;
		}
		else
		{
			throw new BusinessException("Order should not be empty");
		}
		
		
	}

	@Override
	public List<Admin> getAllAdmins() throws BusinessException {
		// TODO Auto-generated method stub
		
		List<Admin> admins=statusAdminDao.getAllAdmins();
		
		if(admins!=null)
		{
		return admins;
		}else
		{
			throw new BusinessException("Admin details should not be empty");
		}
	}

	@Override
	public List<Admin> getAdminByType(String type) throws BusinessException {
		// TODO Auto-generated method stub
		
		List<Admin> admin=statusAdminDao.getAdminByType(type);
		
		if(admin!=null)
		{
			return admin;
		}else
		{
			throw new BusinessException("Admin Type should not be empty");
		}
	}


}
