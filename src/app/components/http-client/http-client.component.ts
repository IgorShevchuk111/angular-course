import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Todo, TodosService } from 'src/app/services/todos.service';
import {MatDialog} from '@angular/material/dialog';
import { ModalDeletedComponent } from '../modal-deleted/modal-deleted.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent implements OnInit {
  alertMessage = '';
  loading = false
  todos: Todo[] = []
  title = ''
  constructor(
    private todosService: TodosService,
    private matDialog: MatDialog,
    private snackBar: MatSnackBar
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
          this.alertMessage = 'Past added !' 
          this.title = '';
        });
        setTimeout(() => {
          this.alertMessage = '';
        }, 2000);
    }
  }
  // http delete
  removeTodo(id?: number) {
    this.todosService.removeTodo(id)
      .subscribe((s) => {
        this.todos = this.todos.filter(t => t.id !== id)
        this.openModal()
      })
  }
  // http put
  completeTodo(id?: number) {
    this.todosService.completeTodo(id)
      .subscribe(todo => {
        const todoIndex = this.todos.findIndex(t => t.id === todo.id);
        if (todoIndex !== -1) {
          this.todos[todoIndex].completed = true;
          this.completedSnackBar()
        }
      })
  }
// MatDialog window
  openModal() {
    const dialogRef = this.matDialog.open(ModalDeletedComponent, {
      width: '200px',
      position: {
        top: '5%',
        left: '80%'
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
// Snack-bar Material
  completedSnackBar() {
    this.snackBar.open('completed!', 'Close', {
      duration: 1000,
    });
  }

}
