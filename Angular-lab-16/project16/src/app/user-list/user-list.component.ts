import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Router } from '@angular/router';
import { DbConnectService } from '../service/db-connect.service';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
	constructor(
		private userDataService: UserDataService,
		private router: Router,
		private dbConnectService: DbConnectService
	) { }
	users = [];
	naming: string = '';
	age: number = 3;
	id: number = 3;

	// ЗАПИСЬ ДАННЫХ В МАССИВ
	ngOnInit(): void {
		this.getData();
	}

	// ПОЛУЧЕНИЕ ДАННЫХ ИЗ БД
	async getData() {
		try {
			this.users = await this.dbConnectService.getWorkers();
		} catch (err) {
			console.log(err);
		}
	}
}
