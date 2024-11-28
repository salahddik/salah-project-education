import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultexamComponent } from './container/resultexam.component';

const routes: Routes = [{ path: '', component: ResultexamComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultexamRoutingModule {}
