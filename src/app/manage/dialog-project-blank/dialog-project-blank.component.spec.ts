import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProjectBlankComponent } from './dialog-project-blank.component';

describe('DialogProjectBlankComponent', () => {
  let component: DialogProjectBlankComponent;
  let fixture: ComponentFixture<DialogProjectBlankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogProjectBlankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogProjectBlankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
