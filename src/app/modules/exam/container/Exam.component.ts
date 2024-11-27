import { Component } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './Exam.component.html',
  styleUrls: ['./Exam.component.scss'], // Ensure correct case
})
export class ExamComponent {
  number = 8945;
  text = 'hello world';
}
