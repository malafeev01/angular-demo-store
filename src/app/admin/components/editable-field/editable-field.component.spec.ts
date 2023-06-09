import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableFieldComponent } from './editable-field.component';

describe('EditFieldComponent', () => {
  let component: EditableFieldComponent;
  let fixture: ComponentFixture<EditableFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditableFieldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditableFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
