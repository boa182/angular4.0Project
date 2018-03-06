import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../utils/http.service';

@Component({
  selector: 'app-super-sell',
  templateUrl: './super-sell.component.html',
  styleUrls: ['./super-sell.component.scss']
})
export class SuperSellComponent implements OnInit {
  Brand:Array<any>;
  Discount:Array<any>;

  constructor(private http: HttpService) { }

  ngOnInit() {
    // this.http.get('selectBrand').then((res)=>{
    //   this.Brand = res;
    // })
    
    this.http.get('getgoods').then((res)=>{
      this.Discount = res;
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
