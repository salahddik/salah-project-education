import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './Result.component.html',
  styleUrls: ['./Result.component.scss'],
})
export class ResultComponent implements OnInit {
  users: any[] = []; // Store the fetched users here.

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch the data from the API.
    this.http.get<any[]>('http://localhost:3000/users').subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users:', error);
      },
    );
  }

  deleteUser(id: number): void {
    // Call the API to delete the user
    this.http.delete(`http://localhost:3000/users/${id}`).subscribe(
      () => {
        // Remove the user from the local list
        this.users = this.users.filter((user) => user.id !== id);
        console.log(`User with ID ${id} deleted successfully`);
      },
      (error) => {
        console.error(`Error deleting user with ID ${id}:`, error);
      },
    );
  }
}
