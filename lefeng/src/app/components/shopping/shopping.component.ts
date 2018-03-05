import { Component, OnInit } from '@angular/core';

//依赖组件模块引用
import { HttpService } from './../../utils/http.service';



@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  constructor(private http: HttpService) { }

  ngOnInit() {
  	this.http.get('try.txt').then((res)=>{
  		console.log(res);
  	})
	}
  selectType(txt){
  	console.log(txt.target.innerText)
  }
}
