import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators'

export interface Todos{
  id:number
  title:string
  completed:boolean
  date?: any
}

@Injectable({providedIn: 'root'})
export class TodosService{

      public todos: Todos[] = []

      constructor(private http : HttpClient){}

            fetchTodos(): Observable<Todos[]>{
            return this.http.get<Todos[]>("https://jsonplaceholder.typicode.com/todos?_limit=4")
            .pipe(tap(todos => this.todos = todos))

            }


      onToggle(id: number){
      const idx = this.todos.findIndex(t => t.id === id)
      this.todos[idx].completed = !this.todos[idx].completed
      }

      removeTodo(id: number){
      this.todos = this.todos.filter(t => t.id !== id)
      }

      addTodo(todo: Todos){
            this.todos.push(todo)
      }

      

}
