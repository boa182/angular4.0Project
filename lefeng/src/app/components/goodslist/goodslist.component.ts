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
	Res: Object = {};
	arr: Array<string> = [];
	qty: Number= 1;
  constructor(private http: HttpService ,private common: CommonService,private router:Router ) { }
	
  ngOnInit() {
		  this.createList();
		  console.log(this.type)
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
	toDetails(gid,e){
		console.log(123);
			if(e.target.tagName!='SPAN'){
				this.common.gid = gid;
				this.router.navigate(['/details']);
				
			}
	}
	add(goodsId){		
		//这里加入购物车
		if(this.arr.indexOf(goodsId)==-1){
			this.arr.push(goodsId);
			this.http.post('addCar',{
				uid:0,
				gid:goodsId,
				qty:1
			}).then((res)=>{
				let Res = JSON.parse(JSON.stringify(res));
				console.log(Res);
			})			
		}else{
			this.http.post('updateqty',{
				uid:0,
				gid:goodsId,
			}).then((res)=>{
				let Res = JSON.parse(JSON.stringify(res));
				console.log(Res);
			})			
		}
		
	}
}
