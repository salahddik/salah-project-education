import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultRoutingModule } from './Edit.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './container/Edit.component';
import { provideHttpClient } from '@angular/common/http';
import { CrudapiService } from '../../shared/service/crudapi.service';

@NgModule({
  declarations: [EditComponent],
  imports: [CommonModule, ResultRoutingModule, ReactiveFormsModule],
  providers: [
    CrudapiService,
    provideHttpClient(), // Providing the HttpClient using hadi badaltha dir deprecated()
  ],
})
export class EditModule {}
