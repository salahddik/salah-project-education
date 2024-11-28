import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MathService {
  private subSubject = new BehaviorSubject<number | null>(null); // Store temporary sum
  private sumSubject = new BehaviorSubject<number>(0); // Store final sum
  sub$ = this.subSubject.asObservable(); // Observable to expose temporary sum
  sum$ = this.sumSubject.asObservable(); // Observable to expose final sum

  updateSubSum(newSum: number): void {
    this.subSubject.next(newSum); // Update temporary sum value
  }

  updateSum(newSum: number): void {
    this.sumSubject.next(newSum); // Update final sum value
  }
}
