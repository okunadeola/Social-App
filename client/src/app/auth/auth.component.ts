import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public formData : FormGroup = this.form.group({})
  public isSignin : boolean = false

  constructor(public form : FormBuilder, public backend: AuthService, public navigate: Router) { }


  ngOnInit(): void {
    this.formData = this.form.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get f(){
    return this.formData.controls
  }

  submit(){
    if (this.isSignin) {
      this.login()
    }else{
      let value = this.formData.value
      this.backend.signup(value).subscribe((data)=>{
        if (data) {
          localStorage.setItem("profile", JSON.stringify(data))
        }
      })
    }

    
  }

  login(){
    try {
        this.backend.signin(this.formData.value).subscribe((data:any)=>{
        if (data) {
          localStorage.setItem("profile", JSON.stringify(data))
          this.backend.data.next(data)
          let id :any= data.result._id
          this.navigate.navigate([`/${id}/dashboard`])
        }
      })
      } catch (error:any) {
        alert(error.message)
      }
      
  }


  sign(){   
    this.formData.reset()
    this.isSignin = !this.isSignin
  }

}
