import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Team } from 'src/app/Model/team';
import { TeamService } from 'src/app/service/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  team : Team = new Team();

  addTeam: any = FormGroup;

  constructor(private fb: FormBuilder, private route: Router, private service: TeamService) { }

  ngOnInit(): void {
    this.addTeam = this.fb.group({
      teamName: ['', Validators.required],
      noOfPlayers: ['', Validators.required],
      teamLocation: ['', Validators.required],
      Description: ['']
    })
  }

  submitAddTeam() {
    console.log(this.team);
    this.service.addteam(this.team).subscribe({
      next: (res: any) => this.route.navigateByUrl('admin/team'),
      error: (err: any) => console.log(err)

    })

  }

  logout() {
    localStorage.removeItem('value');
    this.route.navigateByUrl('/login')
  }


}
