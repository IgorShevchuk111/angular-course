import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-ng-class',
  templateUrl: './dynamic-ng-class.component.html',
  styleUrls: ['./dynamic-ng-class.component.scss']
})
export class DynamicNgClassComponent implements OnInit {

  toggle = false

  constructor() { }

  ngOnInit(): void {
  }

}
