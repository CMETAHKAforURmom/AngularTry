import { Component } from '@angular/core';

export interface Todos{
  id:number
  title:string
  completed:boolean
  date?: any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitle = 'First time in Angular';

  public todos: Todos[] = [
      {id: 1, title: "Хачу пива", completed: false, date: new Date()},
      {id: 2, title: "Хачу чипсеков", completed: true, date: new Date()},
      {id: 3, title: "Хачу сухариков", completed: false, date: new Date()}
      ]

      onToggle(id: number){
      const idx = this.todos.findIndex(t => t.id === id)
      this.todos[idx].completed = !this.todos[idx].completed
      }
    }

