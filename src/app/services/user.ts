import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/user.model';

@Service()
export class User {

  private http = inject(HttpClient);

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.apiUrl);
  }

  getUserById(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.apiUrl}/${id}`);
  }

  createUser(user: Omit<IUser, 'id'>): Observable<IUser> {
    return this.http.post<IUser>(this.apiUrl, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  updateUser(id: number, user: Partial<IUser>): Observable<IUser> {
    return this.http.put<IUser>(`${this.apiUrl}/${id}`, user);
  }

}
