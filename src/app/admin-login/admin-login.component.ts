import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from 'src/Models/LoginData';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  u : LoginData = {userId: 100, loginId : 100, userEmail : "", password : "", confirmPassword: ""};
  constructor(private _service : UserDetailsService, private router : Router) { }

  ngOnInit(): void {
  }
  
  onSubmit(userLoginForm:any) {

    this. u = userLoginForm.value;
    if(this.u.password == "adminPassword"){
      alert("Logged in as Admin.");
      this.router.navigateByUrl('userLoginDetailsList');
    }else {
      alert("Invalid Admin Credentials :( ")
    }
  }
}
