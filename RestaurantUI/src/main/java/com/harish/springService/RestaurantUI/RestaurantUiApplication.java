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
@CrossOrigin(origins = {"http://127.0.0.1:5501","http://127.0.0.1:5000"})
public class RestaurantUiApplication
{
	
	static HashMap <Integer,Integer> op=new HashMap();
	static 
	{
		op.put(1,2);
		op.put(2,4);
		op.put(3,6);
		op.put(4,4);
		op.put(5,2);
		op.put(6,2);
		op.put(7,2);
		op.put(8,2);
	}
	
	@PostMapping("/book")
	@CrossOrigin(origins = {"http://127.0.0.1:5501","http://127.0.0.1:5000"})
	public ResponseEntity<String> checkData(@RequestBody BookingDetails bk) throws SQLException
	{		
		int tbleno=bk.getTableno();
		System.out.println(tbleno);
		System.out.println(op.get(tbleno));
		if(!op.containsKey(tbleno) || op.get(tbleno)<bk.getMembers())
		{
			System.out.println("Entered no response block");
			return ResponseEntity.ok().body("{\"message\": \"" +"No Relavent Data"+ "\"}");
		}
		
		if(isTableAvailable(tbleno))
		{
			System.out.println("Entered response block");
			insertReservation(bk);
			return ResponseEntity.ok().body("{\"message\": \"" +"Successful"+ "\"}");
		}
		else
		{
			return ResponseEntity.ok().body("{\"message\": \"" +"table exist !"+ "\"}");
		}
	}
	public boolean isTableAvailable(int tableno) throws SQLException
	{
		Connection conn=DriverManager.getConnection("jdbc:mysql://localhost:3306/userinfo","root","HarishShiva@07");
		String stm="SELECT*FROM reservation WHERE buffetnumber=?";
		PreparedStatement sm1=conn.prepareStatement(stm);
		sm1.setInt(1,tableno);
		ResultSet bq=sm1.executeQuery();
		return !bq.next();
	}
	
	private void insertReservation(BookingDetails bk) throws SQLException
	{
		Connection conn=DriverManager.getConnection("jdbc:mysql://localhost:3306/userinfo","root","HarishShiva@07");
        	String query = "INSERT INTO reservation(client_name, email, mobno, buffetnumber, personscount) VALUES (?, ?, ?, ?, ?)";
        try
	{
	    PreparedStatement sm = conn.prepareStatement(query)
            sm.setString(1, bk.getName());
            sm.setString(2, bk.getEmail());
            sm.setString(3, bk.getMobno());
            sm.setInt(4, bk.getTableno());
            sm.setInt(5, bk.getMembers());
            sm.execute();
        } catch (Exception e)
	{
            e.printStackTrace(); // To Handle exception appropriately
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
