package com.mphasis.pizza.daos;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.TypedQuery;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mphasis.pizza.entities.Location;

@Repository
public class LocationDaoImpl implements LocationDao {
	@Autowired
	SessionFactory sessionFactory;

	@Override
	public void addLocation(Location location) {
		Session session=sessionFactory.openSession();
		session.beginTransaction();
		session.save(location);
		session.getTransaction().commit();
		session.close();

	}

	@Override
	public void updateLocation(Location location) {
		Session session=sessionFactory.openSession();
		session.beginTransaction();
		session.update(location);
		session.getTransaction().commit();
		session.close();

	}

	@Override
	public void deleteLocation(String lid){
		Session session=sessionFactory.openSession();
		session.beginTransaction();
		Location l=(Location)session.get(Location.class,lid);
		session.delete(l);
		session.getTransaction().commit();
		session.close();


	}

	@Override
	public Location getLocationById(String lid) {
		Session session=sessionFactory.openSession();
		TypedQuery<Location> query =session.createQuery("from Location where lid=:lid", Location.class);
		query.setParameter("lid", lid);
		Location l=(Location) query.getSingleResult();
		return l;
	}

	@Override
	public Set<Location> getLocations(){
		Session session=sessionFactory.openSession();
		TypedQuery<Location> query = session.createQuery("from Location", Location.class);
		List<Location> locations=query.getResultList();
		Set<Location> locationSet=new HashSet<>();
		locationSet.addAll(locations);
		// Set<Location> locations = (Set<Location>) query.getResultList();
		return locationSet;
	}

	@Override
	public Location getLocationByName(String lname){
		Session session=sessionFactory.openSession();
		TypedQuery<Location> query=session.createQuery("from Location where lname=:lname", Location.class);
		query.setParameter("lname", lname);
		Location l=(Location) query.getSingleResult();
		return l;
	}

}
