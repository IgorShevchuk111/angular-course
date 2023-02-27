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
}
