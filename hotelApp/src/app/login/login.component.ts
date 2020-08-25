import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Order } from '../Models/Order';

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
    this.sharedService.selectedOrder=new Order();
  }

  onClear(){
    this.pinText="";
  }

}
