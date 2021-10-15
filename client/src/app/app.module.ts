import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardnavbarComponent } from './dashboardnavbar/dashboardnavbar.component';
import { DashboardhomepageComponent } from './dashboardhomepage/dashboardhomepage.component';
import { DashboardprofileComponent } from './dashboardprofile/dashboardprofile.component';
import { AuthComponent } from './auth/auth.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor } from './jwt.interceptor';
import { GuardService } from './service/guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DashboardComponent,
    DashboardnavbarComponent,
    DashboardhomepageComponent,
    DashboardprofileComponent,
    AuthComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:GuardService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
