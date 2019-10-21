package com.mphasis.pizza.services;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mphasis.pizza.daos.LocationDao;
import com.mphasis.pizza.entities.Location;
import com.mphasis.pizza.exceptions.BusinessException;

@Service
public class LocationServiceImpl implements LocationServices {
	@Autowired
	LocationDao locationDao;

	@Override
	public void addLocation(Location location) throws BusinessException {
	
		if((location.getLname().length()>1) && (location.getLname().length()<10) )
		{
			locationDao.addLocation(location);
		}
		else
		{
			throw new BusinessException("Location Name should be greater than 1 and less than 10");
		}

	}

	@Override
	public void updateLocation(Location location) throws BusinessException {
		
		if((location.getLname().length()>1) && (location.getLname().length()<10) )
		{
		locationDao.updateLocation(location);
		}
		else
		{
			throw new BusinessException("Location Name should be greater than 1 and less than 10");
		}

	}

	@Override
	public void deleteLocation(String lid) throws BusinessException {
		if(lid.startsWith("LO_") && lid.length()==6)
		{
			locationDao.deleteLocation(lid);
		}
		else
		{
			throw new BusinessException("Delete Location should start with LO_ and should have 6 characters");
		}

	}

	@Override
	public Location getLocationById(String lid) throws BusinessException {
		if(lid.startsWith("LO_") && lid.length()==6)
		{
			Location location = locationDao.getLocationById(lid);
			return location;
		}
		else
		{
			throw new BusinessException("GetLocationById should start with LO_ and should have 6 characters");
		}
		
	}

	@Override
	public Set<Location> getLocations() throws BusinessException {
		Set<Location> location = locationDao.getLocations();
		if(location == null)
		{
			throw new BusinessException("Get Locations should not be null");
		}
		else
		{
			return location;
		}
	
	}

	@Override
	public Location getLocationByName(String lname) throws BusinessException {

		if((lname.length()>1) && (lname.length()<10) )
		{
			Location location = locationDao.getLocationByName(lname);
			return location;
		}
		else
		{
			throw new BusinessException("Location Name should be greater than 1 and less than 10");
		}
		
	}

}
