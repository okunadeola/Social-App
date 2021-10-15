import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-dashboardnavbar',
  templateUrl: './dashboardnavbar.component.html',
  styleUrls: ['./dashboardnavbar.component.scss']
})
export class DashboardnavbarComponent implements OnInit {

  constructor(public backend: AuthService, public route : Router) { }
  public data : any
  ngOnInit(): void {
    let store :any= localStorage.getItem("profile")
    this.data  = JSON.parse(store).result
  }


  logout(){
    localStorage.removeItem("profile")
    this.backend.data.next({})
    this.route.navigate(['/'])
  }

}
