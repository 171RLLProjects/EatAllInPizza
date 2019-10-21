package com.mphasis.pizza.services;

import java.util.Set;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mphasis.pizza.daos.ShopDao;
import com.mphasis.pizza.entities.Shop;
import com.mphasis.pizza.exceptions.BusinessException;

@Service
public class ShopServiceImpl implements ShopService {
	@Autowired
	ShopDao shopDao;

	@Override
	public void addShop(Shop shop) throws BusinessException {
		if(shop.getSname().length()>1 && shop.getSname().length()<10)
		{
		shopDao.addShop(shop);
		}
		else
		{
			throw new BusinessException("Shop Name should be greater than 1 and less than 10");
		}

	}

	@Override
	public void updateShop(Shop shop) throws BusinessException {
		if(shop.getSname().length()>1 && shop.getSname().length()<10)
		{
		shopDao.updateShop(shop);
		}
		else
		{
			throw new BusinessException("Shop Name should be greater than 1 and less than 10");
		}
	}

	@Override
	public void deleteShop(String sid) throws BusinessException {
		if(sid.startsWith("SH_") && sid.length()==6)
		{
			shopDao.deleteShop(sid);
		}
		else
		{
			throw new BusinessException("Delete Shop should start with SH_ and should have 6 characters");
		}

	}

	@Override
	public Shop getShopById(String sid) throws BusinessException {
		if(sid.startsWith("SH_") && sid.length()==6)
		{
			Shop shop = shopDao.getShopById(sid);
			return shop;
		}
		else
		{
			throw new BusinessException("GetShopById should start with SH_ and should have 6 characters");
		}
	}

	@Override
	public Set<Shop> getShops() throws BusinessException {
		Set<Shop> shop = shopDao.getShops();
		if(shop == null)
		{
			throw new BusinessException("Get Shops should not be null");
		}
		else
		{
			return shop;
		}
	}

	@Override
	public Shop getShopByName(String sname) throws BusinessException {
		if((sname.length()>1) && (sname.length()<10) )
		{
			Shop shop = shopDao.getShopByName(sname);
			return shop;
		}
		else
		{
			throw new BusinessException("Shop Name should be greater than 1 and less than 10");
		}
		
	}
	
	@Override
	public List<Shop> getShopsByLocationName(String lname)throws BusinessException {
		List<Shop> shops=shopDao.getShopsByLocationName(lname);
		return shops;
	}

}
