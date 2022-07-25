import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProjectUserComponent } from './dialog-project-user.component';

describe('DialogProjectUserComponent', () => {
  let component: DialogProjectUserComponent;
  let fixture: ComponentFixture<DialogProjectUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogProjectUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogProjectUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
