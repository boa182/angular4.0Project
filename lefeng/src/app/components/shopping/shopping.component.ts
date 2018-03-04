import { Component, OnInit } from '@angular/core';

//在需要ajax请求的组件
import {Http} from '@angular/http';
import httpclient from '../../utils/httpclient';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
  	httpclient.get(this.http,'try.txt').then((res)=>{
  		console.log(res);
  	})
	}
}
