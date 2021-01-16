import { Pipe, PipeTransform } from '@angular/core';
// СОРТИРОВКА ПО ФАМИЛИИ

@Pipe({
	name: 'fiSort',
})
export class FiSortPipe implements PipeTransform {
	transform(
		items: { name: string; surname: string }[],
		searchStr: string
	): any[] {
		if (searchStr === '') {
			return items;
		} else {
			let filteredItems = [];
			for (let i = 0; i < items.length; i++) {
				if (
					(
						items[i].name.toLowerCase() +
						' ' +
						items[i].surname.toLowerCase()
					).includes(searchStr.toLowerCase()) ||
					(
						items[i].surname.toLowerCase() +
						' ' +
						items[i].name.toLowerCase()
					).includes(searchStr.toLowerCase())
				) {
					filteredItems.push(items[i]);
				}
			}
			return filteredItems;
		}
	}
}
