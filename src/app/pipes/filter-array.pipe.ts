import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArray'
})
export class FilterArrayPipe implements PipeTransform {
  transform(array: any[], search: string): any[] {
    if (!search.trim()) {
      return array
    } else {
      return array.filter(el => {
        return el.toLowerCase().includes(search.toLowerCase())
      })
    }
  }
}
