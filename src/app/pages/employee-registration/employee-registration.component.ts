import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { Employee } from '../../interfaces/employee';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrl: './employee-registration.component.css'
})
export class EmployeeRegistrationComponent implements OnInit {

  departments=[];

  registrationForm=this.fb.group({
    userName:[''],
    email:[''],
    password:['']
  });

  constructor(private fb:FormBuilder,private service:RegisterService ){}

  ngOnInit(): void {
      
  }


  onSubmit(){
    this.service.addEmployee(this.registrationForm.value as Employee).subscribe(
      res=>console.log(res)
    )

    this.registrationForm=this.fb.group({
      userName:[''],
      email:[''],
      password:['']
    });
  }

}
