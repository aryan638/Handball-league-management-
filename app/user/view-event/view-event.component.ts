import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/Model/booking';
import { BookingService } from 'src/app/service/booking.service';
import { CustomerService } from 'src/app/service/customer.service';
import { VenueService } from 'src/app/service/venue.service';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {

  booking: Booking = new Booking();
  searchKeyword: String = '';
  id!: number
  venues = [];
  constructor(private route: Router, private venueService: VenueService, private bookingService: BookingService, private customerService: CustomerService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.showVenue();
  }

  public showVenue() {
    this.venueService.viewVenue().subscribe(
      (res: any) => { this.venues = res },
      (err: any) => console.log(err)
    )
  }

  search() {
    alert("Search Not Found, Search for Appropriate Venue")
  }

  enroll(id: number) {
    var today = new Date();
    var date = today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear();
    this.venueService.getVenueById(id).subscribe({
      next: (res: any) => {
        this.booking.bookingDate = date
        this.booking.eventId = res.id
        this.booking.eventName = res.eventName
        this.customerService.getCustomerById(this.id).subscribe({
          next: (res : any) => {
            this.booking.customerId = res.customerId;
            this.booking.CustomerName = res.CustomerName;
            this.bookingService.addBooking(this.booking).subscribe({
              next: (res : any) => alert('Venue Booked'),
              error: (err: any) => console.log(err)
            })
          },
          error: (err: any) => console.log(err)
        })
      },
      error: (err: any) => console.log(err)
    })

  }

  logout() {
    localStorage.removeItem('value');
    this.route.navigateByUrl('/login')
  }


}