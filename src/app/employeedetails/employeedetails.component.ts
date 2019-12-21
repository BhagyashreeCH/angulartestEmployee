import { Component, OnChanges, OnInit } from '@angular/core';
import {employee} from '../model/employee';
import {EmployeeDataService} from '../services/employee-data.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.scss']
})
export class EmployeedetailsComponent implements OnInit {

  title = 'Employee';
  constructor(private empService:EmployeeDataService){  }
  private employee:employee[];

  ngOnInit(){
    this.empService.getEmployee().subscribe(data => this.employee = data);
  }
}
