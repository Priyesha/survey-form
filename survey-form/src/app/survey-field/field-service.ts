import { Injectable } from '@angular/core';
import { FieldBase } from './field-base';
import * as data from './survey-fields.json';

import { of } from 'rxjs';
import { Validators, FormArray, FormControl, FormGroup } from '@angular/forms';

@Injectable()
export class FieldService {

  private group: any = {};

  getFields() {
    const fields: FieldBase<string>[] = data;
    return of(fields);
  }

  getFormGroup(formfields) {
    formfields.forEach(item => {
      let validators;
      if (item.required && item.length > 0) {
        validators = [Validators.required, Validators.maxLength(item.length)];
      } else if (item.required) {
        validators = [Validators.required];
      } else if (item.length > 0) {
        validators = [Validators.maxLength(item.length)];
      } else {
        validators = [];
      }
      if (item.options) {
        this.group[item.key] = new FormArray([]);
      } else {
        this.group[item.key] = new FormControl('', validators);
      }
    });
    return new FormGroup(this.group);
  }
}
