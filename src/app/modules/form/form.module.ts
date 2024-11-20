import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRoutingModule } from './from.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './container/form.component';
import { provideHttpClient } from '@angular/common/http';
import { CrudapiService } from '../../shared/service/crudapi.service';
@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, FormRoutingModule, ReactiveFormsModule],
  providers: [
    CrudapiService,
    provideHttpClient(), // Providing the HttpClient using hadi badaltha dir deprecated()
  ],
})
export class FormModule {}
