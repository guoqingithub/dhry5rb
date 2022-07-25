import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskUserListComponent } from './task-user-list.component';

describe('TaskUserListComponent', () => {
  let component: TaskUserListComponent;
  let fixture: ComponentFixture<TaskUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskUserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
