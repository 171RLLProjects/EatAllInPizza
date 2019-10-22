package com.mphasis.pizza.daos;

import java.util.List;

import com.mphasis.pizza.entities.Admin;
import com.mphasis.pizza.entities.Order;
import com.mphasis.pizza.exceptions.BusinessException;

public interface StatusAdminDao {
	public void addAdmin(Admin a);
	public void updateAdmin(Admin a);
	public void deleteAdmin(String aid);
	public Admin login(String aname,String password);
	public Admin getAdminById(String aid);
	public void updatePassword(Admin a);
    public List<Admin> getAdminByType(String type);
	public Order getOrderById(String oid);
	public List<Order> getAllOrders();
	public List<Admin> getAllAdmins();
	public void addOrder(Order o);
	public void updateOrder(Order o);
	public void deleteOrder(String oid);
	
}
