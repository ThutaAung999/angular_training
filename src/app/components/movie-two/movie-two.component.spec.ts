import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTwoComponent } from './movie-two.component';

describe('MovieTwoComponent', () => {
  let component: MovieTwoComponent;
  let fixture: ComponentFixture<MovieTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieTwoComponent]
    });
    fixture = TestBed.createComponent(MovieTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
