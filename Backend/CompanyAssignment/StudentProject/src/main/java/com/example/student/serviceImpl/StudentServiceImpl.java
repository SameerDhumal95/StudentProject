package com.example.student.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.student.entity.Student;
import com.example.student.service.StudentService;
import com.example.student.studentRepo.StudentRepo;

@Service
public class StudentServiceImpl implements StudentService{

	@Autowired
	private StudentRepo studentRepo;

	@Override
	public List<Student> getStudents() {
		List<Student> findAll = this.studentRepo.findAll();
		return findAll;
	}

	@Override
	public Student createStudent(Student s) {
		Student student = this.studentRepo.save(s);
		return student;
	}

	@Override
	public Student getByUsernameAndPassword(String username,String password) {
		return this.studentRepo.findByUsernameAndPassword(username,password);
	}

	@Override
	public List<Student> getStudentsMaxMarks() {
		List<Student> students = this.studentRepo.findMaxMarksStudent();
		return students;
	} 

	
}
