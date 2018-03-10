import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import {CommonService} from '../../utils/common.service';
import {GetUser} from '../../utils/getuser.service';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    constructor(private common: CommonService,private router: Router, private getUser:GetUser) { }
    user:Object={"user":"未登陆"};
    baseUrl:string=this.common['httpservice']['baseUrl'];
    imgUrl:string=this.baseUrl+"_XnftzNaklgbYKedbs5QpJpL.jpg";
    setting(){
        if($(".setting").stop().hasClass('aa')){
            $(".setting").animate({
                right:0
            })
            $(".setting").removeClass('aa')
        }else{
            $(".setting").animate({
                right:-200
            })
            $(".setting").addClass('aa')
        }
    }
    
    ngOnInit() {
        console.log(this.common['httpservice']['baseUrl']);
        this.updateUser();
       
        


        $(document).mouseup(function(e){
            var _con = $('.exit');   // 设置目标区域
            if(!_con.is(e.target) && _con.has(e.target).length === 0){ // Mark 1
                _con.css({
                    display:'none'
                })   // 功能代码
            }
        });
    }
    updateUser(){
        this.getUser.getDetails().then((res)=>{
            console.log(res);
            this.user={nickName:res[0]['nickName'],user:res[0]['username']}
            if(res[0]['imgurl']){
                this.imgUrl=this.baseUrl+res[0]['imgurl'];
            }
        });
    }

    exitUser(){
        if($(".exituser").hasClass('bb')){
            $(".exit").show();
            $(".exituser").removeClass('bb')
        }else{
            $(".exit").hide();
            $(".exituser").addClass('bb')
        }
    }
    exitUsers(){
        sessionStorage.removeItem('userName')
        this.router.navigate(['/enter/login']);
    }
    tosetting(){
        console.log(this.user);
        this.router.navigate(['home/usersetting'], {  
        queryParams: {  
            user: encodeURI(this.user['user']),  
            imgurl: encodeURI(this.imgUrl) ,
            nickName:encodeURI(this.user['nickName'])
        }  
    });  
    }
    
}
