import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListViewComponent } from './movie-list-view.component';

describe('MovieListViewComponent', () => {
  let component: MovieListViewComponent;
  let fixture: ComponentFixture<MovieListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieListViewComponent]
    });
    fixture = TestBed.createComponent(MovieListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
