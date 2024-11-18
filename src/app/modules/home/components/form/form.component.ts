import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Output() dataUpdate = new EventEmitter<string>();

  // Method to send the text to the parent component
  sendText(inputElement: HTMLInputElement) {
    this.dataUpdate.emit(inputElement.value); // Emit the value of the input field
  }
}
