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
import { UpdateairlineComponent } from './admin/updates/updateairline/updateairline.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path : '' , component : WelcomeComponent},
  // { path : '' , component : BookingComponent},
  { path:'register' , component : RegisterComponent,},
  { path:'login' , component : LoginComponent},

  { path: 'admin' , component : AdminComponent,canActivate : [AuthGuard]},
  { path: 'addflight' , component : AddflightComponent,canActivate : [AuthGuard]},
  { path: 'adminheader' , component : AdminheaderComponent,canActivate : [AuthGuard]},
  { path: 'dashboard' , component : DashboardComponent,canActivate : [AuthGuard]},
  { path :'manageflight' , component : ManageflightComponent,canActivate : [AuthGuard]},
  { path :'manageschedule' , component : ManagescheduleComponent,canActivate : [AuthGuard]},
  { path : 'managediscount' , component : ManagediscountComponent,canActivate : [AuthGuard]},
  { path : 'updateFlight/:id' , component : UpdateairlineComponent,canActivate : [AuthGuard]},

  { path:'user' , component : UserComponent,canActivate : [AuthGuard]},
  { path: 'userhome' , component : HomeComponent ,canActivate : [AuthGuard]},
  { path : 'bookingflight', component : BookingComponent,canActivate : [AuthGuard]},
  { path: 'managebooking' , component : ManagebookingComponent,canActivate : [AuthGuard] },
  { path : 'bookinghistory', component : BookinghistoryComponent,canActivate : [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
