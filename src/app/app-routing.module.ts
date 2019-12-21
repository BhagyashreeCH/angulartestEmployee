import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeFormComponent} from './employee-form/employee-form.component';
import {EmployeedetailsComponent} from './employeedetails/employeedetails.component';
import {EmployeeReactiveFormComponent} from './employee-reactive-form/employee-reactive-form.component';

const routes: Routes = [
  {path:'employeesDetails', component:EmployeedetailsComponent},
  {path:'employeesForm', component:EmployeeFormComponent},
  {path:'employeesReactiveForm', component:EmployeeReactiveFormComponent},
  {path:'', redirectTo:'employeesDetails', pathMatch:'full'},
  { path: 'order-list', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
