import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  homevariable: { input1: string; input2: string } | null = null;

  // Method to handle data received from FormComponent
  handleFormSubmit(data: { input1: string; input2: string }) {
    this.homevariable = data; // Update homevariable with data from FormComponent
  }
}
