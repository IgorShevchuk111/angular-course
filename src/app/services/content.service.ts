import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

   contents = [
    'Binding Img', 'Event binding','2 Way binnding'
  ]

  getTitleByi(i: number) {
    return this.contents[i]
  }
}