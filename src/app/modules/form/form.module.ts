import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRoutingModule } from './from.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './container/form.component';
import { provideHttpClient } from '@angular/common/http';
import { CrudapiService } from '../../shared/service/crudapi.service';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [FormComponent],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    CommonModule,
    FormRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    CrudapiService,
    provideHttpClient(), // Providing the HttpClient using hadi badaltha dir deprecated()
  ],
})
export class FormModule {}
