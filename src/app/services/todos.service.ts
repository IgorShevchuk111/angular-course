import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Todo {
  title: string,
  completed: boolean,
  id?: number
}


@Injectable({
  providedIn: 'root'
})
export class TodosService {
 
  constructor(
    private http: HttpClient
  ) { }
// http get
  fetchTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
  }
  // http post
  addTodo(todo: Todo): Observable<Todo>{
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos',todo)
  }
// http delete
removeTodo(id?:number): Observable<void>{
  return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)
}
// http  put
  completeTodo(id?: number): Observable<Todo>{
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`,{
      completed: true
    })
  }
}
