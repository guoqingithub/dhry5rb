import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTaskBlankComponent } from './dialog-task-blank.component';

describe('DialogTaskBlankComponent', () => {
  let component: DialogTaskBlankComponent;
  let fixture: ComponentFixture<DialogTaskBlankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTaskBlankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTaskBlankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
