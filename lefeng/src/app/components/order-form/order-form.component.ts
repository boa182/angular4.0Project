import { Component, OnInit } from '@angular/core';

import { HttpService } from './../../utils/http.service';
import { CommonService } from './../../utils/common.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
    resdata: Array<any> = [];
    total:number = 0;
    
    constructor(private http: HttpService ,private common: CommonService,private router:Router ) { }


  ngOnInit() {
     this.http.get('connetGoods',{
        uid:0
    }).then((res) => {
        this.resdata = res;
        console.log(this.resdata);
        for(let i =0;i<res.length;i++){
            this.total = this.total + Number(res[i].goodCount);
        }
    }) 
  } 

  delete(){
    this.http.get('connetGoods',{
            uid:21
    })
  }


}
