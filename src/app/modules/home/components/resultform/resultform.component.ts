import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resultform',
  templateUrl: './resultform.component.html',
  styleUrls: ['./resultform.component.scss'],
})
export class ResultFormComponent {
  elementsh2 = 'titite get text from input';

  buttonfunction(newInput: string) {
    this.elementsh2 = newInput; // Access the value of the input element
  }

  elementshtow = 'titite with tow yay data binding';
  buttonfunctiontow(newInput: string) {
    this.elementsh2 = newInput; // Access the value of the input element
  }
  @Input() resultvariable: { input1: string; input2: string } | null = null;
  amount = 123.45;
  company = 'acme corporation';
  purchasedOn = '2024-07-08';
}
