import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoAddFormComponent } from './todo-add-form/todo-add-form.component';
import { FormsModule } from '@angular/forms';
import { TodoFilterPipe } from './shares/pipe_services';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoAddFormComponent,
    TodoFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
