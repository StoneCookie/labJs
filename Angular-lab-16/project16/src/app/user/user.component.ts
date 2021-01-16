import { Component, Input, OnInit } from '@angular/core';
import { DbConnectService } from '../service/db-connect.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
	constructor(private dbConnectService: DbConnectService, private router: Router) { }

	@Input() info: any;
	@Input() arr: any;
	ngOnInit(): void { }

	// ПРЕОБРАЗОВАНИЕ ID ОТДЕЛА В НАЗВАНИЕ ОТДЕЛА
	getNamePlace() {
		let name;
		switch (this.info.place) {
			case 0:
				name = 'IT-отдел';
				break;
			case 1:
				name = 'Отдел продаж';
				break;
			case 2:
				name = 'Отдел доставки';
				break;
			case 3:
				name = 'Юр. отдел';
				break;
		}
		return name;
	}

	// ВОЗВРАТ ВОЗРАСТА ПОЛЬЗОВАТЕЛЯ
	getUserAge() {
		return 2021 - this.info.birthday.split('-')[0];
	}

	// ПЕРЕДАЧА И ПЕРЕАДРЕСАЦИЯ
	routeTo(info: Data) {
		this.router.navigate(['user/' + info.id], { queryParams: info });
	}

	// УДАЛЕНИЕ ПОЛЬЗОВАТЕЛЯ, ПЕРЕДАЧА МАССИВА В ЭТУ фУНКЦИЮ
	deleteUser(user: any) {
		for (let i = 0; i < this.arr.length; i++) {
			if (user.id == this.arr[i].id) {
				this.arr.splice(i, 1);
				this.dbConnectService.deleteWorkers(user.id);
				break;
			}
		}
	}

}
interface Data {
	id: number;
	surname: string;
	name: string;
	lastname: string;
	phone: string;
	email: string;
	birthday: string;
	place: number;
}
