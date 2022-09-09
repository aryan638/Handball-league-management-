import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from 'src/app/service/booking.service';

@Component({
  selector: 'app-viewbookedevent',
  templateUrl: './viewbookedevent.component.html',
  styleUrls: ['./viewbookedevent.component.css']
})
export class ViewbookedeventComponent implements OnInit {
  id!: any

  Booking: any = [];
  samples: any =[];

  constructor(private route: Router, private router: ActivatedRoute, private service: BookingService) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];

    this.viewBooking()
  }

  private viewBooking() {
    this.service.viewBooking().subscribe({
      next: (res: any) => { this.Booking = res
        for (let i = 0; i < this.Booking.length; i++) {
          var sample = this.Booking[i]
          if (sample.studentId == this.id) {
            this.samples.push(sample)
          }
        }
       },
      error: (err: any) => console.log(err)
    })
  }

  delete(id: number) {
    this.service.deleteBooking(id).subscribe({
      next: (res: any) => { alert('Bookingg Deleted'); this.viewBooking() },
      error: (err: any) => console.log('Booking Not Deleted')
    })
  }

  logout() {
    localStorage.removeItem('value');
    this.route.navigateByUrl('/login')
  }

}
