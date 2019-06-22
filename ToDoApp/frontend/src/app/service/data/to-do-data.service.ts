import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class ToDoDataService {

  constructor(private http:HttpClient) { }

  retrieveAllToDos(user:string){
    return this.http.get<Todo[]>(`${API_URL}/users/${user}/todos`);
  }

  deleteToDoDataService(user:string, id:number){
    return this.http.delete<Todo>(`${API_URL}/users/${user}/todos/${id}`)
  }

  updateToDoDataService(user:string, id: number, todo: Todo){
    return this.http.put<Todo>(`${API_URL}/users/${user}/todos/${id}`, todo)
  }

  getToDoDataService(user:string, id:number){
    return this.http.get<Todo>(`${API_URL}/users/${user}/todos/${id}`)
  }

  addToDoDataService(user:string, todo: Todo){
    return this.http.post<Todo>(`${API_URL}/users/${user}/todos`, todo)
  }

}
