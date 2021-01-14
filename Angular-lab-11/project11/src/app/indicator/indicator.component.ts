import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-indicator',
	templateUrl: './indicator.component.html',
	styleUrls: ['./indicator.component.css']
})
export class IndicatorComponent implements OnInit {
	cards: object[] = []; //ИНИЦИАЛИЗАЦИЯ ОБЪЕКТА
	status: boolean = true; //СТАТУС КАРТОЧКИ

	constructor() { }

	// УДАЛЕНИЕ КАРТОЧКИ
	delete(id: number) {
		this.cards.splice(id, 1);
	}

	// ДОБАВЛЕНИЕ КАРТОЧКИ
	add(str: string, type: number) {
		let card: Params = {};
		card.name = str;
		if (this.cards.length == 0) {
			card.id = 1;
		} else {
			card.id = this.cards[this.cards.length - 1].id + 1;
		}
		if (type == 1) {
			card.status = true;
		}
		else {
			card.status = false;
		}
		this.cards.push(card);
	}

	// ГЕНЕРАЦИЯ КАРТОЧКИ СЛУЧАЙНЫЙ СТАТУС
	ngOnInit(): void {
		for (let i = 1; i < 11; i++) {
			let card: Params = {};
			card.status = Math.random() < 0.5;
			card.name = "КАРТОЧКА " + i;
			card.id = i;
			this.cards.push(card);
		}
	}
}

export interface Params {
	id?: number;
	name?: string;
	status?: boolean;
}