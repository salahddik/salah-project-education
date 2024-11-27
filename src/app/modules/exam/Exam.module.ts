import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamtRoutingModule } from './Exam.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { ExamComponent } from './container/Exam.component';
import { FormsModule } from '@angular/forms';
import { SumComponent } from './components/sum/sum.component';
import { DivisionComponent } from './components/division/division.component';
import { MultiplicationComponent } from './components/multiplication/multiplication.component';
import { SubtractionComponent } from './components/subtraction/subtraction.component'; // Import FormsModule

@NgModule({
  declarations: [
    ExamComponent,
    SumComponent,
    DivisionComponent,
    MultiplicationComponent,
    SubtractionComponent,
  ],
  imports: [CommonModule, ExamtRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
})
export class ExamModule {}
