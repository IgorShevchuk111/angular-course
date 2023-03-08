import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  user = false
  
// login
  logIn(user: boolean){
    this.user = user
  }
  // logout
  logOut(user: boolean){
    this.user = user
  }
// isAuthenticated
  isAuthenticated(): boolean {
    if (this.user) {
      return true
    }
    return false;
  }
}
