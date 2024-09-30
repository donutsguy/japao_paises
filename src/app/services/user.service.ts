import { Injectable } from '@angular/core';
import { UserFormComponent } from '../pages/user-form/user-form.component';
import { Observable } from 'rxjs';
import { ApiResponse, User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private dialog: MatDialog, private http: HttpClient) { }

  url = 'http://localhost:3000/users/'

  openPopup() {
    this.dialog.open(UserFormComponent);
  }

  getUserById(id: string): Observable<ApiResponse<User>> {
    return this.http.get<ApiResponse<User>>(`${this.url}/${id}`);
  }

  createUser(user: User): Observable<ApiResponse<User>> {
    return this.http.post<ApiResponse<User>>(this.url, user);
  }

  updateUser(id: string, user: User): Observable<ApiResponse<User>> {
    return this.http.put<ApiResponse<User>>(`${this.url}/${id}`, user);
  }

  deleteUser(id: string): Observable<ApiResponse<User>> {
    return this.http.delete<ApiResponse<User>>(`${this.url}/${id}`);
  }
}
