import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HardcodedAuthenticationService {
  constructor() {}

  authenticate(username, password) {
    //console.log('before ' + this.isUserLoggedin());
    if (username === "pradeep" && password === "test") {
      sessionStorage.setItem('authenticatedUser',username);
      //console.log('after ' + this.isUserLoggedin());
      return true;
    }
    return false;
  }

  isUserLoggedin(){
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser')
  }
}
