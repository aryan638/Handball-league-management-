import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../Model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  public addCustomer(customer: Customer): any {
    return this.http.post<any>('http://localhost:8081/admin/addCustomer', customer);
  }

  public updateCustomer(customer: Customer): any {
    return this.http.put<any>('http://localhost:8081/admin/updateCustomer', customer);
  }

  public deleteCustomer(id: number): any {
    return this.http.delete<any>('http://localhost:8081/admin/deleteCustomer?id=' + id);
  }

  public viewCustomer(): any {
    return this.http.get<any>('http://localhost:8081/admin/viewCustomer');
  }
  public getCustomerById(id: number): any {
    return this.http.get<any>('http://localhost:8081/admin/getCustomer?id=' + id)
  }
}
