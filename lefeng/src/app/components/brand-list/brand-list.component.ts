import { Component, OnInit } from '@angular/core';

//依赖组件模块引用
import { HttpService } from './../../utils/http.service';
import { CommonService } from './../../utils/common.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit {
	resdata: Array<any> = [];
	data: Array<any> = [];
  constructor(private http: HttpService,private common:CommonService,private location: Location,private router:Router) { }

  ngOnInit() {
  	this.http.get('selectstorename',{
  			brandStoreName:this.common.brandStoreName
  	}).then((res)=>{
  			let resdata = JSON.parse(JSON.stringify(res));
  			this.data = resdata;
  			console.log(this.data);
  	})
  }
	goBack(){
  	this.location.back();
  }
	tocar(){
		this.router.navigate(['/car']);
	}
}
