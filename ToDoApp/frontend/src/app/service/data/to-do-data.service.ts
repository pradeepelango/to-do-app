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

  updateToDoDataService(user:string, id: number, todo: Todo){
    return this.http.put<Todo>(`http://localhost:8080/users/${user}/todos/${id}`, todo)
  }

  getToDoDataService(user:string, id:number){
    return this.http.get<Todo>(`http://localhost:8080/users/${user}/todos/${id}`)
  }

  addToDoDataService(user:string, todo: Todo){
    return this.http.post<Todo>(`http://localhost:8080/users/${user}/todos`, todo)
  }

}
