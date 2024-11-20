import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  input1 = '';
  input2 = '';

  // EventEmitter to send form data back to the parent
  @Output() formSubmitted = new EventEmitter<{
    input1: string;
    input2: string;
  }>();

  submitForm() {
    if (this.input1 && this.input2) {
      // Emit the form data
      this.formSubmitted.emit({ input1: this.input1, input2: this.input2 });
    } else {
      console.log('Form is not valid!');
    }
  }
}
