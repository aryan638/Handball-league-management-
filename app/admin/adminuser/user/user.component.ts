import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  customer: Customer = new Customer ();
  address = {
    houseNo: '',
    streetName: '',
    areaName: '',
    state: '',
    nationality: '',
    pincode: ''
  }

  constructor(private route: Router, private router: Router, private service: CustomerService) { }

  ngOnInit(): void {

  }

  studentForm = new FormGroup({
    customerName: new FormControl(),
    city: new FormControl(),
    MobileNo: new FormControl(),
    Age: new FormControl(),
  })

  onSubmit() {
    
      

      if (this.studentForm.get('customerName')?.value !== null && this.studentForm.get('city')?.value !== null && this.studentForm.get('MobileNo')?.value !== null && this.studentForm.get('Age')?.value !== null) {
        this.customer.customerName = this.studentForm.get('customerName')?.value
        this.customer.city = this.studentForm.get('city')?.value
        this.customer.mobileNumber = this.studentForm.get('MobileNo')?.value
        this.customer.age = this.studentForm.get('Age')?.value
        console.log(this.customer)
        this.service.addCustomer(this.customer).subscribe({
          next: (res: any) => this.router.navigateByUrl('/admin/student'),
          error: (err: any) => console.log(err)
        })

      }
    }
    logout() {
      localStorage.removeItem('value');
      this.route.navigateByUrl('/login')
    }

  }






