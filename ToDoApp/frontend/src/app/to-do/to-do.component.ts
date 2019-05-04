import { Component, OnInit } from "@angular/core";
import { ToDoDataService } from "../service/data/to-do-data.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Todo } from "../list-todos/list-todos.component";

@Component({
  selector: "app-to-do",
  templateUrl: "./to-do.component.html",
  styleUrls: ["./to-do.component.css"]
})
export class ToDoComponent implements OnInit {
  id: number;
  todo: Todo;

  constructor(
    private toDoDataService: ToDoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.todo = new Todo(this.id, "", "", false, new Date());
    console.log(this.todo.description)
    if (this.todo.id != -1) {
      this.toDoDataService
        .getToDoDataService("pradeep", this.id)
        .subscribe(data => (this.todo = data));
    }
  }

  saveToDo(todo: Todo) {
    if (this.todo.id === -1) {
      this.toDoDataService
        .addToDoDataService("pradeep", this.todo)
        .subscribe(response => {
          console.log(response);
          this.router.navigate(["todos"]);
        });
    } else {
      this.toDoDataService
        .updateToDoDataService("pradeep", this.id, this.todo)
        .subscribe(response => {
          console.log(response);
          this.router.navigate(["todos"]);
        });
    }
  }
}
