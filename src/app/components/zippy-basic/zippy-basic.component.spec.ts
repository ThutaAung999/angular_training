import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZippyBasicComponent } from './zippy-basic.component';

describe('ZippyBasicComponent', () => {
  let component: ZippyBasicComponent;
  let fixture: ComponentFixture<ZippyBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZippyBasicComponent]
    });
    fixture = TestBed.createComponent(ZippyBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
