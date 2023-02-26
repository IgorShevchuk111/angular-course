import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

   contents = [
    'Binding Img', 'Event binding','2 Way binnding','Directive ngStyle','Dynamic ngClass',
    'Show an element using ngIf else'
  ]

  getTitleByi(i: number) {
    return this.contents[i]
  }
}
