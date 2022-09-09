import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Venue } from 'src/app/Model/venue';
import { VenueService } from 'src/app/service/venue.service';

@Component({
  selector: 'app-editvenue',
  templateUrl: './editvenue.component.html',
  styleUrls: ['./editvenue.component.css']
})
export class EditvenueComponent implements OnInit {
  venue: Venue = new Venue();
  id!: number;

  constructor(private service: VenueService, private route: Router, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];

    this.service.getVenueById(this.id).subscribe(
      (data: any) => this.venue = data,
      (error: any) => console.log(error)
    )
  }

  submitEditVenue() {
    this.service.updateVenue(this.venue).subscribe(
      (data: any) => { this.route.navigateByUrl('admin/venue') },
      (error: any) => console.log(error)
    )
  }

  logout() {
    localStorage.removeItem('value');
    this.route.navigateByUrl('/login')
  }
}
