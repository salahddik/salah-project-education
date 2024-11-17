import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRoutingModule } from './from.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './container/form.component';

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, FormRoutingModule, ReactiveFormsModule],
})
export class FormModule {}
