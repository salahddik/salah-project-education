import { Component, OnInit } from '@angular/core';
import { CrudapiService } from '../../../shared/service/crudapi.service'; // Import the service
import { Userdatajson } from '../../../shared/interface/crudinterfacedata'; // Import the user interface

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./Result.component.scss'], // Ensure correct case
})
export class ResultComponent implements OnInit {
  users: Userdatajson[] = []; // Store the fetched users here.
  editingUserId: number | null = null; // Track the user currently being edited

  constructor(private crudApiService: CrudapiService) {}

  ngOnInit(): void {
    // Fetch the data using the service
    this.crudApiService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        console.log('Users fetched successfully:');
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      },
      complete: () => {
        console.log('Fetching users complete.');
      },
    });
  }

  toggleEdit(user: Userdatajson): void {
    if (this.editingUserId === user.id) {
      // If the same user is clicked, save the changes and stop editing
      this.saveUser(user);
    } else {
      // Set the user as the one being edited
      this.editingUserId = user.id;
    }
  }

  saveUser(user: Userdatajson): void {
    // Save the user (update the user in the database or local state)
    this.crudApiService.updateUser(user).subscribe({
      next: (updatedUser) => {
        const index = this.users.findIndex((u) => u.id === updatedUser.id);
        if (index !== -1) {
          this.users[index] = updatedUser; // Update the user in the list
        }
        this.editingUserId = null; // Stop editing
        console.log('User updated successfully');
      },
      error: (error) => {
        console.error('Error updating user:', error);
      },
    });
  }

  deleteUser(id: number): void {
    // Call the service to delete the user
    this.crudApiService.deleteUser(id).subscribe({
      next: () => {
        // Remove the user from the local list
        this.users = this.users.filter((user) => user.id !== id);
        console.log(`User with ID ${id} deleted successfully`);
      },
      error: (error) => {
        console.error(`Error deleting user with ID ${id}:`, error);
      },
    });
  }
}
