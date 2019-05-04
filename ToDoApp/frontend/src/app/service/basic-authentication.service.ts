import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { API_URL } from '../app.constants';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticatedUser'

@Injectable({
  providedIn: "root"
})
export class BasicAuthenticationService {
  constructor(private http: HttpClient) {}

  executeAuthenticationService(username, password) {
    let basicAuthHeaderString =
      "Basic " + window.btoa(username + ":" + password);

    let header = new HttpHeaders({ Authorization: basicAuthHeaderString });
    return this.http
      .get<AuthenticationBean>(
        `${API_URL}/basicauth`,
        { headers: header } //can also just use {headers} if variable is named as headers
      )
      .pipe(
        map(data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem("token", basicAuthHeaderString);
          return data;
        })
      );
    //console.log("Execute Hello World Bean Service")
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken(){
    return sessionStorage.getItem(TOKEN)
  }

  isUserLoggedin(){
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }

}

export class AuthenticationBean {
  constructor(public message: string) {}
}
