import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './include/navbar/navbar.component';
import { FooterComponent } from './include/footer/footer.component';

import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';


import { BookingsComponent } from './pages/bookings/bookings.component';

import { LoginComponent } from './pages/login/login.component';
import { ServiceComponent } from './pages/service/service.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { SuitesComponent } from './pages/suites/suites.component';
import { CasualComponent } from './pages/casual/casual.component';
import { RoomComponent } from './pages/room/room.component';
import { CustomersComponent } from './pages/customers/customers.component';

import { StatusComponent } from './pages/status/status.component';
import { GuestsComponent } from './pages/guests/guests.component';
import { HeaderComponent } from './pages/header/header.component';
import { CheckInComponent } from './pages/check-in/check-in.component';
import { HousekeepingComponent } from './pages/housekeeping/housekeeping.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AddroomComponent } from './pages/addroom/addroom.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,

    RegisterComponent,
    ProfileComponent,
    DashboardComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,

    BookingsComponent,

    LoginComponent,
    ServiceComponent,

     RoomsComponent,
     SuitesComponent,
     CasualComponent,
     RoomComponent,
     CustomersComponent,

     StatusComponent,
     GuestsComponent,
     HeaderComponent,
     CheckInComponent,
     HousekeepingComponent,
     AddroomComponent






  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,


BrowserAnimationsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
