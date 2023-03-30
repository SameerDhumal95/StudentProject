package com.example.student.studentRepo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.student.entity.Student;

public interface StudentRepo extends JpaRepository<Student, Integer>{

	@Query("SELECT s FROM Student s WHERE s.Username = ?1 and s.Password = ?2")
	public Student findByUsernameAndPassword(String username,String password);
}
