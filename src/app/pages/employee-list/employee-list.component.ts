import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{
  constructor(private service:RegisterService,private router:Router){

  }

  employeeList:any;

  ngOnInit(): void {
    this.service.getEmployeeList().subscribe(data => {
      this.employeeList = data;
      // console.log(this.employeeList);
    });
    
  }
  
  deleteClick(id: number) {
    this.service.deleteEmployee(id).subscribe(() => {
      // After deletion, you should refresh the employeeList
      this.service.getEmployeeList().subscribe(data => {
        this.employeeList = data;
        console.log(this.employeeList);
      });
      
    });
  }

  updateEmployee(id:number){
    this.router.navigate(['/update',id]);
  }

}