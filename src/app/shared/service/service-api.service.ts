import { Injectable } from '@angular/core'; // Injectable decorator makes this service available for dependency injection.
import { environment } from '../../../environments/environment'; // Import environment variables for flexibility between environments.
import { HttpClient } from '@angular/common/http'; // HttpClient is used to make HTTP requests.
import { Observable } from 'rxjs'; // Observable is used to handle asynchronous data streams.
import { Postsinterface } from '../interface/postsinterface'; // Importing the interface to define the structure of posts.

@Injectable({
  providedIn: 'root', // Ensures the service is provided at the root level and available throughout the application.
})
export class ServiceApiService {
  private apiUrl = environment.apiposts; // The API URL is retrieved from environment settings for maintainability.

  constructor(private http: HttpClient) {} // HttpClient is injected here to enable HTTP requests.

  // Fetches posts from the API as an Observable of an array of Postsinterface objects.
  getPosts(): Observable<Postsinterface[]> {
    return this.http.get<Postsinterface[]>(this.apiUrl); // Executes an HTTP GET request to the API endpoint.
  }
}
