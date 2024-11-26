import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-resultform',
  templateUrl: './resultform.component.html',
  styleUrls: ['./resultform.component.scss'],
})
export class ResultFormComponent {
  elementshtow = '';
  number = 8945;
  text = 'hello world';


  @Input() resultvariable: { input1: string; input2: string } | null = null;

  // ----------hadi bla signla

  // Renamed property to hold the value
  currentValue = 0;

  // Method to increase the value
  increaseValue() {
    this.currentValue += 1;
  }

  // Method to decrease the value
  decreaseValue() {
    this.currentValue -= 1;
  }

  // Method to reset the value
  resetValue() {
    this.currentValue = 0;
  }
  // ----------hadi b signla

  // Define a signal with an initial value
  counter = signal('0');

  // Method to increment the counter
  increment() {
    this.counter.set(this.counter() + '1');
  }

  // Method to decrement the counter
  decrement() {
    this.counter.set(this.counter().slice(0, -1));
  }

  // Method to reset the counter
  reset() {
    this.counter.set('0');
  }
}
