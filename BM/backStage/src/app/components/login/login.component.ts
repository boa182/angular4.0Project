import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import $ from '../../utils/httpclient'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user:string;
    password:string;

  constructor() { }

  ngOnInit() {
  }
  login(){
    console.log(this.user);
    /*
    $.get(this.http, 'login', {user:this.user,psd:this.password}).then((res) => {
            console.log(res);
        })
    */
  }
}
