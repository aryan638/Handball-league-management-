import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../Model/customer';
import { User } from '../Model/user';
import { CustomerService } from '../service/customer.service';
import { RegistrationServiceService } from '../service/registration-service.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User = new User();
  customer: Customer = new Customer();

  signup: any = FormGroup;
  constructor(private customerService : CustomerService,private fb: FormBuilder, private route: Router, private service: RegistrationServiceService) { }

  ngOnInit(): void {
    this.signup = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      name: ['', Validators.required],
      mobile: ['', Validators.compose([Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])],
      password: ['', Validators.required],
      re_password: ['', Validators.required],
      type: ['', Validators.required]

    })
  }
  signupSubmit() {
    if (this.user.password === this.user.re_password) {

      if (this.user.type === 'user') {
        this.service.signupCustomer(this.user).subscribe({
          next: (res: { id: any; userName: any; mobileNo: any; }) => {
            this.customer.customerId = res.id
            this.customer.customerName = res.userName;
            this.customer.mobileNumber = res.mobileNo;
            this.customerService.addCustomer(this.customer).subscribe({
              next: (responce: any) => {
                localStorage.setItem('value', responce);
                this.route.navigateByUrl('/login');
              }
            })

          },
          error: (err: any) => console.log(err)
        })
      }
      else if (this.user.type === 'admin') {
        this.service.signupAdmin(this.user).subscribe({
          next: (res: string) => {
            localStorage.setItem('value', res);;
            this.route.navigateByUrl('/login')
          },
          error: (err: any) => console.log(err)
        })
      }
    } else {
      alert('Password Mismatch')
    }


  }
}
