package com.webservices.restfulwebservices;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ToDoResource {

	@Autowired
	private ToDoHardCodedService toDoHardCodedService;
	
	@GetMapping("/users/{username}/todos")
	public List<ToDo> getAllToDos(@PathVariable String username) {
		return toDoHardCodedService.findAll();
	}
	
	@DeleteMapping("users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id){
		ToDo todo = toDoHardCodedService.deleteById(id);
		if (todo!=null) {
			return ResponseEntity.noContent().build();
		}
		else return ResponseEntity.notFound().build();
	}

}
