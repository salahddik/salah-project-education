import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultRoutingModule } from './result.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { ResultComponent } from './container/Result.component';
import { provideHttpClient } from '@angular/common/http';
import { CrudapiService } from '../../shared/service/crudapi.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@NgModule({
  declarations: [ResultComponent],
  imports: [
    CommonModule,
    ResultRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    CrudapiService,
    provideHttpClient(), // Providing the HttpClient using hadi badaltha dir deprecated()
  ],
})
export class ResultModule {}
