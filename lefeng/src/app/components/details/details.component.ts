import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
//依赖注入
import {Location} from '@angular/common';
import { HttpService } from './../../utils/http.service';
import { CommonService } from './../../utils/common.service';
import * as $ from 'jquery';
//import {Router} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
	resdata: Array<any> = [];
	data: Array<any> = [];
	images :Array<any> = [];
	uid:any =0;
	once:Number = 1;
  constructor(private location: Location,private http: HttpService ,private common: CommonService,private router:Router) { }

  ngOnInit() {
  	this.once = 1 ;
  	this.uid = sessionStorage.getItem("uid")||0;
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
		this.router.navigate(['/car']);
		
	}
	addCar(){
		
		if(this.uid==0){
			$("#Loginmsg").show().animate({width: '250px'}, 200).fadeOut(1000);
		}else if(this.uid!=0&&this.once!=0){
			this.http.post('addCar',{
					uid:this.uid,
					gid:this.common.gid,
					qty:1
			}).then((res)=>{
					let Res = JSON.parse(JSON.stringify(res));
					$("#success").show().animate({width: '250px'}, 200).fadeOut(1000);
					this.once = 0 ;
				})			
		}
		console.log(this.common.gid)
	}

}
