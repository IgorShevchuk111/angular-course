import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

export interface Post {
  title: string,
  text: string
}

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  title = ''
  text = ''
  post: Post

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
  }

  onClick() {
    if (this.title.trim() && this.text.trim()) {
      this.post = {
        title: this.title,
        text: this.text
      }
      this.postsService.addPost(this.post)
      this.title=this.text=''
    this.router.navigate(['Post'],{relativeTo:this.route})
    }
  }
}
