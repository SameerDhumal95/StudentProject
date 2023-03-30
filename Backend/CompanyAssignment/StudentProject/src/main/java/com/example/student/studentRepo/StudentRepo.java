package com.example.student.studentRepo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.student.entity.Student;

public interface StudentRepo extends JpaRepository<Student, Integer>{

	@Query("SELECT s FROM Student s WHERE s.Username = ?1 and s.Password = ?2")
	public Student findByUsernameAndPassword(String username,String password);
	
	
	@Query("SELECT s FROM Student s WHERE s.Marks >= 80")
	public List<Student> findMaxMarksStudent();
}
