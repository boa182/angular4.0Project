import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../utils/http.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

	constructor(private http: HttpService,private router: Router) { }

	ngOnInit() {
	}

	register(){
		var username = document.getElementsByTagName('input')[0].value
		var password = document.getElementsByTagName('input')[1].value
		if(username.trim() == '' || password.trim() == ''){
			alert('用户名或密码不为空')
			console.log(username,password)
		}
		else{
			this.http.post('registerapp',{user:username,psd:password}).then((res)=>{
				var Res = JSON.parse(JSON.stringify(res));
				if(Res.status == '该帐号已注册'){
					alert('该帐号已注册')
				}else{
					alert('注册成功')
					this.router.navigateByUrl("login") 
				}
			})
		}
		
	}
}
