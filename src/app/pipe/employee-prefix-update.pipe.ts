import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeePrefixUpdate'
})
export class EmployeePrefixUpdatePipe implements PipeTransform {
  transform(value: any, eGender:string, estatus:string): any {
    if(eGender.toLowerCase() == "male"){
      return `Mr ${value}`
    } else if(eGender.toLowerCase() == "female" && estatus.toLowerCase() == "single"){
      return `Miss ${value}`
    } else if(eGender.toLowerCase() == "female" && estatus.toLowerCase() == "married"){
      return `Mrs ${value}`
    }
    return value;
  }
}
