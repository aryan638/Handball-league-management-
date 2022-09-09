import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Referee } from '../Model/referee';

@Injectable({
  providedIn: 'root'
})
export class RefereeService {

  constructor(private http: HttpClient) { }


  public addReferee(referee: Referee): any {
    return this.http.post<any>('http://localhost:8081/admin/addReferee', referee);
  }

  public updateReferee(referee: Referee): any {
    return this.http.put<any>('http://localhost:8081/admin/updateReferee', referee);
  }

  public deleteReferee(id: number): any {
    return this.http.delete<any>('http://localhost:8081/admin/deleteReferee?id=' + id);
  }

  public viewReferee(): any {
    return this.http.get<any>('http://localhost:8081/admin/viewReferee');
  }
  public getRefereeById(id: number): any {
    return this.http.get<any>('http://localhost:8081/admin/getReferee?id=' + id)
  }

}
