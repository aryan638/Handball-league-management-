import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/service/booking.service';
import { CustomerService } from 'src/app/service/customer.service';
import { RegistrationServiceService } from 'src/app/service/registration-service.service';

@Component({
  selector: 'app-adminuser',
  templateUrl: './adminuser.component.html',
  styleUrls: ['./adminuser.component.css']
})
export class AdminuserComponent implements OnInit {

  searchKeyword: string = '';
  customers = [];
  eventName=''
  bookedCustmoer = [];

  constructor(private service: CustomerService, private bookingService : BookingService, private route: Router, private regService: RegistrationServiceService) { }

  ngOnInit(): void {
    this.viewCustomer()
  }

  private viewCustomer() {
    this.service.viewCustomer().subscribe(
      (res: any) => { this.customers = res },
      (err: any) => console.log(err)
    )
    this.bookingService.viewBooking().subscribe(
      (res: any) => {
        this.bookedCustmoer = res;
        for (let i = 0; i < this.bookedCustmoer.length; i++) {
          const sample: any = this.bookedCustmoer[i]
          for (let j = 0; j < this.customers.length; j++) {
            const exp: any = this.customers[j]
            if (sample.customerId === exp.customerId) {
              exp.bookedevent = sample.eventName
            }
          }
        }
      },
      (err: any) => console.log(err)
    )
  }

  search() {
    alert("Search Not Found, Search for Appropriate Academy");
  }

  deleteCustomer(id: String) {
    let aid: number = +id
    this.service.deleteCustomer(aid).subscribe(
      (res: any) => { this.viewCustomer() },
      (err: any) => console.log(err)
    )
    this.regService.deleteCustomerByAdmin(aid).subscribe(
      (res: any) => console.log('deleted form registered User table'),
      (err: any) => console.log(err)
    )
  }

  updateCustomer(id: number) {
    this.route.navigate(['admin/editCustomer', id])
  }

  logout() {
    localStorage.removeItem('value');
    this.route.navigateByUrl('/login')
  }


}
