package com.mphasis.pizza.daos;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.LogicalExpression;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mphasis.pizza.entities.Admin;
import com.mphasis.pizza.entities.Order;

@Repository
public class StatusAdminDaoImpl implements StatusAdminDao {

	@Autowired
	SessionFactory sessionFactory;

	public void addAdmin(Admin a) {
		
		
		Session session=sessionFactory.openSession();
		session.beginTransaction();
		session.save(a);
		session.getTransaction().commit();
		

	}

	public void updateAdmin(Admin a) {
		Session session=sessionFactory.openSession();
		session.beginTransaction();
		session.saveOrUpdate(a);
		session.getTransaction().commit();
		
	}

	public void deleteAdmin(String aid) {
		Session session=sessionFactory.openSession();
		session.beginTransaction();
		Admin a= (Admin) session.get(Admin.class,aid);
		session.delete(a);
		session.getTransaction().commit();
	
	}	

	
	public Admin login(String username, String password) {
		Session session=sessionFactory.openSession();
		@SuppressWarnings("deprecation")
		Criteria cr=session.createCriteria(Admin.class);
		Criterion username1=Restrictions.eq("username", username);
		Criterion password1=Restrictions.eq("pass", password);
		LogicalExpression andExpression=Restrictions.and(username1, password1);
		cr.add(andExpression);
		Admin admin= (Admin) cr.uniqueResult();
		return admin;
	}

	public Admin getAdminById(String aid) {
		Session session=sessionFactory.openSession();
		@SuppressWarnings("deprecation")
		Criteria cr=session.createCriteria(Admin.class);
		cr.add(Restrictions.eq("aid", aid));
		Admin admin=(Admin) cr.uniqueResult();
		return admin;
	}

	public void updatePassword(Admin a) {
		Session session=sessionFactory.openSession();
		session.beginTransaction();
		session.update(a);
		session.getTransaction().commit();
        	session.close();
	}

	

 public Order getOrderById(String oid)
{
		Session session=sessionFactory.openSession();
		@SuppressWarnings("deprecation")
		Criteria cr=session.createCriteria(Order.class);
		cr.add(Restrictions.eq("oid",oid));
		Order o1=  session.get(Order.class,oid);
		return o1;

}


 public List<Admin> getAdminByType(String type) {
 	// TODO Auto-generated method stub
	 Session session=sessionFactory.openSession();
	 List<Admin> admins=session.createCriteria(Admin.class).add(Restrictions.eq("type", type)).list();
 	return admins;
 }

 
public List<Order> getAllOrders()
{
		Session session=sessionFactory.openSession();
		@SuppressWarnings("deprecation")
		List<Order> orders=session.createCriteria(Order.class).list();
		return orders;

}


public List<Admin> getAllAdmins() {
	// TODO Auto-generated method stub
	Session session=sessionFactory.openSession();
	List<Admin> admins=session.createCriteria(Admin.class).list();
	return admins;
}


public void addOrder(Order o) {
	// TODO Auto-generated method stub
	Session session=sessionFactory.openSession();
	session.beginTransaction();
	session.save(o);
	session.getTransaction().commit();
	
}


public void updateOrder(Order o) {
	// TODO Auto-generated method stub
	Session session=sessionFactory.openSession();
	session.beginTransaction();
	session.save(o);
	session.getTransaction().commit();
	
}


public void deleteOrder(String oid) {
	// TODO Auto-generated method stub
	Session session=sessionFactory.openSession();
	session.beginTransaction();
	Order o= session.get(Order.class,oid);
	session.delete(o);
	session.getTransaction().commit();
	
}


}