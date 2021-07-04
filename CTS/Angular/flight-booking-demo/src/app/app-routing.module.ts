import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import { HomeComponent } from './user/home/home.component';
import { UserComponent} from './user/user.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BookingComponent} from './user/booking/booking.component';
import { AddflightComponent } from './admin/addflight/addflight.component';
import {AdminheaderComponent} from './admin/adminheader/adminheader.component';
import {DashboardComponent} from './admin/dashboard/dashboard.component';
import { ManageflightComponent } from './admin/manageflight/manageflight.component';
import { ManagebookingComponent } from './user/managebooking/managebooking.component';
import { BookinghistoryComponent } from './user/bookinghistory/bookinghistory.component';
import { ManagescheduleComponent } from './admin/manageschedule/manageschedule.component';
import { ManagediscountComponent } from './admin/managediscount/managediscount.component';

const routes: Routes = [
  { path : '' , component : WelcomeComponent},
  // { path : '' , component : BookingComponent},
  { path:'register' , component : RegisterComponent,},
  { path:'login' , component : LoginComponent},

  { path: 'admin' , component : AdminComponent},
  { path: 'addflight' , component : AddflightComponent},
  { path: 'adminheader' , component : AdminheaderComponent},
  { path: 'dashboard' , component : DashboardComponent},
  { path :'manageflight' , component : ManageflightComponent},
  { path :'manageschedule' , component : ManagescheduleComponent},
  { path : 'managediscount' , component : ManagediscountComponent},

  { path:'user' , component : UserComponent},
  { path: 'userhome' , component : HomeComponent },
  { path : 'bookingflight', component : BookingComponent},
  { path: 'managebooking' , component : ManagebookingComponent },
  { path : 'bookinghistory', component : BookinghistoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
