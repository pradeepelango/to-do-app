package com.webservices.restfulwebservices;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ToDoResource {

	@Autowired
	private ToDoHardCodedService toDoHardCodedService;

	@GetMapping("/users/{username}/todos/{id}")
	public ToDo getToDo(@PathVariable String username, @PathVariable long id) {
		return toDoHardCodedService.findById(id);
	}

	@GetMapping("/users/{username}/todos")
	public List<ToDo> getAllToDos(@PathVariable String username) {
		return toDoHardCodedService.findAll();
	}

	@DeleteMapping("users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
		ToDo todo = toDoHardCodedService.deleteById(id);
		if (todo != null) {
			return ResponseEntity.noContent().build();
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@PutMapping("users/{username}/todos/{id}")
	public ResponseEntity<ToDo> updateToDo(@PathVariable String username, @PathVariable long id,
			@RequestBody ToDo todo) {
		ToDo todoUpdated = toDoHardCodedService.save(todo);
		return new ResponseEntity<>(todoUpdated, HttpStatus.OK);
	}
	
	@PostMapping("users/{username}/todos")
	public ResponseEntity<Void> addToDo(@PathVariable String username,@RequestBody ToDo todo){
		ToDo createdToDo = toDoHardCodedService.save(todo);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdToDo.getId()).toUri();
		return ResponseEntity.created(uri).build();
		
	}

}
