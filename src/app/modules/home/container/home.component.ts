import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // Declare currentItem property
  currentItem: any;

  // Add this method to handle the emitted data from the child component
  updateText(data: any): void {
    console.log('Received data from app-form:', data);
    this.currentItem = data;  // Store the received data in currentItem
  }
}
