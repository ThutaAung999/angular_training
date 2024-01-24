import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoCountComponent } from './to-do-count.component';

describe('ToDoCountComponent', () => {
  let component: ToDoCountComponent;
  let fixture: ComponentFixture<ToDoCountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoCountComponent]
    });
    fixture = TestBed.createComponent(ToDoCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
