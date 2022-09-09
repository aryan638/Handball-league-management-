import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminrefereeComponent } from './admin/adminreferee/adminreferee.component';
import { EditrefereeComponent } from './admin/adminreferee/editreferee/editreferee.component';
import { RefereeComponent } from './admin/adminreferee/referee/referee.component';
import { AdminteamComponent } from './admin/adminteam/adminteam.component';
import { EditteamComponent } from './admin/adminteam/editteam/editteam.component';
import { TeamComponent } from './admin/adminteam/team/team.component';
import { AdminuserComponent } from './admin/adminuser/adminuser.component';
import { EdituserComponent } from './admin/adminuser/edituser/edituser.component';
import { UserComponent } from './admin/adminuser/user/user.component';
import { AdminvenueComponent } from './admin/adminvenue/adminvenue.component';
import { EditvenueComponent } from './admin/adminvenue/editvenue/editvenue.component';
import { VenueComponent } from './admin/adminvenue/venue/venue.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ViewEventComponent } from './user/view-event/view-event.component';
import { ViewbookedeventComponent } from './user/viewbookedevent/viewbookedevent.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin/referee', component: AdminrefereeComponent, canActivate: [AuthGuard] },
  { path: 'admin/addReferee', component: RefereeComponent, canActivate: [AuthGuard] },
  { path: 'admin/editreferee/:id', component: EditrefereeComponent, canActivate: [AuthGuard] },
  { path: 'admin/customer', component: AdminuserComponent, canActivate: [AuthGuard] },
  { path: 'admin/addeditCustomer', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'admin/editCustomer/:id', component: EdituserComponent, canActivate: [AuthGuard] },
  { path: 'admin/Venue', component: AdminvenueComponent, canActivate: [AuthGuard] },
  { path: 'admin/addVenue', component: VenueComponent, canActivate: [AuthGuard] },
  { path: 'admin/editVenue/:id', component: EditvenueComponent, canActivate: [AuthGuard] },
  { path: 'admin/team', component: AdminteamComponent, canActivate: [AuthGuard] },
  { path: 'admin/addTeam', component: TeamComponent, canActivate: [AuthGuard] },
  { path: 'admin/editteam/:id', component: EditteamComponent, canActivate: [AuthGuard] },
  { path: 'user/venue/:id', component: ViewEventComponent, canActivate: [AuthGuard] },
  { path: 'user/bookedvenue/:id', component: ViewbookedeventComponent, canActivate: [AuthGuard] },

  { path: '', redirectTo: '/login', pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
