import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class ProfileComponent implements OnInit {

title: String
firstName: String
lastName: String
email: String
username: String
userpassword: String

  constructor() { }

  ngOnInit(): void {
  }

}
