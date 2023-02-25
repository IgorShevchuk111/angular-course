import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomePageComponent } from './home-page/home-page.component';
import { BindingImgComponent } from './components/binding-img/binding-img.component';
import { ContentTitleComponent } from './components/content-title/content-title.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BindingImgComponent,
    ContentTitleComponent,
    EventBindingComponent
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
