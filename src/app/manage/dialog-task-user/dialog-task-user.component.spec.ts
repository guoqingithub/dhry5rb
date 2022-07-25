import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTaskUserComponent } from './dialog-task-user.component';

describe('DialogTaskUserComponent', () => {
  let component: DialogTaskUserComponent;
  let fixture: ComponentFixture<DialogTaskUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTaskUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTaskUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
