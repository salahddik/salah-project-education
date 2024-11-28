import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultexamComponent } from './resultexam.component';

describe('resultexamComponent', () => {
  let component: ResultexamComponent;
  let fixture: ComponentFixture<ResultexamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultexamComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
