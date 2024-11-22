import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudapiService } from '../../../shared/service/crudapi.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-result',
  templateUrl: './Edit.component.html',
  styleUrls: ['./Edit.component.scss'], // Ensure correct case
})
export class EditComponent implements OnInit {
  editForm: FormGroup;
  isLoading = true;
  successMessage = ''; // To display success message

  constructor(
    private route: ActivatedRoute,
    private userService: CrudapiService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.editForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.queryParams['id']; // Get ID from query params
    if (id) {
      this.userService.getUserById(id).subscribe(
        (users) => {
          const user = users[0]; // JSON Server returns an array
          if (user) {
            this.editForm.patchValue(user);
          } else {
            console.error('User not found');
            this.router.navigate(['/']); // Redirect if user not found
          }
          this.isLoading = false;
        },
        (error) => {
          console.error('Error fetching user:', error);
          this.isLoading = false;
        }
      );
    } else {
      console.error('No ID provided in query params');
      this.router.navigate(['/']);
    }
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      this.userService.updateUser(this.editForm.value).subscribe(
        (response) => {
          this.successMessage = 'Save successful!';
          setTimeout(() => {
            this.router.navigate(['/result']); // Redirect after 2 seconds
          }, 2000);
        },
        (error) => {
          console.error('Error updating user:', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }
}