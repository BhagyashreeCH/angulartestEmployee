import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { recruitment } from '../model/recruitment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { map, filter } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeInterviewRatingService {
  private url :string = "/assets/recruitmentAnalysis.json";
  constructor(private httpClient:HttpClient) { }
  total = 0;
  private emplist:recruitment[];
  getAverageRating(name:string):Observable<recruitment[]>{
    
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams();
    params.append("someParamKey", name)

  //   return this.httpClient.get<recruitment[]>(this.url).pipe(map(data => {
  //     return data.filter(data1 => data1.employeeName === name),
  //      data1.reduce((acc, pilot) => acc + pilot.rating/data1.length, 0)}, error => error)
  // );
      return this.httpClient.get<recruitment[]>(this.url);

     
  }

  
}


