import { Injectable } from '@angular/core';
import { FieldBase } from './field-base';
import * as data from './survey-fields.json';

// import { DropdownField } from './field-dropdown';
// import { TextField } from './field-text';
// import { TextAreaField } from './field-textarea';
import { of } from 'rxjs';

@Injectable()
export class FieldService {

  getFields() {

    const fields: FieldBase<string>[] = data;
    console.log(fields);
    return of(fields);
  }
}
