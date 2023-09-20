import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Guid } from "guid-typescript";
import { Todo } from "src/models/todo.model";


@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})


export class AppComponent {
todos: Todo[] = []
  title: any;


onSubmit(form: NgForm){
const inputValue = form.value.title;
if (inputValue.length >= 4 && inputValue.length <= 200 && /^[a-zA-Z0-9\s]*$/.test(inputValue)) {
    const todo = new Todo(Guid.create(), inputValue, false);
    this.todos.push(todo);
    form.resetForm();
  } else {
    console.log('Input does not meet requirements.');
  }
}


onComplete(id: Guid){
let todo = this.todos.filter(x=> x.id === id)[0];
todo.isComplete = true;
}


onDelete(id: Guid){
let todo = this.todos.filter(x=> x.id === id)[0];
let index = this.todos.indexOf(todo,0);
if(index > -1){
this.todos.splice(index,1);
}
}
}