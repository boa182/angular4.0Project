import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private location : Location) { }

  ngOnInit() {
    $('.forget').click(function(){
      alert('密码都忘记就别登录了')
    })
  }

  back(){
    this.location.back();
  }


}
