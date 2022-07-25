import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskUserDetailComponent } from './task-user-detail.component';

describe('TaskUserDetailComponent', () => {
  let component: TaskUserDetailComponent;
  let fixture: ComponentFixture<TaskUserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskUserDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
