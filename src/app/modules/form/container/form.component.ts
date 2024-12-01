import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudapiService } from '../../../shared/service/crudapi.service';
import { Userdatajson } from '../../../shared/interface/crudinterfacedata';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  myForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private service: CrudapiService,
  ) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
          ),
        ],
      ], // This was missing a closing bracket for the email array
      address: ['', Validators.required],
      phone: [
        '',
        [Validators.required, Validators.pattern('^\\+?[0-9]{7,15}$')], // Regex for phone number
      ],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      const formData: Userdatajson = this.myForm.value;
      this.service.saveUserData(formData).subscribe({
        next: (response) => {
          console.log('Form data saved:', response);
          this.successMessage = 'Form submitted successfully!';
          this.errorMessage = '';
          this.myForm.reset();

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
    } else {
      this.errorMessage = 'Please fill out the form correctly.';
    }
  }
}
