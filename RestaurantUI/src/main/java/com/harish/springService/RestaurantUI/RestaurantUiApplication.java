package com.harish.springService.RestaurantUI;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
@RequestMapping("/reservation")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class RestaurantUiApplication
{
	
	@PostMapping("/book")
	@CrossOrigin(origins = "http://127.0.0.1:5500")
	public ResponseEntity<String> checkData(@RequestBody BookingDetails bk) throws SQLException
	{
		Connection conn=DriverManager.getConnection("jdbc:mysql://localhost:3306/userinfo","root","HarishShiva@07");
		
		if(bk.getTableno()==1 && bk.getMembers()<3)
		{
			String st1="SELECT*FROM reservation WHERE buffetnumber=?";
			PreparedStatement sm1=conn.prepareStatement(st1);
			sm1.setInt(1,bk.getTableno());
			ResultSet rs=sm1.executeQuery();
			if(rs.next())
			{
				return ResponseEntity.ok().body("{\"message\": \"" +"Table exist !"+ "\"}");
			}
			else 
			{
				String st= "INSERT INTO reservation(client_name,email,mobno,buffetnumber,personscount)" + "VALUES(?,?,?,?,?)";
				PreparedStatement sm=conn.prepareStatement(st);
				sm.setString(1,bk.getName());
				sm.setString(2,bk.getEmail());
				sm.setString(3,bk.getMobno());
				sm.setInt(4, bk.getTableno());
				sm.setInt(5, bk.getMembers());
				
				sm.execute();
				return ResponseEntity.ok().body("{\"message\": \"" +"Successful"+ "\"}");
			}

		}
		else if(bk.getTableno()==2 && bk.getMembers()<5)
		{
			String st1="SELECT*FROM reservation WHERE buffetnumber=?";
			PreparedStatement sm1=conn.prepareStatement(st1);
			sm1.setInt(1,bk.getTableno());
			ResultSet rs=sm1.executeQuery();
			if(rs.next())
			{
				return ResponseEntity.ok().body("{\"message\": \"" +"table exist !"+ "\"}");
			}
			else 
			{
				String st= "INSERT INTO reservation(client_name,email,mobno,buffetnumber,personscount)"+"VALUES(?,?,?,?,?)";
				PreparedStatement sm=conn.prepareStatement(st);
				sm.setString(1,bk.getName());
				sm.setString(2,bk.getEmail());
				sm.setString(3,bk.getMobno());
				sm.setInt(4, bk.getTableno());
				sm.setInt(5, bk.getMembers());
				
				sm.execute();
				return ResponseEntity.ok().body("{\"message\": \"" +"Successful"+ "\"}");
			}
		}
		else if(bk.getTableno()==3 && bk.getMembers()<7)
		{
			String st1="SELECT * FROM reservation WHERE buffetnumber=?";
			PreparedStatement sm1=conn.prepareStatement(st1);
			sm1.setInt(1,bk.getTableno());
			ResultSet rs=sm1.executeQuery();
			if(rs.next())
			{
				return ResponseEntity.ok().body("{\"message\": \"" +"table exist !"+ "\"}");
			}
			else 
			{
				String st= "INSERT INTO reservation(client_name,email,mobno,buffetnumber,personscount)" + "VALUES(?,?,?,?,?)";
				PreparedStatement sm=conn.prepareStatement(st);
				sm.setString(1,bk.getName());
				sm.setString(2,bk.getEmail());
				sm.setString(3,bk.getMobno());
				sm.setInt(4, bk.getTableno());
				sm.setInt(5, bk.getMembers());
				
				sm.execute();
				return ResponseEntity.ok().body("{\"message\": \"" +"Successful"+ "\"}");
			}
		}
		else if(bk.getTableno()==4 && bk.getMembers()<5)
		{
			String st1="SELECT*FROM reservation WHERE buffetnumber=?";
			PreparedStatement sm1=conn.prepareStatement(st1);
			sm1.setInt(1,bk.getTableno());
			ResultSet rs=sm1.executeQuery();
			if(rs.next())
			{
				return ResponseEntity.ok().body("{\"message\": \"" +"table exist !"+ "\"}");
			}
			else 
			{
				String st= "INSERT INTO reservation(client_name,email,mobno,buffetnumber,personscount)" + "VALUES(?,?,?,?,?)";
				PreparedStatement sm=conn.prepareStatement(st);
				sm.setString(1,bk.getName());
				sm.setString(2,bk.getEmail());
				sm.setString(3,bk.getMobno());
				sm.setInt(4, bk.getTableno());
				sm.setInt(5, bk.getMembers());
				
				sm.execute();
				return ResponseEntity.ok().body("{\"message\": \"" +"Successful"+ "\"}");
			}
		}
		else if(bk.getTableno()==5 && bk.getMembers()<3)
		{
			String st1="SELECT*FROM reservation WHERE buffetnumber=?";
			PreparedStatement sm1=conn.prepareStatement(st1);
			sm1.setInt(1,bk.getTableno());
			ResultSet rs=sm1.executeQuery();
			if(rs.next())
			{
				return ResponseEntity.ok().body("{\"message\": \"" +"table exist !"+ "\"}");
			}
			else 
			{
				String st= "INSERT INTO reservation(client_name,email,mobno,buffetnumber,personscount)" + "VALUES(?,?,?,?,?)";
				PreparedStatement sm=conn.prepareStatement(st);
				sm.setString(1,bk.getName());
				sm.setString(2,bk.getEmail());
				sm.setString(3,bk.getMobno());
				sm.setInt(4, bk.getTableno());
				sm.setInt(5, bk.getMembers());
				
				sm.execute();
				return ResponseEntity.ok().body("{\"message\": \"" +"Successful"+ "\"}");
			}
		}
		else if(bk.getTableno()==6 && bk.getMembers()<3)
		{
			String st1="SELECT*FROM reservation WHERE buffetnumber=?";
			PreparedStatement sm1=conn.prepareStatement(st1);
			sm1.setInt(1,bk.getTableno());
			ResultSet rs=sm1.executeQuery();
			if(rs.next())
			{
				return ResponseEntity.ok().body("{\"message\": \"" +"table exist !"+ "\"}");
			}
			else 
			{
				System.out.println(bk.getTableno());
				try
				{
				String st= "INSERT INTO reservation(client_name,email,mobno,buffetnumber,personscount)" + "VALUES(?,?,?,?,?)";
				PreparedStatement sm=conn.prepareStatement(st);
				sm.setString(1,bk.getName());
				sm.setString(2,bk.getEmail());
				sm.setString(3,bk.getMobno());
				sm.setInt(4, bk.getTableno());
				sm.setInt(5, bk.getMembers());
				
				sm.execute();
				}
				catch(Exception e)
				{
					e.printStackTrace();
				}
				return ResponseEntity.ok().body("{\"message\": \"" +"Successful"+ "\"}");
			}
		}
		else if(bk.getTableno()==7 && bk.getMembers()<3)
		{
			String st1="SELECT*FROM reservation WHERE buffetnumber=?";
			PreparedStatement sm1=conn.prepareStatement(st1);
			sm1.setInt(1,bk.getTableno());
			ResultSet rs=sm1.executeQuery();
			if(rs.next())
			{
				return ResponseEntity.ok().body("{\"message\": \"" +"table exist !"+ "\"}");
			}
			else 
			{
				String st= "INSERT INTO reservation(client_name,email,mobno,buffetnumber,personscount)" + "VALUES(?,?,?,?,?)";
				PreparedStatement sm=conn.prepareStatement(st);
				sm.setString(1,bk.getName());
				sm.setString(2,bk.getEmail());
				sm.setString(3,bk.getMobno());
				sm.setInt(4, bk.getTableno());
				sm.setInt(5, bk.getMembers());
				
				sm.execute();
				return ResponseEntity.ok().body("{\"message\": \"" +"Successful"+ "\"}");
			}
		}
		else if(bk.getTableno()==8 && bk.getMembers()<3)
		{
			String st1="SELECT*FROM reservation WHERE buffetnumber=?";
			PreparedStatement sm1=conn.prepareStatement(st1);
			sm1.setInt(1,bk.getTableno());
			ResultSet rs=sm1.executeQuery();
			if(rs.next())
			{
				return ResponseEntity.ok().body("{\"message\": \"" +"table exist !"+ "\"}");
			}
			else 
			{
				String st= "INSERT INTO reservation(client_name,email,mobno,buffetnumber,personscount)" + "VALUES(?,?,?,?,?)";
				PreparedStatement sm=conn.prepareStatement(st);
				sm.setString(1,bk.getName());
				sm.setString(2,bk.getEmail());
				sm.setString(3,bk.getMobno());
				sm.setInt(4, bk.getTableno());
				sm.setInt(5, bk.getMembers());
				
				sm.execute();
				return ResponseEntity.ok().body("{\"message\": \"" +"Successful"+ "\"}");
			}
		}
		else 
		{
			return ResponseEntity.ok().body("{\"message\": \"" +"No Relavent Data"+ "\"}");
		}
	}
	
	@PostMapping("/foodbook")
	public ResponseEntity<String> foodSave(@RequestBody pojoFood pj) throws SQLException
	{
		Connection conn=DriverManager.getConnection("jdbc:mysql://localhost:3306/userinfo","root","HarishShiva@07");
		String st1="INSERT INTO orderdetail(client_name,email,mobno,bill,price)" + "VALUES(?,?,?,?,?)";
		PreparedStatement sm1=conn.prepareStatement(st1);
		sm1.setString(1,pj.getName());
		sm1.setString(2,pj.getEmail());
		sm1.setString(3,pj.getMobileno());
		sm1.setString(4,pj.getBill());
		sm1.setInt(5, pj.getPrice());
		
		sm1.execute();
		
		return ResponseEntity.ok().body("{\"message\": \"" +"Insertion Successful"+ "\"}");	
	}
	
	public static void main(String[] args)
	{
		SpringApplication.run(RestaurantUiApplication.class, args);
	}
}
