import { Component, OnInit } from '@angular/core';

//依赖组件模块引用
import { HttpService } from './../../utils/http.service';
import { CommonService } from './../../utils/common.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private http: HttpService,private common:CommonService,private location: Location,private router:Router) { }

  ngOnInit() {
  }
	goBack(){
  	this.location.back();
  }
	
}
