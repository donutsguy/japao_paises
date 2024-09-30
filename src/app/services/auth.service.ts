import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { User } from '../models/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = "http://localhost:8080/user/"

  constructor(private httpClient: HttpClient) { }

  login(login: Login): Observable<Login> {
    return this.httpClient.post<Login>(this.url + "login", login)
  }

  getCurrentUser(): Observable<User> {
    return this.httpClient.get<User>(this.url + "profile")
  }

  logout(): Observable<string> {
    return this.httpClient.post(this.url + "logout", '', { responseType: 'text' })
  }

}
