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
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { DirectiveNgStyleComponent } from './components/directive-ng-style/directive-ng-style.component';
import { DynamicNgClassComponent } from './components/dynamic-ng-class/dynamic-ng-class.component';
import { ShowNgIfElseComponent } from './components/show-ng-if-else/show-ng-if-else.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { PostFormComponent } from './components/post-form/post-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BindingImgComponent,
    ContentTitleComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    DirectiveNgStyleComponent,
    DynamicNgClassComponent,
    ShowNgIfElseComponent,
    NgSwitchComponent,
    NgForComponent,
    PipesComponent,
    PostFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
