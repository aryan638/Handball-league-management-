import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/Model/customer';
import { User } from 'src/app/Model/user';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  customer: Customer = new Customer()
  id!: number

  constructor(private service: CustomerService, private route: Router, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];

    this.service.getCustomerById(this.id).subscribe(
      (data: any) => { this.customer = data },
      (error: any) => console.log(error)
    )
  }

  submitEditCustomer() {
    this.service.updateCustomer(this.customer).subscribe(
      (data: any) => { this.route.navigateByUrl('admin/customer') },
      (error: any) => console.log(error)
    )
  }

  logout() {
    localStorage.removeItem('value');
    this.route.navigateByUrl('/login')
  }

}
