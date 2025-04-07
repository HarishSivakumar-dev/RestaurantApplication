package com.harish.springService.RestaurantUI;

public class BookingDetails 
{
	
	private int tableno,members;
	private String name,email,mobno; 

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobno() {
		return mobno;
	}

	public void setMobno(String mobno) {
		this.mobno = mobno;
	}

	public int getTableno() {
		return tableno;
	}

	public void setTableno(int tableno) {
		this.tableno = tableno;
	}

	public int getMembers() {
		return members;
	}

	public void setMembers(int members) {
		this.members = members;
	}
	

}
