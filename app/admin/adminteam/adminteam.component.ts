import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/service/team.service';

@Component({
  selector: 'app-adminteam',
  templateUrl: './adminteam.component.html',
  styleUrls: ['./adminteam.component.css']
})
export class AdminteamComponent implements OnInit {

  searchKeyword: String = '';
  Teams = []
  constructor(private service: TeamService , private route: Router) { }

  ngOnInit(): void {
    this.showTeam();
  }

  private showTeam() {
    this.service.viewteam().subscribe({
      next: (res: any) => { this.Teams = res },
      error: (err: any) => console.log(err)
    })
  }
  search() {
    alert("Search Not Found, Search for Appropriate Team");
  }

  deleteTeam(id: number) {
    this.service.deleteteam(id).subscribe(
      (res: any) => { console.log(res); this.showTeam() },
      (err: any) => console.log(err)
    )
  }

  updateTeam(id: number) {
    this.route.navigate(['admin/editteam', id])
  }

  logout() {
    localStorage.removeItem('value');
    this.route.navigateByUrl('/login')
  }
   

}
