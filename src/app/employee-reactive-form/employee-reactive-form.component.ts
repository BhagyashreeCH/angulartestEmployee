import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-employee-reactive-form',
  templateUrl: './employee-reactive-form.component.html',
  styleUrls: ['./employee-reactive-form.component.scss']
})
export class EmployeeReactiveFormComponent implements OnInit {
  
  constructor(private fb:FormBuilder) {}
  formBuilderEmp:FormGroup;
   ngOnInit() {
    this.formBuilderEmp =this.fb.group({
      employeeName: ['',[Validators.required, Validators.minLength(3)]],
      employeeSalary:[],
      employeeCompany:[],
      employeeGender:[],
      employeeAge:[],
      employeeMaritalStatus:[]
    });
  }

}
