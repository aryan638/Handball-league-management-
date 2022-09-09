import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminrefereeComponent } from './admin/adminreferee/adminreferee.component';
import { AdminvenueComponent } from './admin/adminvenue/adminvenue.component';
import { AdminteamComponent } from './admin/adminteam/adminteam.component';
import { AdminuserComponent } from './admin/adminuser/adminuser.component';
import { RefereeComponent } from './admin/adminreferee/referee/referee.component';
import { EditrefereeComponent } from './admin/adminreferee/editreferee/editreferee.component';
import { VenueComponent } from './admin/adminvenue/venue/venue.component';
import { EditvenueComponent } from './admin/adminvenue/editvenue/editvenue.component';
import { TeamComponent } from './admin/adminteam/team/team.component';
import { EditteamComponent } from './admin/adminteam/editteam/editteam.component';
import { UserComponent } from './admin/adminuser/user/user.component';
import { EdituserComponent } from './admin/adminuser/edituser/edituser.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ViewbookedeventComponent } from './user/viewbookedevent/viewbookedevent.component';
import { RegistrationServiceService } from './service/registration-service.service';
import { RefereeService } from './service/referee.service';
import { VenueService } from './service/venue.service';
import { TeamService } from './service/team.service';
import { CustomerService } from './service/customer.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { ViewEventComponent } from './user/view-event/view-event.component';
import { SearchFilterPipe } from './search-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AdminrefereeComponent,
    AdminvenueComponent,
    AdminteamComponent,
    AdminuserComponent,
    RefereeComponent,
    EditrefereeComponent,
    VenueComponent,
    EditvenueComponent,
    TeamComponent,
    EditteamComponent,
    UserComponent,
    EdituserComponent,
    LoginComponent,
    SignupComponent,
    ViewbookedeventComponent,
    ViewEventComponent,
    SearchFilterPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [RegistrationServiceService,RefereeService,VenueService,TeamService,CustomerService,AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
