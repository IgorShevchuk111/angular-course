import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CourseContentComponent } from './course-content/course-content.component';
import { BindingImgComponent } from './binding-img/binding-img.component';
import { ContentTitleComponent } from './content-title/content-title.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseContentComponent,
    BindingImgComponent,
    ContentTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
