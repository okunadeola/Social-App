import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardhomepageComponent } from './dashboardhomepage/dashboardhomepage.component';
import { DashboardprofileComponent } from './dashboardprofile/dashboardprofile.component';
import { DashboardguardGuard } from './guard/dashboardguard.guard';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'auth', component: AuthComponent},
  {path: ':id/dashboard', canActivate:[DashboardguardGuard], component: DashboardComponent, children:[
    {path: '', component: DashboardhomepageComponent},
    {path: 'profile', component:DashboardprofileComponent}
  ]},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
