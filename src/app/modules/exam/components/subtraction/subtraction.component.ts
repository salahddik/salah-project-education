import { Component } from '@angular/core';
import { MathService } from '../../../../shared/service/MathService.service';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.css'], // Fixed typo: use 'styleUrls' instead of 'styleUrl'
})
export class SubtractionComponent {
  num1: number = 0;
  num2: number = 0;
  sum: number = 0; // Sum of subtraction result
  userInput: string = '';
  feedback: string = '';

  constructor(private mathService: MathService) {}

  generateAndSum(): void {
    // Generate random numbers for subtraction
    this.num1 = Math.floor(Math.random() * 100); // Random number between 0 and 99
    this.num2 = Math.floor(Math.random() * 100); // Random number between 0 and 99

    // Ensure num1 is greater than num2 for positive results
    if (this.num1 < this.num2) {
      const temp = this.num1;
      this.num1 = this.num2;
      this.num2 = temp;
    }

    // Perform subtraction
    this.sum = this.num1 - this.num2; // Subtraction operation

    // Update the temporary sum in the service
    this.mathService.updateSubSum(this.sum); // Call the service method to update temporary sum

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
