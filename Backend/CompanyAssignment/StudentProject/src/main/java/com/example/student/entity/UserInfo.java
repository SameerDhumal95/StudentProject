package com.example.student.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class UserInfo {
	
	private String username;
	private String password;
	private int marks = 80;
}