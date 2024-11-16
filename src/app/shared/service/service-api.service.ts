import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Postsinterface } from '../interface/postsinterface';

@Injectable({
  providedIn: 'root',
})
export class ServiceApiService {
  private apiUrl = environment.apiposts;

  constructor(private http: HttpClient) {}

  // Method to fetch posts
  getPosts(): Observable<Postsinterface[]> {
    return this.http.get<Postsinterface[]>(this.apiUrl);
  }
}
