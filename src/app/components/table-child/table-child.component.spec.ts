import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableChildComponent } from './table-child.component';

describe('TableChildComponent', () => {
  let component: TableChildComponent;
  let fixture: ComponentFixture<TableChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableChildComponent]
    });
    fixture = TestBed.createComponent(TableChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
