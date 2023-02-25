import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingImgComponent } from './components/binding-img/binding-img.component';
import { ContentTitleComponent } from './components/content-title/content-title.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'content/:i', component: ContentTitleComponent},
  {path:  'binding-img', component: BindingImgComponent},
  {path:  'EventBinding', component: EventBindingComponent}
  
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
