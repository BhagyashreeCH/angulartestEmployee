import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppComponent } from './app.component';
import {EmployeeDataService} from './services/employee-data.service';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EmployeeReactiveFormComponent } from './employee-reactive-form/employee-reactive-form.component';
import { EmployeePrefixUpdatePipe } from './pipe/employee-prefix-update.pipe';
import { AddChildElementDirective } from './directives/add-child-element.directive';
import { InterceptorImplementationService } from './services/interceptor-implementation.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeedetailsComponent,
    EmployeeFormComponent,
    EmployeeReactiveFormComponent,
    EmployeePrefixUpdatePipe,
    AddChildElementDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeDataService,{
    provide:HTTP_INTERCEPTORS,
    useClass:InterceptorImplementationService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
