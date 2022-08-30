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

  u : LoginData = {userId: 100, loginId : 100, userEmail : "cv", password : "", confirmPassword: ""};
  constructor(private _service : UserDetailsService, private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(userLoginForm:any) {

    this. u = userLoginForm.value;
    var a = userLoginForm.value;
    var b = JSON.stringify(a);
    var loggedEmail = b.slice(b.indexOf(":")+2,b.indexOf("@"))+"@gmail.com";
    localStorage.setItem('loggedUserEmail',loggedEmail);
    var c = localStorage.getItem('loggedUserEmail');
    console.log(c);
    this.u.loginId = 500;
    this.u.userId = 500;
    this._service.LogUserIn(this.u).subscribe(
      (res) =>
      {
        if(res.status == 200){
          alert(`Hello ${c}!`);
          this.router.navigateByUrl("product")
          .then(() => {
            window.location.reload();
          });
        }
      },(err) => {
        console.log(err);
        alert("There was a problem logging you In :( ");
      });
      
    
  }
}
