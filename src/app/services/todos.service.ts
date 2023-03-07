import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  fetchTodos() {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
  }
}
