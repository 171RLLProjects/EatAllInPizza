package com.mphasis.pizza.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.mphasis.pizza.entities.Admin;
import com.mphasis.pizza.entities.Order;
import com.mphasis.pizza.exceptions.BusinessException;
import com.mphasis.pizza.services.StatusAdminService;

@RestController
public class StatusAdminController {

	@Autowired
	StatusAdminService statusAdminService;


	@RequestMapping(value="/login/{username}/{pass}",method=RequestMethod.GET,produces=MediaType.APPLICATION_JSON_VALUE)
	public String login(@PathVariable("username")String username,@PathVariable("pass")String pass) {
		// TODO Auto-generated method stub
		Admin admin=null;

		try {
			admin=statusAdminService.login(username, pass);
		} catch (BusinessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return admin.getType();
	}

	@RequestMapping(value="/admin",method=RequestMethod.POST,produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<Map<String, String>> addAdmin(@RequestBody Admin admin )  {
		Map<String,String> response=new HashMap<String,String>();
		try {
			statusAdminService.addAdmin(admin);
			response.put("ok", "Admin is Added");
			return ResponseEntity.accepted().body(response);
		} catch (BusinessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			response.put("error", e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}


	}

	@RequestMapping(value="/order",method=RequestMethod.POST,produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<Map<String, String>> addOrder(@RequestBody Order o)  {

		Map<String, String> response=new HashMap<>();
		try {
			statusAdminService.addOrder(o);
			response.put("ok", "Order is added");
			return ResponseEntity.accepted().body(response);
		} catch (BusinessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			response.put("error",e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}

	}

	@RequestMapping(value="/admin",method=RequestMethod.PUT,produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<Map<String, String>> updateAdmin(@RequestBody Admin admin) {
		Map<String, String> response=new HashMap<>();
		try {
			statusAdminService.updateAdmin(admin);
			response.put("ok", "admin details updated");
			return ResponseEntity.accepted().body(response);

		} catch (BusinessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			response.put("error",e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}

	}

	@RequestMapping(value="/order",method=RequestMethod.PUT,produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Map<String, String>> updateOrder(@RequestBody Order o) {

		Map<String, String> response=new HashMap<>();
		try {
			statusAdminService.updateOrder(o);
			response.put("ok", "order details are updates");
			return ResponseEntity.accepted().body(response);
		} catch (BusinessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			response.put("error", e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}

	}

	@RequestMapping(value="/admin/{aid}",method=RequestMethod.DELETE,produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<Map<String, String>> deleteAdmin(@PathVariable("aid") String aid) {

		Map<String, String> response=new HashMap<>();
		try {
			statusAdminService.deleteAdmin(aid);
			response.put("ok","Admin details got deleted");
			return ResponseEntity.accepted().body(response);
		} catch (BusinessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			response.put("error", e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}

	}

	@RequestMapping(value="/order/{oid}",method=RequestMethod.DELETE,produces=MediaType.APPLICATION_JSON_VALUE)
	public  ResponseEntity<Map<String, String>> deleteOrder(@PathVariable("oid") String oid) {
		Map<String, String> response=new HashMap<>();
		try {
			statusAdminService.deleteOrder(oid);
			response.put("ok","Order details got deleted");
			return ResponseEntity.accepted().body(response);
		} catch (BusinessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			response.put("error", e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}

	}

	@RequestMapping(value="/orders" , method=RequestMethod.GET,produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Order> getAllOrders()
	{
		List<Order> orders=null;


		try {
			orders=statusAdminService.getAllOrders();
		} catch (BusinessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return orders;
	}

	@RequestMapping(value="/admins" , method=RequestMethod.GET,produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Admin> getAllAdmins()
	{
		List<Admin> admins=null;


		try {
			admins=statusAdminService.getAllAdmins();
		} catch (BusinessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return admins;
	}

	@RequestMapping(value="/admins/{aid}" , method=RequestMethod.GET,produces=MediaType.APPLICATION_JSON_VALUE)
	public Admin getAdminById(@PathVariable("aid") String aid)
	{
		Admin admin = null;

		try {
			admin= (Admin) statusAdminService.getAdminById(aid);
		} catch (BusinessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return  admin;
	}


	@RequestMapping(value="/adminsbytype/{type}" , method=RequestMethod.GET,produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Admin> getAdminByType(@PathVariable("type") String type)
	{
		List<Admin> admins = null;

		try {
			admins= statusAdminService.getAdminByType(type);
		} catch (BusinessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return admins;
	}


	@RequestMapping(value="/order/{oid}",method=RequestMethod.GET,produces=MediaType.APPLICATION_JSON_VALUE)

	public ResponseEntity<Order>  getOrderById(@PathVariable("oid") String oid) {
		// TODO Auto-generated method stub
		Order order=null;
		try {
			order=statusAdminService.getOrderById(oid);
		} catch (  Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return new ResponseEntity<Order>(HttpStatus.SEE_OTHER); 
		}
		return ResponseEntity.accepted().body(order);

	}



}
