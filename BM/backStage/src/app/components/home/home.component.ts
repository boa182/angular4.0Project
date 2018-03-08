import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
    user:string;

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
    
    constructor(private router: Router) { }

    ngOnInit() {
        this.user = sessionStorage.getItem('userName')
        $(document).mouseup(function(e){
            var _con = $('.exit');   // 设置目标区域
            if(!_con.is(e.target) && _con.has(e.target).length === 0){ // Mark 1
                _con.css({
                    display:'none'
                })   // 功能代码
            }
        });
    }
    exitUser(){
        if($(".exituser").hasClass('bb')){
            $(".exit").css({
                display:'block'
            })
            $(".exituser").removeClass('bb')
        }else{
            $(".exit").css({
                display:'none'
            })
            $(".exituser").addClass('bb')
        }
    }
    exitUsers(){
        console.log(666)
        sessionStorage.removeItem('userName')
        this.router.navigate(['/enter/login']);
    }
    
}
