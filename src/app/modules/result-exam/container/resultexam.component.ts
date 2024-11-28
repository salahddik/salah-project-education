import { Component, OnInit } from '@angular/core';
import { MathService } from '../../../shared/service/MathService.service';

@Component({
  selector: 'app-resultexam',
  templateUrl: './resultexam.component.html',
  styleUrls: ['./resultexam.component.scss'],
})
export class ResultexamComponent implements OnInit {
  sum: number | null = null;

  constructor(private mathService: MathService) {}

  ngOnInit(): void {
    // Subscribe to the sum observable
    this.mathService.sum$.subscribe((value) => {
      this.sum = value;
    });
  } // Closing ngOnInit() method

} // Closing the class
