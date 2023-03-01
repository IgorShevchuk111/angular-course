import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../post-form/post-form.component';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  search: string = ''
  searchField: string = 'title'

  now = new Date()

  str:  string = 'Hello world'

  n: number = Math.E
  number = 0.42
  

  obj = {
      a:1,
      b:{
        a:2,
        b:3,
        c:{
          a:4,
          b:5
          }
      }
    }

    posts = [
      {title: 'Beer', text: 'Самое лучшее пиво в мире'},
      {title: 'Bread', text: 'The best bread in the world'},
      {title: 'Javascript', text: 'The best language in the world'},
    ]

  constructor() { }


  ngOnInit(): void {
   
  }

  p: Promise<string> = new Promise<string>( resolve => {
    setInterval(() => {
      resolve('Promise Risolved')
    }, 5000);
  })

  date$: Observable<Date>= new Observable<Date>(obs =>  {
    setInterval(() => {
     obs.next(new Date)
    }, 1000);
  })

  

}
