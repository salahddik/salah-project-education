import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';  // Import HttpClient
import { Observable } from 'rxjs';  // Import Observable

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  // Submit form data to the JSON server
  onSubmit() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      this.saveUserData(formData).subscribe(response => {
        console.log('Form data saved:', response);
      });
    }
  }

  // Method to send form data to the JSON server
  saveUserData(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/users', data);
  }
}
