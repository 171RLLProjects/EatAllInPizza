package com.mphasis.pizza.daos;

import java.util.List;
import java.util.Set;

import com.mphasis.pizza.entities.Location;
import com.mphasis.pizza.exceptions.BusinessException;

public interface LocationDao {
	public void addLocation(Location location)throws BusinessException;
	public void updateLocation(Location location)throws BusinessException;
	public void deleteLocation(String lid)throws BusinessException;
	public Location getLocationById(String lid)throws BusinessException;
	public Set<Location> getLocations()throws BusinessException;
	public Location getLocationByName(String lname)throws BusinessException;
}
