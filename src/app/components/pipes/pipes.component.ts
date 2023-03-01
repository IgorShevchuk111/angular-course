import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
