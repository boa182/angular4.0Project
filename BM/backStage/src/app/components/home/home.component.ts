import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {CommonService} from '../../utils/common.service';

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
    
    constructor(private common: CommonService) { }

    ngOnInit() {
        this.user = sessionStorage.getItem('userName')
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
}
