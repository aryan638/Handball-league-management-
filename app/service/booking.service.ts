import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../Model/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }


  public addBooking(booking: Booking): any {
    return this.http.post<any>('http://localhost:8081/user/addBooking', booking);
  }


  public deleteBooking(id: any): any {
    return this.http.delete('http://localhost:8081/user/deleteBooking?id=' + id);
  }

  public viewBooking(): any {
    return this.http.get<any>('http://localhost:8081/user/viewBooking');
  }

}
