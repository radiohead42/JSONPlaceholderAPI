import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export type ResourceType = 'posts' | 'users' | 'todos';
export type ResourceItem = Post | User | Todo;

@Injectable({ providedIn: 'root' })
export class JsonplaceholderService {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private readonly http: HttpClient) {}

  getPosts(limit = 5): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/posts`, {
      params: { _limit: limit },
    });
  }

  getUsers(limit = 5): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`, {
      params: { _limit: limit },
    });
  }

  getTodos(limit = 5): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.baseUrl}/todos`, {
      params: { _limit: limit },
    });
  }
}
