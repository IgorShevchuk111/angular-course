import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  inputValue: string

  constructor() { }

  ngOnInit(): void {
  }

  onInputValue(event:any){
    this.inputValue =  event.target.value
  }

  onKeyup(event:any){
    this.inputValue =  event.target.value
  }

  onBluer(str: string){
    this.inputValue = str
  }

}
