import { Component, Input, OnInit } from '@angular/core';
import { Todos, TodosService } from '../shares/todo_services';

@Component({
  selector: 'app-todo-add-form',
  templateUrl: './todo-add-form.component.html',
  styleUrls: ['./todo-add-form.component.css']
})
export class TodoAddFormComponent implements OnInit {

title: string = ''

  constructor(public todo_services: TodosService) { }

  onClick(){
    const todo : Todos = {
      id: Date.now(),
      title: this.title,
      completed: false,
      date: new Date() 
    }

    this.todo_services.addTodo(todo)
    
  }

  ngOnInit(): void {
  }

}
