import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MathService {
  private subSubject = new BehaviorSubject<number | null>(null); // Store temporary sum
  private divSubject = new BehaviorSubject<number | null>(null); // Store final sum
  private sumSubject = new BehaviorSubject<number | null>(null); // Store final sum
  private multSubject = new BehaviorSubject<number | null>(null); // Store final sum
  sub$ = this.subSubject.asObservable(); // Observable to expose temporary sum
  sum$ = this.sumSubject.asObservable(); // Observable to expose final sum
  div$ = this.divSubject.asObservable(); // Observable to expose final sum
  multi$ = this.multSubject.asObservable(); // Observable to expose final sum

  updatemulti(newSum: number): void {
    this.multSubject.next(newSum);
  }

  updatediv(newSum: number): void {
    this.divSubject.next(newSum); // Update temporary sum value
  }
  updateSubSum(newSum: number): void {
    this.subSubject.next(newSum); // Update temporary sum value
  }

  updateSum(newSum: number): void {
    this.sumSubject.next(newSum); // Update final sum value
  }
}
