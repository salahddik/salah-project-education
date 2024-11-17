import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { Observable } from 'rxjs'; // Import Observable
import { _Userdatajson } from '../../../shared/interface/datajsoninterface'; // Importing the interface to define the structure of posts.
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  myForm: FormGroup;
  successMessage = ''; // Property to hold the success message
  errorMessage = ''; // Property to hold error messages

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  // Submit form data to the JSON server
  onSubmit() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      this.saveUserData(formData).subscribe({
        next: (response) => {
          console.log('Form data saved:', response);
          this.successMessage = 'Form submitted successfully!';
          this.errorMessage = '';
          this.myForm.reset();

          // Clear success message after 3 seconds (optional)
          setTimeout(() => {
            this.successMessage = '';
          }, 3000);
        },
        error: (err) => {
          console.error('Error saving form data:', err);
          this.errorMessage = 'Failed to submit the form. Please try again.';
        },
      });
    }
  }

  // Method to send form data to the JSON server
  saveUserData(data: _Userdatajson): Observable<_Userdatajson> {
    return this.http.post('http://localhost:3000/users', data);
  }
}
