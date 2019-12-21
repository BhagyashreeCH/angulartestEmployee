import { Component, OnChanges, OnInit } from '@angular/core';
import {employee} from './model/employee';
import {EmployeeDataService} from './services/employee-data.service';
import {EmployeeInterviewRatingService} from './services/employee-interview-rating.service';
import { recruitment } from './model/recruitment';
import {TestserverService} from './services/testserver.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Employee';
  constructor(private empService:EmployeeDataService, 
    private ratingService: EmployeeInterviewRatingService,
    private test:TestserverService){  }
  private employee:employee[];
  private recruitmentRtaing:recruitment[];
  testval:boolean;
  id1=false;
  ngOnInit(){
    this.empService.getEmployee().subscribe(data => this.employee = data);
    //this.ratingService.getAverageRating("Bhagyashree").subscribe(data => this.recruitmentRtaing =data);
    //console.log("Logs", this.recruitmentRtaing);
    this.testval = this.test.gettestdata();
    
   
  }
  
}
