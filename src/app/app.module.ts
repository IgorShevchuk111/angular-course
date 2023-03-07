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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectiveNgStyleComponent } from './components/directive-ng-style/directive-ng-style.component';
import { DynamicNgClassComponent } from './components/dynamic-ng-class/dynamic-ng-class.component';
import { ShowNgIfElseComponent } from './components/show-ng-if-else/show-ng-if-else.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CreatePostsComponent } from './components/create-posts/create-posts.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostComponent } from './components/post/post.component';
import { DStyleMouseDirective} from './directive/dStyleMouse.directive';
import { DAddClassDirective } from './directive/d-add-class.directive';
import { DHideElementDirective } from './directive/d-hide-element.directive';
import { HttpClientModule } from '@angular/common/http';
import { FormsAndValidationComponent } from './components/forms-and-validation/forms-and-validation.component';
import { FilterArrayObjectPipe } from './pipes/filter-array-object.pipe';
import { FilterArrayPipe } from './pipes/filter-array.pipe';
import { HttpClientComponent } from './components/http-client/http-client.component';




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
    CreatePostsComponent,
    PostFormComponent,
    PostComponent,
    DStyleMouseDirective,
    DAddClassDirective,
    DHideElementDirective,
    DHideElementDirective,
    FilterArrayObjectPipe,
    FormsAndValidationComponent,
    FilterArrayPipe,
    HttpClientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
