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
import { ShowNgIfElseComponent } from './components/show-ng-if-else/show-ng-if-else.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { HomePageComponent } from './home-page/home-page.component';


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
