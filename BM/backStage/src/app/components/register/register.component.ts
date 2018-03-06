import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../utils/http.service';
import {CommonService} from '../../utils/common.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    user:string;
    password:string;
    askRes:string;
  constructor(private common: CommonService,private httpserver:HttpService, private router: Router) { }

  ngOnInit() {
  }
  register(){
    console.log(this.user,this.password);
    this.httpserver.post( 'register', {user:this.user,psd:this.password}).then((res) => {
            console.log(res);
            //console.log(res._body);
            if(res['_body']=='exist'){
                this.askRes='exist';
            }else if(res['_body']=='success'){
                alert('注册成功');
                this.askRes='success';
                console.log(this);
                this.router.navigate(['/enter/login']);
            }
        })
    
  }
}
