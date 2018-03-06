import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../utils/http.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-super-sell',
  templateUrl: './super-sell.component.html',
  styleUrls: ['./super-sell.component.scss']
})
export class SuperSellComponent implements OnInit {
  Brand:Array<any>;
  Discount:Array<any>;
  data: Array<any>;
  dataB: Array<any>;
  
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.get('selectBrand').then((res)=>{
      let data = JSON.parse(JSON.stringify(res));
      this.Brand = data;
    })
    
    this.http.get('getgoods').then((res)=>{
      let dataB =JSON.parse(JSON.stringify(res));
      this.Discount = dataB;
      console.log(this.Discount)
    })
  }

  getScroll(){
    if($('.contain').scrollTop() < 1731){
      $('.article4').removeAttr("style")
    }else{
      $('.article4').css({'position':'fixed','top':44,'z-index':'2'})
    }
  }

  getKeys(_obj){
    return Object.keys(_obj)
  }
}
