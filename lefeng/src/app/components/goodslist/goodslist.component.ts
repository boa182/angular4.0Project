import { Component, OnInit,Input } from '@angular/core';

//依赖组件模块引用
import { HttpService } from './../../utils/http.service';

@Component({
  selector: 'goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.scss']
})
export class GoodslistComponent implements OnInit {
	@Input() type:Array ;
  constructor(private http: HttpService ) { }

  ngOnInit() {
			console.log(this.type);
  }
  

}
