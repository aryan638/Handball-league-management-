import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Venue } from 'src/app/Model/venue';
import { VenueService } from 'src/app/service/venue.service';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css']
})
export class VenueComponent implements OnInit {

  venue : Venue = new Venue();

  constructor(private route: Router, private service: VenueService) { }

  ngOnInit(): void {

  }

  reactiveForm = new FormGroup({
    venueName: new FormControl(['', Validators.required]),
    VenueCapacity: new FormControl(['', Validators.required]),
    eventName: new FormControl(['', Validators.required]),
    venueloaction: new FormControl(['', Validators.required]),
    Description: new FormControl(['', Validators.required])

  })

  submitAddVenue() {
    console.log(this.venue);
    this.service.addVenue(this.venue).subscribe({
      next: () => this.route.navigateByUrl('admin/Venue'),
      error: (err: any) => console.log(err)

    })

  }

  logout() {
    localStorage.removeItem('value');
    this.route.navigateByUrl('/login')
  }

}
