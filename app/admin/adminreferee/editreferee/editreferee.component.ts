import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Referee } from 'src/app/Model/referee';
import { RefereeService } from 'src/app/service/referee.service';

@Component({
  selector: 'app-editreferee',
  templateUrl: './editreferee.component.html',
  styleUrls: ['./editreferee.component.css']
})
export class EditrefereeComponent implements OnInit {
  referee: Referee = new Referee();
  id!: number
  constructor(private service: RefereeService, private route: Router, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];

    this.service.getRefereeById(this.id).subscribe(
      (data: any) => this.referee = data,
      (error: any) => console.log(error)
    )
  }

  submitEditReferee() {
    this.service.updateReferee(this.referee).subscribe(
      (data: any) => { this.route.navigateByUrl('admin/referee') },
      (error: any) => console.log(error)
    )
  }

  logout() {
    localStorage.removeItem('value');
    this.route.navigateByUrl('/login')
  }

}
