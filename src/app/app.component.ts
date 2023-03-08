import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // isActive = false

  constructor(
    private authService: AuthService
  ){}
// loginn
  login() {
    this.authService.logIn(true)
  }
  // loguot
  logout() {
    this.authService.logOut(false)
  }
// active nav link (login,logout)
  activateNavItem(itemId: string) {
    const navItems = document.querySelectorAll('span');
    navItems.forEach(item => {
      if (item.id === itemId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  // navItems = [
  //   { name: 'Nav item 1', isActive: false },
  //   { name: 'Nav item 2', isActive: false },
  //   { name: 'Nav item 3', isActive: false }
  // ];

  // activateNavItemm(selectedItem: {}) {
  //   console.log('sel',selectedItem);
    
  //   this.navItems.forEach(item => item.isActive = (item === selectedItem));
  // }
}