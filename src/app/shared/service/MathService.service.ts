import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MathService {
  private sumSubject = new BehaviorSubject<number | null>(null); // Store sum
  sum$ = this.sumSubject.asObservable(); // Observable to expose sum

  updateSum(newSum: number): void {
    this.sumSubject.next(newSum); // Update sum value
  }
}
