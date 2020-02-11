import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FieldBase } from './survey-field/field-base';
import { FieldService } from './survey-field/field-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'survey-form';
  activeTab = 0;
  fields$: Observable<FieldBase<string>[]>;

  constructor(service: FieldService) {
    this.fields$ = service.getFields();
  }
}
