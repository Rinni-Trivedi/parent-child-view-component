import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { SectionComponent } from './section/section.component';

import { RatingModule } from 'ng-starrating';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { jqxChartModule } from 'jqwidgets-ng/jqxchart';
import { SectionDirective } from './section/directives/section.directive';
import { SubsectionComponent } from './subsection/subsection.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    SectionDirective,
    SubsectionComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RatingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    jqxChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
