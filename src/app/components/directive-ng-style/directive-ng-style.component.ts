import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ng-style',
  templateUrl: './directive-ng-style.component.html',
  styleUrls: ['./directive-ng-style.component.scss']
})
export class DirectiveNgStyleComponent implements OnInit {

  toggle = false

  constructor() { }

  ngOnInit(): void {
  }

}
