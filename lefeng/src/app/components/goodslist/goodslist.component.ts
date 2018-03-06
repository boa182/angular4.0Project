import { Component, OnInit,Input} from '@angular/core';

//依赖组件模块引用
import { HttpService } from './../../utils/http.service';
import { CommonService } from './../../utils/common.service';
import {Router} from '@angular/router'

@Component({
  selector: 'goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.scss']
})
export class GoodslistComponent implements OnInit {
	goodslist: Array<object> = [];
	dataset: Object = {};
	@Input() type :string = null;
  constructor(private http: HttpService ,private common: CommonService,private router:Router ) { }
	
  ngOnInit() {
  		this.createList();
  }
  
  trackByGid(item){
  	return item.gid;
  }
  createList(){
  	this.http.get('selectClass',{
				type: this.type || this.common.type
			}).then((res) => {
					this.dataset[this.type] = res;
		})	
  }
	toDetails(gid){
		this.common.gid = gid;
		this.router.navigate(['/details']);
	}
}
