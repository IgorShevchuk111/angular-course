import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingImgComponent } from './components/binding-img/binding-img.component';
import { ContentTitleComponent } from './components/content-title/content-title.component';
import { DirectiveNgStyleComponent } from './components/directive-ng-style/directive-ng-style.component';
import { DynamicNgClassComponent } from './components/dynamic-ng-class/dynamic-ng-class.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CreatePostsComponent } from './components/create-posts/create-posts.component';
import { ShowNgIfElseComponent } from './components/show-ng-if-else/show-ng-if-else.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostComponent } from './components/post/post.component';
import { FormsAndValidationComponent } from './components/forms-and-validation/forms-and-validation.component';
import { HttpClientComponent } from './components/http-client/http-client.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'content/:i', component: ContentTitleComponent},
  {path:  'binding-img', component: BindingImgComponent},
  {path:  'EventBinding', component: EventBindingComponent},
  {path:  'TwoWayBinding', component: TwoWayBindingComponent},
  {path:  'DirectiveNgStyle', component: DirectiveNgStyleComponent},
  {path:  'DynamicNgClass', component: DynamicNgClassComponent},
  {path:  'ShowNgIfElse', component: ShowNgIfElseComponent},
  {path:  'NgSwitch', component: NgSwitchComponent},
  {path:  'NgFor', component: NgForComponent},
  {path:  'Pipes', component: PipesComponent},
  {path:  'PostForm', component: PostFormComponent,children: [
    {path:  'Post', component: PostComponent}
  ]},
  {path:  'FormsAndValidation', component: FormsAndValidationComponent},
  {path:  'HttpClient', component: HttpClientComponent},
  {path:  'Error', component: ErrorPageComponent},
  {path:  '**',redirectTo: '/Error'},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:  [
    RouterModule
  ]
})
export class AppRoutingModule { }
