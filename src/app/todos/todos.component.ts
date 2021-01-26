import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {TodosService} from '../shares/todo_services';


@Component({
  selector: 'app-todo',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css', '../app.component.css']
})
export class TodosComponent implements OnInit {

  public loading: boolean = true;

  constructor(public todosService: TodosService) { }

  ngOnInit() {
  this.todosService.fetchTodos().subscribe(() => {
  this.loading = false
  })
  }

  onChange(id: number){
  this.todosService.onToggle(id)
  }

  removeTodo(id: number){
  this.todosService.removeTodo(id);
  }

  filterStart(){
    
  }
}
