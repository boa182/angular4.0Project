import { Component, OnInit,Input} from '@angular/core';

//依赖组件模块引用
import { HttpService } from './../../utils/http.service';
import { CommonService } from './../../utils/common.service';
import {Router} from '@angular/router';
import * as $ from 'jquery';

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
	carRes :Array<any> = [];
	carres:Array<any> = [];
	uid:any = 0;
  constructor(private http: HttpService ,private common: CommonService,private router:Router ) { }
	
  ngOnInit() {
  	
  		this.uid = sessionStorage.getItem("uid")||0;
  	if(this.uid!=0){
			this.http.get('selectqty',{
				uid:this.uid,
			}).then((res)=>{
				let carRes = JSON.parse(JSON.stringify(res)); 
				this.carres = carRes;
					this.arr = [];
				for(var i =0 ;i<this.carres.length;i++){
					this.arr.push(this.carres[i].gid);
				}
		})
			console.log(this.uid);
  		
  	}
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
  tocar(){
		this.router.navigate(['/car']);
	}
	toDetails(gid,e){
			if(e.target.tagName!='SPAN'){
				this.common.gid = gid;
				this.router.navigate(['/details']);
				
			}
	}
	add(goodsId){		
		if(this.uid==0){
			$("#Loginmsg").show().animate({width: '250px'}, 200).fadeOut(1000);
			
		}else if(this.uid!=0){
			//这里加入购物车,缺一个根据uid和gid请求回去的接口
			if(this.arr.indexOf(goodsId)==-1){
				this.arr.push(goodsId);
				this.http.post('addCar',{
					uid:this.uid,
					gid:goodsId,
					qty:1
				}).then((res)=>{
					let Res = JSON.parse(JSON.stringify(res));
					$("#success").show().animate({width: '250px'}, 200).fadeOut(1000);
				})			
			}else{
				this.http.post('updateqty',{
					uid:this.uid,
					gid:goodsId,
				}).then((res)=>{
					let Res = JSON.parse(JSON.stringify(res));
				
					$("#success").show().animate({width: '250px'}, 200).fadeOut(1000);
				})			
			}
			
		}
		
	}
	backTop(){
		window.onscroll = function(){
			var h =$(window).height();
			var t = 1000 + $(document).scrollTop();
			if(t>h){
				$('.toTop').fadeIn();
			}else{
				$('.toTop').fadeOut();
			}
		}
	}
	//购物车动画

}
