import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Venue } from '../Model/venue';

@Injectable({
  providedIn: 'root'
})
export class VenueService {

  constructor(private http: HttpClient) { }

  public addVenue(venue: Venue): any {
    return this.http.post<any>('http://localhost:8081/admin/addVenue', venue);
  }

  public updateVenue(venue: Venue): any {
    return this.http.put<any>('http://localhost:8081/admin/updateVenue', venue);
  }

  public deleteVenue(id: number): any {
    return this.http.delete<any>('http://localhost:8081/admin/deleteVenue?id=' + id);
  }

  public viewVenue(): any {
    return this.http.get<any>('http://localhost:8081/admin/viewVenue');
  }
  public getVenueById(id: number): any {
    return this.http.get<any>('http://localhost:8081/admin/getVenue?id=' + id)
  }
}
