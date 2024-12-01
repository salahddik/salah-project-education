import { Component } from '@angular/core';
import { MathService } from '../../../../shared/service/MathService.service';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.css'], // Fixed typo (styleUrls instead of styleUrl)
})
export class SumComponent {
  num1: number = 0;
  num2: number = 0;
  sum: number = 0;
  userInput: string = '';
  feedback: string = '';
  isDisabled: boolean = false;

  constructor(private mathService: MathService) {}

  generateAndSum(): void {
    this.num1 = Math.floor(Math.random() * 100);
    this.num2 = Math.floor(Math.random() * 100);
    this.sum = this.num1 + this.num2;
    this.feedback = '';
    this.userInput = '';
    this.isDisabled = false;

    // Update the sum in the service
    this.mathService.updateSum(this.sum);
  }

  checkAnswer(): void {
    if (parseInt(this.userInput, 10) === this.sum) {
      this.feedback = 'Correct! Well done.';
      this.isDisabled = true;
    } else {
      this.feedback = 'Incorrect. Try again!';
    }
  }
}
