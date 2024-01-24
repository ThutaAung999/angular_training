import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCalculateComponent } from './total-calculate.component';

describe('TotalCalculateComponent', () => {
  let component: TotalCalculateComponent;
  let fixture: ComponentFixture<TotalCalculateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalCalculateComponent]
    });
    fixture = TestBed.createComponent(TotalCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
