import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Userdatajson } from '../interface/crudinterfacedata'; // Ensure the path is correct
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CrudapiService {
  private apiUrl: string = environment.apicrud;

  constructor(private http: HttpClient) {}

  /**
   * Save user data to the API
   */
  saveUserData(data: Userdatajson): Observable<Userdatajson> {
    return this.http.post<Userdatajson>(this.apiUrl, data);
  }

  /**
   * Fetch all users from the API
   */
  getUsers(): Observable<Userdatajson[]> {
    return this.http.get<Userdatajson[]>(this.apiUrl);
  }

  /**
   * Delete a user by ID
   */
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  /**
   * Fetch a single user by ID
   */
  getUserById(id: number): Observable<Userdatajson[]> {
    return this.http.get<Userdatajson[]>(`${this.apiUrl}?id=${id}`);
  }

  /**
   * Update a user's data
   */
  updateUser(user: Userdatajson): Observable<Userdatajson> {
    return this.http.put<Userdatajson>(`${this.apiUrl}/${user.id}`, user);
  }
}
