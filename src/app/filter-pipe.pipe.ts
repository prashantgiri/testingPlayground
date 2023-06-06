import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, searchBy:string, searchTerm:string): any {
    if (!searchBy) {
      return items;
    }

    return items.filter((item:any) =>  item[searchTerm].toLowerCase().includes(searchBy.toLowerCase()))
  }

}
