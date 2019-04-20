import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class ToDoDataService {

  constructor(private http:HttpClient) { }

  executeToDoDataService(user:string){
    return this.http.get<Todo[]>(`http://localhost:8080/users/${user}/todos`);
  }

  deleteToDoDataService(user:string, id:number){
    return this.http.delete<Todo>(`http://localhost:8080/users/${user}/todos/${id}`)
  }

}
