import { Component } from '@angular/core';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrl: './sum.component.css',
})
export class SumComponent {
  num1 = 0;
  num2 = 0;
  sum = 0;
  userInput = '';
  feedback = '';

  generateAndSum(): void {
    this.num1 = Math.floor(Math.random() * 100); // Random number between 0 and 99
    this.num2 = Math.floor(Math.random() * 100); // Random number between 0 and 99
    this.sum = this.num1 + this.num2; // Calculate the sum
    this.feedback = ''; // Reset feedback when new numbers are generated
    this.userInput = ''; // Clear the input field
  }

  checkAnswer(): void {
    if (parseInt(this.userInput) === this.sum) {
      this.feedback = 'Correct! Well done.';
    } else {
      this.feedback = 'Incorrect. Try again!';
    }
  }
}
