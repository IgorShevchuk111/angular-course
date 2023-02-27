import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent  {

  constructor(
    public postsService: PostsService
  ) { }

  removePost(title:string,  text:string){
    this.postsService.removePost(title,text)
  }



}
