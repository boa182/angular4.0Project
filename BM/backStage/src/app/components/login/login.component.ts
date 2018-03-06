import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../utils/http.service';
import {CommonService} from '../../utils/common.service'
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user:string;
    password:string;

  constructor(private httpserver:HttpService, private common: CommonService ,private router: Router) { }

  ngOnInit() {
  }
  login(){
    console.log(this.user,this.password);
    
     this.httpserver.get( 'login', {user:this.user,psd:this.password}).then((res) => {
            console.log(res);
            
            if(res['length']==0){
              alert('password error');
<<<<<<< HEAD
            }else if(res.length==1){
              sessionStorage.setItem('userName',this.user)
              console.log(sessionStorage.getItem('userName'))
=======
            }else if(res['length']==1){
>>>>>>> 4fcd3372a2cfef0e0618c663872400b0485013ce
              this.router.navigate(['/home']);
            }

        })
    
  }
}
