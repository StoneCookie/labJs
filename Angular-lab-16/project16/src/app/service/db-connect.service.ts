import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbConnectService {

  routeApi = 'http://localhost:3000/workers';
  constructor(private http: HttpClient) {}

	// ПОЛУЧЕНИЕ ПОЛЬЗОВАТЕЛЕЙ
  getWorkers(): Promise<any> {
    return this.http.get(this.routeApi).toPromise();
  }

	// ДОБАВЛЕНИЕ ПОЛЬЗОВАТЕЛЕЙ
  postWorkers(data: User) {
    return this.http.post(this.routeApi, data).toPromise();
	}

	// ПЕРЕЗАПИСЬ ПОЛЬЗОВАТЕЛЕЙ
  rewriteWorkers(data: User){
    return this.http.put(this.routeApi + "/" + data.id, data).toPromise();
	}

	// УДАЛЕНИЕ ПОЛЬЗОВАТЕЛЕЙ
  deleteWorkers(data: number){
    return this.http.delete(this.routeApi + "/" + data).toPromise();
  }
}
export interface User {
  id?: number;
  surname?: string;
  name?: string;
  lastname?: string;
  phone?: string;
  email?: string;
  birthday?: string;
  place?: number;
}