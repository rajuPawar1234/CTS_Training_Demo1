import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserheaderComponent } from './user/userheader/userheader.component';

import { HomeComponent } from './user/home/home.component';
import { BookingComponent } from './user/booking/booking.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddflightComponent} from './admin/addflight/addflight.component';
import { AdminheaderComponent } from './admin/adminheader/adminheader.component';
import { ManageflightComponent } from './admin/manageflight/manageflight.component';
import { ManagebookingComponent } from './user/managebooking/managebooking.component';
import { BookinghistoryComponent } from './user/bookinghistory/bookinghistory.component';
import { ManagescheduleComponent } from './admin/manageschedule/manageschedule.component';
import { ManagediscountComponent } from './admin/managediscount/managediscount.component'
import { AuthgaurdService } from './auth/authgaurd.service';
import { UpdateairlineComponent } from './admin/updates/updateairline/updateairline.component';
import { UpdatescheduleComponent } from './admin/updates/updateschedule/updateschedule.component';
import { UpdatediscountComponent } from './admin/updates/updatediscount/updatediscount.component';
import { TokenInterceptorService } from './user/service/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    
    AdminComponent,
    DashboardComponent,
    AddflightComponent,
    AdminheaderComponent,

    UserComponent,
    WelcomeComponent,
    UserheaderComponent,
    HomeComponent,
    BookingComponent,
    ManageflightComponent,
    ManagebookingComponent,
    BookinghistoryComponent,
    ManagescheduleComponent,
    ManagediscountComponent,
    UpdateairlineComponent,
    UpdatescheduleComponent,
    UpdatediscountComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthgaurdService, 
    {
      provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
