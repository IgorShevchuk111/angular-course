import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-created',
  templateUrl: './alert-created.component.html',
  styleUrls: ['./alert-created.component.scss']
})
export class AlertCreatedComponent implements OnInit {

  @Input() message!: string;
  alertVisible = false;

  constructor() { }

  ngOnInit(): void {
    // Show the alert for 2 seconds
    this.alertVisible = true;
    setTimeout(() => {
      this.alertVisible = false;
    },2000);
  }
}
