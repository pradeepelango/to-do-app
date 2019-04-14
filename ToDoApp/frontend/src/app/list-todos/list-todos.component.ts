import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list-todos",
  templateUrl: "./list-todos.component.html",
  styleUrls: ["./list-todos.component.css"]
})
export class ListTodosComponent implements OnInit {
  todos = [
    new Todo(1, 'Study', false, new Date()),
    new Todo(2, 'Work', false, new Date()),
    new Todo(3, 'Play', false, new Date())
    // { id: 1, description: "Study" },
    // { id: 2, description: "Work" },
    // { id: 3, description: "Play" }
  ];
  todo = {
    id: 1,
    description: "Learn to dance"
  };
  constructor() {}

  ngOnInit() {}
}
export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}
