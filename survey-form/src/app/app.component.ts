import { Component } from '@angular/core';
import { FieldBase } from './survey-field/field-base';
import { FieldService } from './survey-field/field-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Survey';
  activeTab = 0;
  fields: FieldBase<string>[];
  totalTabs: number;
  success = false;

  constructor(service: FieldService) {
    service.getFields().subscribe(data => {
       // tslint:disable-next-line: no-string-literal
       this.fields = data['default'];
       // tslint:disable-next-line: no-string-literal
       this.totalTabs = data['default'].length;
    });
  }
}
