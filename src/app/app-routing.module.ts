import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentTitleComponent } from './content-title/content-title.component';
import { CourseContentComponent } from './course-content/course-content.component';


const routes: Routes = [
  {path: '', component: CourseContentComponent},
  {path: 'content/:i', component: ContentTitleComponent},
  
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
