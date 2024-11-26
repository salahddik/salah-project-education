import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamtRoutingModule } from './Exam.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { ExamComponent } from './container/Exam.component';

@NgModule({
  declarations: [ExamComponent],
  imports: [
    CommonModule,
    ExamtRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
  ],
})
export class ExamModule {}
