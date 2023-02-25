import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-img',
  templateUrl: './binding-img.component.html',
  styleUrls: ['./binding-img.component.scss']
})
export class BindingImgComponent implements OnInit {

  img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
    }, 4000);
  }

}
