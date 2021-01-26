import { Pipe, PipeTransform } from "@angular/core";
import { Todos } from "./todo_services";

@Pipe({
    name: 'todosFilter'
})
export class TodoFilterPipe implements PipeTransform{
    transform(todos : Todos[], search = '') : Todos[] {
        if(!search.trim()){
            return todos
        }
        return todos.filter(todo =>
            {return todo.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
            })
    }

}