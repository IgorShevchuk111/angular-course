import { Injectable } from '@angular/core';
import { Post } from '../components/post-form/post-form.component';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = []

  constructor() {}

  addPost(post: Post){
    this.posts.unshift(post)
    console.log('f',this.posts);
    
  }

  removePost(title:string,text:string){
    this.posts = this.posts.filter(p => p.title !== title )
    this.posts = this.posts.filter(p => p.text !== text )
  }
}
