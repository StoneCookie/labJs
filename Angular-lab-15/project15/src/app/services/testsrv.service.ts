import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyWorker } from '../shared/worker.model';

@Injectable({
  providedIn: 'root'
})
export class TestsrvService {

  routeApi = 'http://localhost:3000/workers';
  constructor(private http: HttpClient) {}

  getWorkers(): Promise<any> {
    return this.http.get(this.routeApi).toPromise();
  }

  postWorkers(data: MyWorker) {
    return this.http.post(this.routeApi, data).toPromise();
  }
  rewriteWorkers(data: MyWorker){
    return this.http.put(this.routeApi + "/" + data.id, data).toPromise();
  }
}
