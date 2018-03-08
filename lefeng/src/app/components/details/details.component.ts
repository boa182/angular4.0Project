import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
//依赖注入
import {Location} from '@angular/common';
import { HttpService } from './../../utils/http.service';
import { CommonService } from './../../utils/common.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
	resdata: Array<any> = [];
	data: Array<any> = [];
	images :Array<any> = [];
  constructor(private location: Location,private http: HttpService ,private common: CommonService,private router:Router) { }

  ngOnInit() {
  	this.http.get('getgid',{
  		gid:this.common.gid
  	}).then((res)=>{
  		let resdata = JSON.parse(JSON.stringify(res));
  		this.data = resdata;
  	
  		if(this.data!=[]){
			this.images = this.data[0]['allImages'].split(',')
			this.images = this.images.slice(1,-2);
  		}
  			
  	
  	})
  }
  goBack(){
  	this.location.back();
  }
	toCar(){
		console.log(123);
		//商品不为空的时候去掉购物车空的页面
		
	}

}
