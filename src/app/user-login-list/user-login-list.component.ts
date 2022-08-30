import { Component, OnInit } from '@angular/core';
import { UserLoginDetails } from 'src/Models/UserLoginDetails';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-user-login-list',
  templateUrl: './user-login-list.component.html',
  styleUrls: ['./user-login-list.component.css']
})
export class UserLoginListComponent implements OnInit {

  userLoginDetailsList : UserLoginDetails [] = [];

  constructor(private _service:UserDetailsService) { }

  ngOnInit(): void {

    this._service.getUserAndLoginDetails().subscribe(data => {
      this.userLoginDetailsList = data;
      console.log(this.userLoginDetailsList);
    })
  }

  verifyUserButtonPressed(){
    alert("Verification initiated");
  }
}
