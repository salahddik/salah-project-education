import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamtRoutingModule } from './Exam.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { ExamComponent } from './container/Exam.component';
import { StarPipe } from '../../shared/pipes/star.pipe';
import { MonnyPipe } from '../../shared/pipes/monny.pipe';
@NgModule({
  declarations: [ExamComponent, MonnyPipe, StarPipe],
  imports: [CommonModule, ExamtRoutingModule, ReactiveFormsModule],
  providers: [],
})
export class ExamModule {}
