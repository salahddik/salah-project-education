import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultexamComponent } from './container/resultexam.component';
import { provideHttpClient } from '@angular/common/http';
import { ResultexamRoutingModule } from './resultexam.routing';

@NgModule({
  declarations: [ResultexamComponent],
  imports: [CommonModule, ResultexamRoutingModule],
  providers: [
    provideHttpClient(), // Providing the HttpClient using hadi badaltha dir deprecated()
  ],
})
export class ResultexamModule {}
