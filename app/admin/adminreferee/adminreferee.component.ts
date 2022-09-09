import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RefereeService } from 'src/app/service/referee.service';

@Component({
  selector: 'app-adminreferee',
  templateUrl: './adminreferee.component.html',
  styleUrls: ['./adminreferee.component.css']
})
export class AdminrefereeComponent implements OnInit {

  searchKeyword: String = '';
  Referees = []
  constructor(private service: RefereeService, private route: Router) { }

  ngOnInit(): void {
    this.showReferee();
  }

  private showReferee() {
    this.service.viewReferee().subscribe({
      next: (res: any) => { this.Referees = res },
      error: (err: any) => console.log(err)
    })
  }
  search() {
    alert("Search Not Found, Search for Appropriate Referee");
  }

  deleteReferee(id: number) {
    this.service.deleteReferee(id).subscribe(
      (res: any) => { console.log(res); this.showReferee() },
      (err: any) => console.log(err)
    )
  }

  updateReferee(id: number) {
    this.route.navigate(['admin/editreferee', id])
  }

  logout() {
    localStorage.removeItem('value');
    this.route.navigateByUrl('/login')
  }

}
