import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from 'src/Models/LoginData';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  u : LoginData = {userId: 100, loginId : 100, userEmail : "", password : "", confirmPassword: ""};
  constructor(private _service : UserDetailsService, private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(forgotPasswordForm:any) {

    this. u = forgotPasswordForm.value;
    this.u.loginId = 500;
    this.u.userId = 500;
    this._service.changeUserPassword(this.u).subscribe(
      (res) =>
      {
        if(res.status == 200){
          alert("Password changed Successfully!");
          console.log(res);
          this.router.navigateByUrl("userLogin")
          .then(() => {
            window.location.reload();
          });
        }
      },(err) => {
        console.log(err);
        alert("There was a problem in resetting your password :(");
      }
    );
    
  }

}
