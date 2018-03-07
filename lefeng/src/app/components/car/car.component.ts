import { Component, OnInit } from '@angular/core';

//依赖组件模块引用
import { HttpService } from './../../utils/http.service';
import { CommonService } from './../../utils/common.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
	carType: string = null;
  constructor(private http: HttpService,private common:CommonService) { }

  ngOnInit() {
  	if(this.common.carType=='0'){
  		//控制购物车不为空页面显示与否
  		this.carType = this.common.carType;
  		
  	}
  	
  }
  changcount(){
  	console.log(123);
  }
	del(){
		console.log("del")
	}
}
