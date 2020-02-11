import { Component, OnInit, Input } from '@angular/core';
import { FieldBase } from '../survey-field/field-base';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() fields: FieldBase<string>[] = [];
  surveyForm: FormGroup;
  payLoad = '';

  constructor() {  }

  ngOnInit() {
    const group: any = {};

    this.fields.forEach(item => {
      console.log(item);
      const validators = [
        item.required ? Validators.required : null,
        item.length > 0 ? Validators.maxLength(item.length) : null
      ];
      group[item.field] = new FormControl('', validators);
    });
    this.surveyForm = new FormGroup(group);
  }

  onSubmit() {
    // this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
