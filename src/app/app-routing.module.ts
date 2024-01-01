import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeRegistrationComponent } from './pages/employee-registration/employee-registration.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './pages/update-employee/update-employee.component';

const routes: Routes = [
  {path:'reg',component:EmployeeRegistrationComponent},
  {path:'list',component:EmployeeListComponent},
  {path:'update/:id',component:UpdateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
