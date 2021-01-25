import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Todos} from '../app.component';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css', '../app.component.css']
})
export class TodosComponent implements OnInit {

  @Input() todos: Todos[] = []
  @Output() onToggle = new EventEmitter<number>()

  constructor() { }

  ngOnInit() {
  }

  onChange(id: number){
  this.onToggle.emit(id)
  }
}
