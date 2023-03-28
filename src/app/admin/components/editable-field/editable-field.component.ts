import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'editable-field',
  templateUrl: './editable-field.component.html',
  styleUrls: ['./editable-field.component.css'],
})
export class EditableFieldComponent {
  public editMode = false;

  @Input() field: any = '';
  @Input() symbol: any = '';
  @Input() multiline = false;

  @Output() fieldChange = new EventEmitter<string>();

  public saveChanges() {
    this.editMode = false;
    this.fieldChange.emit(this.field);
  }
}
