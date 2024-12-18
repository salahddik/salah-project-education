import { Component } from '@angular/core';
import { MathService } from '../../../../shared/service/MathService.service';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrl: './multiplication.component.css',
})
export class MultiplicationComponent {
  num1: number = 0;
  num2: number = 0;

  sum: number = 0; // Ensured sum is a number type
  userInput: string = '';
  feedback: string = '';

  constructor(private mathService: MathService) {}

  generateAndSum(): void {
    // Generate random numbers
    this.num1 = Math.floor(Math.random() * 100); // Random number between 0 and 99
    this.num2 = Math.floor(Math.random() * 100); // Random number between 0 and 99

    // Prevent division by zero
    while (this.num2 === 0) {
      this.num2 = Math.floor(Math.random() * 100); // Ensure num2 is not zero
    }

    // Perform integer division by truncating the result
    this.sum = Math.trunc(this.num1 * this.num2); // Truncate the result to an integer
    console.log(this.sum); // Log the result in the console

    this.mathService.updatemulti(this.sum); // Call the service method to update temporary sum

    // Reset feedback and input field
    this.feedback = '';
    this.userInput = '';
  }

  checkAnswer(): void {
    const userAnswer = parseInt(this.userInput, 10); // Parse user input as an integer

    if (isNaN(userAnswer)) {
      this.feedback = 'Please enter a valid number.'; // Handle non-numeric input
      return;
    }

    // Check if the answer is correct
    if (userAnswer === this.sum) {
      this.feedback = 'Correct! Well done.';
    } else {
      this.feedback = `Incorrect. The correct answer is ${this.sum}. Try again!`;
    }
  }
}
