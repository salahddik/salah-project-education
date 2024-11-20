import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  // Form inputs
  input1 = '';
  input2 = '';

  // EventEmitter to send form data to the parent component
  @Output() formSubmitted = new EventEmitter<{
    input1: string;
    input2: string;
  }>();

  /**
   * Handles form submission
   * Emits form data if both inputs are valid
   */
  submitForm(): void {
    const isFormValid = this.input1 && this.input2;

    if (isFormValid) {
      this.formSubmitted.emit({ input1: this.input1, input2: this.input2 });
    } else {
      console.error('Form is not valid!');
    }
  }
}
