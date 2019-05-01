import { Component, OnInit } from "@angular/core";
import { ToDoDataService } from "../service/data/to-do-data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-list-todos",
  templateUrl: "./list-todos.component.html",
  styleUrls: ["./list-todos.component.css"]
})
export class ListTodosComponent implements OnInit {
  // todos = [
  //   new Todo(1, 'pradeep', 'Study', false, new Date()),
  //   new Todo(2, 'pradeep','Work', false, new Date()),
  //   new Todo(3, 'pradeep','Play', false, new Date())
  // ];
  // todo = {
  //   id: 1,
  //   description: "Learn to dance"
  // };
  toDosFromService: Todo[];
  name = "pradeep";
  deleteMessage: string;
  updateMessage: string;

  constructor(
    private toDoDataService: ToDoDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getToDosFromService();
  }

  getToDosFromService() {
    this.toDoDataService
      .executeToDoDataService(this.name)
      .subscribe(response => {
        console.log(response);
        this.toDosFromService = response;
      });
  }

  deleteToDoFromService(id: number) {
    this.toDoDataService
      .deleteToDoDataService("pradeep", id)
      .subscribe(response => {
        console.log(response);
        this.deleteMessage = `Delete of ${id} successful!`;
        this.getToDosFromService();
      });
  }

  updateToDo(id: number){
    this.router.navigate(['todos',id])
  }

  addToDo(){
    this.router.navigate(['todos',-1])
  }

}

export class Todo {
  constructor(
    public id: number,
    public name: String,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}
