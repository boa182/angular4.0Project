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
    resdata: Array<object> = [];
    Res:Array<any> = [];
    total:number = 0;
    uid:any = 0;
    type:any = 1;
    
    constructor(private http: HttpService ,private common: CommonService,private router:Router ) { }


  ngOnInit() {
  	this.uid =	sessionStorage.getItem("uid")||0;
     

    this.http.get('selectgoods_fromType',{uid:this.uid,type:1}).then((res)=>{
      var Res = JSON.parse(JSON.stringify(res))
      this.resdata = Res;
      for(let i =0;i<this.resdata.length;i++){
            this.total = this.total + Number(this.resdata[i]['goodCount']);
        }
    })
  } 

  pay(){
    this.uid =  sessionStorage.getItem("uid")||0;
    this.http.get('connetGoods',
        {uid:this.uid,type:1}
    )
    alert("付款成功");
    this.router.navigateByUrl("order")
  }

  delete(){
    this.uid =  sessionStorage.getItem("uid")||0;

    this.http.get('connetGoods',
        {uid:this.uid,type:1}
    )
  }

}
