import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudapiService } from '../../../shared/service/crudapi.service'; // Import the service
import { Userdatajson } from '../../../shared/interface/crudinterfacedata'; // Import the interface

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
    private service: CrudapiService,
  ) {
    // Initialize the form with FormBuilder
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  // Submit form data to the JSON server
  onSubmit() {
    if (this.myForm.valid) {
      const formData: Userdatajson = this.myForm.value; // Type casting for clarity
      this.service.saveUserData(formData).subscribe({
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
        complete: () => {
          console.log('Form submission completed.');
        },
      });
    }
  }
}
