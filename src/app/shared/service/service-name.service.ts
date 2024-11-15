import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServiceNameService {
  private apiUrl = environment.urlapiposts;

  constructor() {
    console.log(this.apiUrl);
  }
}
