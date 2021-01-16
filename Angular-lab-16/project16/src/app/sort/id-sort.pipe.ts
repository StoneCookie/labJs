import { Pipe, PipeTransform } from '@angular/core';
// СОРТИРОВКА ПО ВОЗРАСТУ

@Pipe({
  name: 'idSort',
})
export class IdSortPipe implements PipeTransform {
  transform(items: { birthday: string }[], searchStr: number): any[] {
    if (searchStr === 3) {
      return items;
    } else {
      if (searchStr == 1) {
        items.sort(function (a, b) {
          return (
            2021 -
            parseInt(a.birthday.split('-')[0]) -
            (2021 - parseInt(b.birthday.split('-')[0]))
          );
        });
      } else if (searchStr == 0) {
        items.sort(function (a, b) {
          return (
            2021 -
            parseInt(b.birthday.split('-')[0]) -
            (2021 - parseInt(a.birthday.split('-')[0]))
          );
        });
      }
      return items;
    }
  }
}
