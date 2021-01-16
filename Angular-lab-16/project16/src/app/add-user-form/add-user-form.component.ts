import { Component, OnInit } from '@angular/core';
import { FormGroup,	FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserDataService } from '../user-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DbConnectService } from '../service/db-connect.service';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css'],
})
export class AddUserFormComponent implements OnInit {

  userForm: FormGroup = new FormGroup({});
  users: Data[] = [];
  constructor(
    private userDataService: UserDataService,
    private router: Router,
    private dbConnectService: DbConnectService
  ) {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      surname: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      birthday: new FormControl('', [Validators.required]),
      place: new FormControl('', [Validators.required]),
    });
    this.getData();
  }

	// ДОБАВЛЕНИЕ ДАННЫХ В МАССИВ
  async addUserData() {
    let obj = {} as Data;
    obj.id =
      this.users[this.users.length - 1].id + 1;
    obj.surname = this.userForm.get('surname')?.value;
    obj.name = this.userForm.get('name')?.value;
    obj.lastname = this.userForm.get('lastname')?.value;
    obj.phone = this.userForm.get('phone')?.value;
    obj.email = this.userForm.get('email')?.value;
    obj.birthday = this.userForm.get('birthday')?.value;
    obj.place = parseInt(this.userForm.get('place')?.value);
    await this.dbConnectService.postWorkers(obj);
    this.getData();
    this.userForm.get('surname')?.setValue('');
    this.userForm.get('name')?.setValue('');
    this.userForm.get('lastname')?.setValue('');
    this.userForm.get('phone')?.setValue('');
    this.userForm.get('email')?.setValue('');
    this.userForm.get('birthday')?.setValue('');
    this.userForm.get('place')?.setValue('');
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
