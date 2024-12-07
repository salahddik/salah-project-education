import { Component, EventEmitter, Output } from '@angular/core';
import { Perssoninterfacedata } from '../../../../shared/interface/perssoninterfacedata';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  // Form inputs
  person: { name: string; age: string } = { name: '', age: '' };
  // EventEmitter to send form data to the parent component
  @Output() formSubmitted = new EventEmitter<Perssoninterfacedata>();

  /**
   * Handles form submission
   * Emits form data if both inputs are valid
   */
  submitForm(): void {
    const isFormValid = this.person.name && this.person.age;
    const person: Perssoninterfacedata = {
      input1: this.person.name,
      input2: this.person.age,
    };

    if (isFormValid) {
      this.formSubmitted.emit(person);
    } else {
      console.error('Form is not valid!');
    }
  }
}
