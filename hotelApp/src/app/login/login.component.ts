import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private sharedService:SharedService) { }

  pinText="";

  ngOnInit(): void {
  }

  appendPinText(num)
  {
    this.pinText+=num;
  }

  onLogin(){
    this.sharedService.isLoggedIn=true;
  }

  onClear(){
    this.pinText="";
  }

}
