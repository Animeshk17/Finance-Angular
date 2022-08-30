import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from 'src/Models/LoginData';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  u : LoginData = {userId: 100, loginId : 100, userEmail : "", password : "", confirmPassword: ""};
  constructor(private _service : UserDetailsService, private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(userLoginForm:any) {

    this. u = userLoginForm.value;
    this.u.loginId = 500;
    this.u.userId = 500;
    this._service.LogUserIn(this.u).subscribe(
      (res) =>
      {
        if(res.status == 200){
          alert("Logged in Successfully!");
          console.log(res);
        }
      },(err) => {
        console.log(err);
        alert("There was a problem logging you In :( ");
        //this.router.navigateByUrl('userList');
      });
    this.router.navigateByUrl("UserLoginDetailsList")
    .then(() => {
      window.location.reload();
    });
  }
}
