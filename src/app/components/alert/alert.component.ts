import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

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
