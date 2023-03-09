import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {

  user = 'logout'

  constructor(
    private authService: AuthService
  ){}
  ngOnInit(): void {
    this.activateNavItem()
  }
// loginn
  login() {
    this.user = 'login'
    this.authService.logIn(true)
  }
  // loguot
  logout() {
    this.user = 'logout'
    this.authService.logOut(false)
  }
// active nav link  (login,logout)
  activateNavItem() {
    const navItems = document.querySelectorAll('.login-logout');
    navItems.forEach(item => {
      if (item.id === this.user) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

// active nav link 2
  // navItems = [
  //   { name: 'Nav item 1', isActive: false },
  //   { name: 'Nav item 2', isActive: false },
  //   { name: 'Nav item 3', isActive: false }
  // ];

  // activateNavItemm(selectedItem: {}) {
  //   console.log('sel',selectedItem);
    
  //   this.navItems.forEach(item => item.isActive = (item === selectedItem));
    
  // }


  // active nav link 3
  // navItems = [
  //   { name: 'Nav-1', id: 1 },
  //   { name: 'Nav-2', id: 2 },
  //   { name: 'Nav-3', id: 3 }
  // ];

  //                                 // activeItem = this.navItems[0];
  // activeItem: any

  // setActiveItem(item:any) {
    
  //   this.activeItem = item;
  // }

}