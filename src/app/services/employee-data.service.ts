import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {employee} from '../model/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  private url :string = "/assets/employeeList.json";
  private employees : Observable<employee[]>;
  constructor(private httpClient :HttpClient) {
    this.loadFromServer();
   }
  
  loadFromServer(){
    this.employees = this.httpClient.get<employee[]>(this.url);
  }
  getEmployee():Observable<employee[]>{
    return this.employees;
  }


}
