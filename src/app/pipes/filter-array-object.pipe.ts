import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'filterArrayObject'
})
export class FilterArrayObjectPipe implements PipeTransform {
  transform(array: any[], search: string , field?: string): any[] {
    if (!search.trim()) {
      return array
    } else {
      return array.filter(el => {
        return el[field as keyof typeof el].toLowerCase().includes(search.toLowerCase())
      })
    }
  }
}
