import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { HttpService } from './../../utils/http.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private location : Location ,private router: Router,private http: HttpService) { }

  ngOnInit() {
    $('.forget').click(function(){
      alert('密码都忘记就别登录了')
		})
		
		sessionStorage.setItem('orderlist','')
  }

  back(){
    this.location.back();
  }

  login(){
		var username = document.getElementsByTagName('input')[0].value
		var password = document.getElementsByTagName('input')[1].value
		if(username.trim() == '' || password.trim() == ''){
				// alert('用户名或密码不为空')
		}else{
			this.http.get('loginapp',{username:username,password:password}).then((res)=>{
				var Res = JSON.parse(JSON.stringify(res));
				var status = Res.status;
				if(status == true){
					alert('登录成功')
					sessionStorage.setItem("username", username);
					sessionStorage.setItem("uid", Res.uid);
					this.router.navigateByUrl("my") 
				}else{
					alert('用户名或密码错误')
				}
			})
		}
  	}
}
