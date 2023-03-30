package com.example.student.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "student")
@NoArgsConstructor
@Getter
@Setter
public class Student {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int Id;
	
	@Column(name = "Roll_No")
	private String RollNo;
	
	@Column(name = "Student_Name",nullable = false, length=100)
	private String Name;
	
	
	private int Marks;
	
	@Column()
	@NotEmpty(message = "Field must not be null")
	String Username;
	
	@Column
	@NotEmpty(message = "Field must not be null")
	@Size(min = 4,max = 10,message = "Password must be more than 4 and less than 10 charcters")
	String Password;
	
	
}
