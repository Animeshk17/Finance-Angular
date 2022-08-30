import { Component, OnInit } from '@angular/core';
import { User } from 'src/Models/User';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-user-details-list',
  templateUrl: './user-details-list.component.html',
  styleUrls: ['./user-details-list.component.css']
})
export class UserDetailsListComponent implements OnInit {

  userList : User[] = [];

  constructor(private _service : UserDetailsService) { }

  ngOnInit(): void {
    this._service.getUserDetails().subscribe(data => {
      this.userList = data;
      console.log(this.userList);
    })
    
  }

}
