import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldService } from './survey-field/field-service';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatTabsModule
  ],
  providers: [FieldService],
  bootstrap: [AppComponent]
})
export class AppModule { }
