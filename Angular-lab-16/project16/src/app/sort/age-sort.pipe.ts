import { Pipe, PipeTransform } from '@angular/core';
// СОРТИРОВКА ПО ID

@Pipe({
  name: 'ageSort',
})
export class AgeSortPipe implements PipeTransform {
  transform(items: { id: number }[], searchStr: number): any[] {
    if (searchStr === 3) {
      return items;
    } else {
      if (searchStr == 1) {
        items.sort(function (a, b) {
          return a.id - b.id;
        });
      } else if (searchStr == 0) {
        items.sort(function (a, b) {
          return b.id - a.id;
        });
      }
      return items;
    }
  }
}
