import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../components/post-form/post-form.component';



@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(posts: Post[], search: string , field: string): Post[] {
    console.log(posts);
    if (!search.trim()) {
      return posts
    } else {
      return posts.filter(post => {
        return post[field as keyof typeof post].toLowerCase().includes(search.toLowerCase())
      })
    }
  }
}
