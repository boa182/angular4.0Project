import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    setting(){
        if($(".setting").toggleClass('aa')){
            $(".setting").css({
                display:"block"
            }).animate({
                right:0
            })
        }
    }
    
    constructor() { }

    ngOnInit() {
    }

}
