import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
	MyWorker,
	MyWorkersDatabase,
	MyWorkerType,
} from './shared/worker.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
	title = 'Список сотрудников';
	workers: MyWorker[] = MyWorkersDatabase;
	myWorkerType = MyWorkerType;
	workerEdit: any;
	id: any;
	name: any;
	surname: any;
	phone: any;
	modal = false;
	mask: Array<string | RegExp>;
	editForm = new FormGroup({
		name: new FormControl(''),
		surname: new FormControl(''),
		phone: new FormControl(''),
		id: new FormControl(''),
	});

	ngOnInit(): void {
		this.mask = [
			'(',
			/[1-9]/,
			/\d/,
			/\d/,
			')',
			' ',
			/\d/,
			/\d/,
			/\d/,
			'-',
			/\d/,
			/\d/,
			'-',
			/\d/,
			/\d/,
		];
	}

	getByType(type: number) {
		return this.workers.filter((worker) => worker.type === type);
	}

	// ФУНКЦИЯ УДАЛЕНИЯ
	onDeleteById(id: number) {
		let index = this.workers.findIndex((worker) => worker.id === id);
		if (index !== -1) {
			this.workers.splice(index, 1);
		}
	}

	// РЕДАКТИРОВАНИЕ
	onEditById(worker) {
		this.workerEdit = worker;
		this.modal = !this.modal;
		this.name = this.workerEdit.name;
		this.surname = this.workerEdit.surname;
		this.phone = this.workerEdit.phone;
		this.id = this.workerEdit.id;
	}

	// ПРИМЕНЕНИЕ
	onEditData() {
		for (let i = 0; i < this.workers.length; i++) {
			if (this.workers[i].id == this.editForm.get('id').value) {
				this.workers[i].name = this.name;
				this.workers[i].surname = this.surname;
				this.workers[i].phone = this.phone;
				break;
			}
		}
		this.modal = !this.modal;
	}
	onClose(): void {
		this.modal = !this.modal;
	}

	//ПОЛУЧЕНИЕ ДАННЫХ ПОЛЬЗОВАТЕЛЯ
	onAddWorker(worker) {
		let id =
			this.workers.length > 0
				? this.workers[this.workers.length - 1].id + 1
				: 0;
		worker.id = id;
		this.workers.push(worker);
	}
}