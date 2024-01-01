import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseURL="http://localhost:3000";

  constructor(private http:HttpClient) { }

  addEmployee(employee:Employee){
    return this.http.post(`${this.baseURL}/data`,employee);
  }

  deleteEmployee(id:number){
    return this.http.delete(`${this.baseURL}/data/${id}`);
  }

  getEmployeeList(){
    return this.http.get<Employee[]>(`${this.baseURL}/data`);
  }

  editEmployee(employee:Employee,id:number){
    return this.http.put<Employee>(`${this.baseURL}/data/${id}`,employee);
  }

  getEmployee(id:number){
    return this.http.get<Employee>(`${this.baseURL}/data/${id}`)
  }
}
