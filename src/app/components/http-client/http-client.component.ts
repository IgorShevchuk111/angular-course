import { Component, OnInit } from '@angular/core';
import { Todo, TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent implements OnInit {

  todos: Todo[] = []
  title = ''

  constructor(
    private todosService: TodosService
  ) { }

  ngOnInit(): void {
    this.getTodos()
  }
// http get
  getTodos() {
   this.todosService.fetchTodos()
   .subscribe(obs =>{
    this.todos = obs
   })
    }
// http post
addTodo() {
  if (!this.title.trim()) {
    return
  } else{
    const newTodo = {
      title: this.title,
      completed: false,
    }
    this.todosService.addTodo(newTodo)
    .subscribe(todo =>{
      this.todos.unshift(todo)
    })
    this.title = ''
  }
  }
// http delete
    removeTodo(id: number) {
    this.todosService.removeTodo(id)
    .subscribe(()  => {
      this.todos = this.todos.filter( t => t.id !== id)
    })
      }

}
