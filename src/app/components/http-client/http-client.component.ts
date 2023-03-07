import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Todo, TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent implements OnInit {

  loading = false
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
    this.loading = true
    this.todosService.fetchTodos()
    .pipe(delay(1000))
      .subscribe(obs => {
        this.todos = obs
        this.loading = false
      })
  }
  // http post
  addTodo() {
    if (!this.title.trim()) {
      return
    } else {
      const newTodo = {
        title: this.title,
        completed: false,
      }
      this.todosService.addTodo(newTodo)
        .subscribe(todo => {
          this.todos.unshift(todo)
        })
      this.title = ''
    }
  }
  // http delete
  removeTodo(id?: number) {
    this.todosService.removeTodo(id)
      .subscribe((s) => {
        this.todos = this.todos.filter(t => t.id !== id)
      })
  }
  // http put
  completeTodo(id?: number) {
    this.todosService.completeTodo(id)
      .subscribe(todo => {
        const todoIndex = this.todos.findIndex(t => t.id === todo.id);
        if (todoIndex !== -1) {
          this.todos[todoIndex].completed = true;
        }
      })
  }

}
