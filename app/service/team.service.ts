import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from '../Model/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }


  public addteam(team: Team): any {
    return this.http.post<any>('http://localhost:8081/admin/addTeam', team);
  }

  public updateteam(team: Team): any {
    return this.http.put<any>('http://localhost:8081/admin/updateTeam', team);
  }

  public deleteteam(id: number): any {
    return this.http.delete<any>('http://localhost:8081/admin/deleteTeam?id=' + id);
  }

  public viewteam(): any {
    return this.http.get<any>('http://localhost:8081/admin/viewTeam');
  }
  public getteamById(id: number): any {
    return this.http.get<any>('http://localhost:8081/admin/getTeam?id=' + id)
  }

}
