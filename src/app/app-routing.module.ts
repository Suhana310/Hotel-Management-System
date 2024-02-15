import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { AddroomComponent } from './pages/addroom/addroom.component';
import { BookingsComponent } from './pages/bookings/bookings.component';
import { CasualComponent } from './pages/casual/casual.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { CustomersComponent } from './pages/customers/customers.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GuestsComponent } from './pages/guests/guests.component';
import { HeaderComponent } from './pages/header/header.component';


import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { RoomComponent } from './pages/room/room.component';
import { RoomsComponent } from './pages/rooms/rooms.component';

import { ServiceComponent } from './pages/service/service.component';
import { StatusComponent } from './pages/status/status.component';
import { SuitesComponent } from './pages/suites/suites.component';



const routes: Routes = [

  {
    path:'register', component:RegisterComponent
  },
  {
    path:'profile', component:ProfileComponent
  },
  {
    path:'dashboard', component:DashboardComponent
  },
  {
    path:'aboutus', component:AboutusComponent
  },

  {
    path:'home', component:HomeComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'addroom', component:AddroomComponent
  },
  {
    path:'header', component:HeaderComponent
  },
  {
    path:'rooms', component:RoomsComponent
  },
  {
    path:'casual', component:CasualComponent
  },
  {
    path:'guests', component:GuestsComponent
  },

  {
    path:'suites', component:SuitesComponent
  },
  {
    path:'room', component:RoomComponent
  },

  {
    path:'contactus', component:ContactusComponent
  },
  {
    path:'status', component:StatusComponent
  },

  {
    path:'service', component:ServiceComponent
  },
  {
    path:'customers', component:CustomersComponent
  },


  {
    path:'bookings', component:BookingsComponent
  },


  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
