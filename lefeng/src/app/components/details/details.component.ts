import { Component, OnInit } from '@angular/core';
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
  constructor(private location: Location,private http: HttpService ,private common: CommonService) { }

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


}
