import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListViewComponent } from './todo-list-view.component';

describe('TableParentComponent', () => {
  let component: TodoListViewComponent;
  let fixture: ComponentFixture<TodoListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListViewComponent]
    });
    fixture = TestBed.createComponent(TodoListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
