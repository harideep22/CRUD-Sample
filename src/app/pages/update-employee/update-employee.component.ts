import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from '../../services/register.service';
import { FormBuilder } from '@angular/forms';
import { Employee } from '../../interfaces/employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit{

  constructor(private router:ActivatedRoute,private service:RegisterService,private fb:FormBuilder){}

  id:number;

  user:any;
  
  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];

    this.service.getEmployee(this.id).subscribe(result => {
      this.user = result;
  
      this.registrationForm = this.fb.group({
        userName: [`${this.user.userName}`],
        email: [`${this.user.email}`],
        password: [`${this.user.password}`]
      });
    });
  }
  
  registrationForm=this.fb.group({
    userName:[''],
    email:[''],
    password:['']
  });

  onSubmit(){  
    this.service.editEmployee(this.registrationForm.value as Employee,this.id).subscribe(result=>{

    })
  }


}
