import { Component, OnInit,Input} from '@angular/core';

//依赖组件模块引用
import { HttpService } from './../../utils/http.service';
import { CommonService } from './../../utils/common.service';

@Component({
  selector: 'goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.scss']
})
export class GoodslistComponent implements OnInit {
	goodslist: Array<object> = [];
	dataset: Object = {};
	@Input() type :string = null;
  constructor(private http: HttpService ,private common: CommonService ) { }
	
  ngOnInit() {
			this.createList();
			console.log(this.common.type)
  }
  
  trackByGid(item){
  	return item.gid;
  }
  createList(){
  	this.http.get('selectClass',{
				type: this.type || this.common.type
			}).then((res) => {
//				数据太多,ERROR  is not assignable to type 'object[]'.Property 'includes' is missing in type '{}'.
//				let data = JSON.parse(JSON.stringify(res));
//				this.goodslist = data;				
//				this.goodslist = res;
					this.dataset[this.type] = res;
		})	
  }

}
