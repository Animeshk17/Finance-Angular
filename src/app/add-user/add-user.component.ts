import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginDetails } from 'src/Models/UserLoginDetails';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit {

  u: UserLoginDetails = {userId : 1, name : "Animesh", phone : "9934131119", address : "Bihar",
  userEmail: "animeshk@gmail.com", password:"pswd@123", confirmPassword:"pswd@123", account_number:"11112222334",
  ifsc_code: "SBIN0008880", is_verified : false};
   
  constructor(private _service : UserDetailsService, private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(userRegistrationForm:any) {
    this.u = userRegistrationForm.value;
    this._service.addUser(this.u).subscribe(data =>{

    });
    this.router.navigateByUrl("userLoginDetailsList")
    .then(() => {
      window.location.reload();
    });

  }

}
