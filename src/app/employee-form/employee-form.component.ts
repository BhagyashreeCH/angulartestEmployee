import { Component, OnInit } from '@angular/core';
import { employee } from '../model/employee';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  constructor() { }
  emp = new employee('', 2 , '' ,'', 54, ''); 
  ngOnInit() {
  }
  templateFunc(val:any){
    console.log(val);
  }
}