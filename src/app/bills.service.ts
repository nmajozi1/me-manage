import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BUDGET } from './budget-items';
import * as request from 'request';
// import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class BillsService {

  url: any = 'http://localhost:9900/testReq';

  getBudgetItems() {
    return this.http.get('http://localhost:9900/testReq').subscribe((response) => {
      console.log('RESPONSE: ', response);
    });
  }

  constructor(private http: HttpClient) { }
}
