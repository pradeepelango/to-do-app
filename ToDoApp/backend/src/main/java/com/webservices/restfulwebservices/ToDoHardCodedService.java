package com.webservices.restfulwebservices;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ToDoHardCodedService {

	private static List<ToDo> toDoList = new ArrayList<>();
	private static int idCounter = 0;

	static {
		toDoList.add(new ToDo(++idCounter, "Pradeep", "Finish the app", new Date(), false));
		toDoList.add(new ToDo(++idCounter, "Pradeep", "Finish the book", new Date(), false));
	}

	public List<ToDo> findAll() {
		return toDoList;
	}

	public ToDo deleteById(long id) {
		ToDo todo = findById(id);
		if(todo == null) {
			return null;
		}
		toDoList.remove(todo);
		return todo;
	}

	private ToDo findById(long id) {
		for (ToDo todo : toDoList) {
			if (todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}
}
