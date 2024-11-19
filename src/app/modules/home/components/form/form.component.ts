import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Output() textinfrom = new EventEmitter<string>();

  functionbutton(value: string) {
    this.textinfrom.emit(value);
  }
}
