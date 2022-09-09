import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VenueService } from 'src/app/service/venue.service';

@Component({
  selector: 'app-adminvenue',
  templateUrl: './adminvenue.component.html',
  styleUrls: ['./adminvenue.component.css']
})
export class AdminvenueComponent implements OnInit {

  searchKeyword: string = '';
  venues = [];

  constructor(private service: VenueService, private route: Router) { }

  ngOnInit(): void {
    this.showVenue()
  }

  private showVenue() {
    this.service.viewVenue().subscribe(
      (res: any) => { this.venues = res },
      (err: any) => console.log(err)
    )
  }

  search() {
    alert("Search Not Found, Search for Appropriate Venue");
  }

  deleteVenue(id: number) {
    this.service.deleteVenue(id).subscribe(
      (res: any) => { this.showVenue() },
      (err: any) => console.log(err)
    )
  }

  updateVenue(id: number) {
    this.route.navigate(['admin/editVenue', id])
  }

  logout() {
    localStorage.removeItem('value');
    this.route.navigateByUrl('/login')
  }
}
