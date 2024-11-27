import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShardataBsService {
  private nameSource = new BehaviorSubject<string>('Default Name'); // Initial value
  name$ = this.nameSource.asObservable(); // Expose as an observable

  updateName(newName: string) {
    this.nameSource.next(newName); // Update the BehaviorSubject's value
  }
}
