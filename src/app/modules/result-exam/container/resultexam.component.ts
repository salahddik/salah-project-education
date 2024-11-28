import { Component, OnInit } from '@angular/core';
import { MathService } from '../../../shared/service/MathService.service';

@Component({
  selector: 'app-resultexam',
  templateUrl: './resultexam.component.html',
  styleUrls: ['./resultexam.component.scss'],
})
export class ResultexamComponent implements OnInit {
  sum: number | null = null; // To store the final sum
  subSum: number | null = null; // To store the temporary sum
  divSum: number | null = null; // To store the temporary sum
  multiple: number | null = null; // To store the temporary sum
  constructor(private mathService: MathService) {}

  ngOnInit(): void {
    // Subscribe to the final sum observable
    this.mathService.sum$.subscribe((value) => {
      this.sum = value; // Update final sum when it changes
    });

    this.mathService.multi$.subscribe((value) => {
      this.multiple = value;
    });

    this.mathService.div$.subscribe((value) => {
      this.divSum = value;
    });
    // Subscribe to the temporary sum observable
    this.mathService.sub$.subscribe((value) => {
      this.subSum = value; // Update temporary sum when it changes
    });
  }
} // Closing the class
