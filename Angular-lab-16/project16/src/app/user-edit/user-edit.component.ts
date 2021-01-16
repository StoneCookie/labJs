import { Component, OnInit } from '@angular/core';
import { FormGroup,	FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from '../user-data.service';
import { DbConnectService } from '../service/db-connect.service';

@Component({
	selector: 'app-user-edit',
	templateUrl: './user-edit.component.html',
	styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
	id: number = 0;
	users: Data[] = [];
	user: any = {};
	userForm: FormGroup = new FormGroup({});

	constructor(
		private activatedRouter: ActivatedRoute,
		private userDataService: UserDataService,
		private router: Router,
		private dbConnectService: DbConnectService
	) {
	}

	// ПОЛУЧЕНИЕ ДАННЫХ ПОЛЬЗОВАТЕЛЯ
	ngOnInit(): void {
		this.userForm = new FormGroup({
			surname: new FormControl(this.activatedRouter.snapshot.queryParamMap.get('surname'), [Validators.required]),
			name: new FormControl(this.activatedRouter.snapshot.queryParamMap.get('name'), [Validators.required]),
			lastname: new FormControl(this.activatedRouter.snapshot.queryParamMap.get('lastname'), [Validators.required]),
			phone: new FormControl(this.activatedRouter.snapshot.queryParamMap.get('phone'), [Validators.required]),
			email: new FormControl(this.activatedRouter.snapshot.queryParamMap.get('email'), [Validators.required]),
			birthday: new FormControl(this.activatedRouter.snapshot.queryParamMap.get('birthday'), [Validators.required]),
			place: new FormControl(this.activatedRouter.snapshot.queryParamMap.get('place'), [Validators.required]),
		});
	}

	// РЕДАКТИРОВАНИЕ ДАННЫХ
	userEditData() {

		let obj: Data = {};

		obj.id = Number(this.activatedRouter.snapshot.queryParamMap.get('id'));
		obj.surname = this.userForm.get('surname')?.value;
		obj.name = this.userForm.get('name')?.value;
		obj.lastname = this.userForm.get('lastname')?.value;
		obj.phone = this.userForm.get('phone')?.value;
		obj.email = this.userForm.get('email')?.value;
		obj.birthday = this.userForm.get('birthday')?.value;
		obj.place = parseInt(this.userForm.get('place')?.value);

		this.dbConnectService.rewriteWorkers(obj);
		this.router.navigateByUrl('/user');
	}

	// УДАЛЯЕМ ОБЪЕКТ ПО ID
	userDeleteData(id: number) {
		this.users.splice(id, 1);
		this.dbConnectService.deleteWorkers(id);
		this.router.navigateByUrl('/user');
	}

}

interface Data {
	id?: number;
	surname?: string;
	name?: string;
	lastname?: string;
	phone?: string;
	email?: string;
	birthday?: string;
	place?: number;
}