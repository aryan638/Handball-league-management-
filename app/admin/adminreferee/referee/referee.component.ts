import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Referee } from 'src/app/Model/referee';
import { RefereeService } from 'src/app/service/referee.service';

@Component({
  selector: 'app-referee',
  templateUrl: './referee.component.html',
  styleUrls: ['./referee.component.css']
})
export class RefereeComponent implements OnInit {
  referee : Referee = new Referee();

  addReferee: any = FormGroup;

  constructor(private fb: FormBuilder, private route: Router, private service: RefereeService) { }

  ngOnInit(): void {
    this.addReferee = this.fb.group({
      RefereeName: ['', Validators.required],
      ContactNumber: ['', Validators.compose([Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])],
      ImageUrl: ['', Validators.required],
      Email: ['', Validators.compose([Validators.required, Validators.email])],
      Country: ['', Validators.required],
      Description: ['']
    })
  }

  submitAddReferee() {
    console.log(this.referee);
    this.service.addReferee(this.referee).subscribe({
      next: (res: any) => this.route.navigateByUrl('admin/referee'),
      error: (err: any) => console.log(err)

    })

  }

  logout() {
    localStorage.removeItem('value');
    this.route.navigateByUrl('/login')
  }

}
