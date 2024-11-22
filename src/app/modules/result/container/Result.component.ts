import { Component, OnInit } from '@angular/core';
import { CrudapiService } from '../../../shared/service/crudapi.service'; // Import the service
import { Userdatajson } from '../../../shared/interface/crudinterfacedata'; // Import the user interface
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./Result.component.scss'], // Ensure correct case
})
export class ResultComponent implements OnInit {
  users: Userdatajson[] = []; // Store the fetched users here.

  constructor(
    private crudApiService: CrudapiService,
    private router: Router,
  ) {}

  navigateToEdit(user: any): void {
    this.router.navigate(['/edit'], { queryParams: { id: user.id } });
    // Or use state for passing the entire user object
    // this.router.navigateByUrl('/edit', { state: { user } });
  }
  ngOnInit(): void {
    // Fetch the data using the service
    this.crudApiService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        console.log('Users fetched successfully:');
      },
      error: (error) => {
        console.error('Error fetching users:');
      },
      complete: () => {
        console.log('Fetching users complete.');
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
      complete: () => {
        console.log(`Deletion of user with ID ${id} complete.`);
      },
    });
  }
}
