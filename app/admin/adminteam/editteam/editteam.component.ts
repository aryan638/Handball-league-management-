import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/Model/team';
import { TeamService } from 'src/app/service/team.service';

@Component({
  selector: 'app-editteam',
  templateUrl: './editteam.component.html',
  styleUrls: ['./editteam.component.css']
})
export class EditteamComponent implements OnInit {

  team : Team = new Team();
  id!: number;

  constructor(private service: TeamService, private route: Router, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];

    this.service.getteamById(this.id).subscribe(
      (data: any) => this.team = data,
      (error: any) => console.log(error)
    )
  }

  submitEditTeam() {
    this.service.updateteam(this.team).subscribe(
      (data: any) => { this.route.navigateByUrl('admin/team') },
      (error: any) => console.log(error)
    )
  }

  logout() {
    localStorage.removeItem('value');
    this.route.navigateByUrl('/login')
  }

}
