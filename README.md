## 主要目的：通过一个angular项目来学习angular框架
### 参考资料：官网api  https://angular.cn/docs
### 一、如何跑通项目
#### 1.跑通app的步骤
- 在lefeng文件下npm install -g @angular/cli
- 然后再npm install 
- 开启服务器 ng serve --open
#### 2.开启后台服务器
### 二、从零搭建
#### 1.typeScript知识的学习
- 1）与JavaScript最大的区别<br />
	JavaScript是一种弱类型，即变量的类型是不确定的 <br />
	typescript最大特点就是支持强类型和ES6 Class <br />
```javascript
let name: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ name }.
I'll be ${ age + 1 } years old next month.`;
```
#### 2.搭建angular开发环境
- 安装Angular CLi
    <p>命令行输入 npm install -g @angular/cli</P>
- 检测 Angular CLI 是否安装成功
    <p>命令行输入 ng --version</p>
#### 3.开启服务器
- 在指定目录下运行：ng new myProject -style=scss
    <p>为了指定样式用scss</p>
- 启动开发服务器<br />
  cd myProject<br />
  ng serve --open

###  三、实战开始
#### 1.引入ui框架
- SUI Mobile 
#### 2.新建组件
- 在指定目录components下，命令行运行以下的代码
	
	 ng g c superSell  特卖页面【默认显示的第一个页面】<br />
	 ng g c footnav    底部导航 <br />
	 ng g c classify   分类页面 <br />
	 ng g c shopping   商场页面 <br />
	 ng g c car	   购物车页面 <br />
	 ng g c my  	   个人页面 <br />
	 ng g c list  商品列表页面 <br />
	 ng g c login      登录页面 <br />
	 ng g c register  注册页面 <br />
	 ng g c search    头部搜索组件 <br />
	 ng g c banner    轮播图组件 <br />
	 ng g c details   详情页 <br />
#### 3.配置路由
- 在src目录下新建一个router文件夹，新建一个配置文件router.ts
```javascript
	//引入组件
	import {RouterModule,Routes} from '@angular/router';
	import {CarComponent} from '../components/car/car.component';
	import {MyComponent} from '../components/my/my.component';
	import {GoodslistComponent} from '../components/goodslist/goodslist.component';
	import {ClassifyComponent} from '../components/classify/classify.component';
	import {ShoppingComponent} from '../components/shopping/shopping.component';
	import {HomeComponent} from '../components/home/home.component';
	import {SuperSellComponent} from '../components/super-sell/super-sell.component';
	import {LoginComponent} from '../components/login/login.component';
	import {RegisterComponent} from '../components/register/register.component';
//注册
const appRoutes: Routes = [
	//默认渲染SuperSellComponent
	{
		path:'',
		component:SuperSellComponent,	
	},
	{path:'shopping',component:ShoppingComponent},
	{path:'car',component:CarComponent},
	{path:'classify',component:ClassifyComponent},
	{path:'my',component:MyComponent},
	{path:'super',component:SuperSellComponent},
	{path:'login',component:LoginComponent},
	{path:'goodslist',component:GoodslistComponent},
	{path:'regster',component:RegisterComponent},
	
]

export const RootRouter = RouterModule.forRoot(
	appRoutes,
	{ enableTracing: false}
)
```
- 在根组件 --app.module.ts设置路由出口
<router-outlet></router-outlet> <br />
- 根模块 --app.module.ts
```javascript
import {RootRouter} from './router/router.ts';
	@NgModule({
    	imports: [
        	RootRouter
    	]
	})
```
- 在各页面
```javascript
<div class="bigbox">
	<div class="clearfix">
		//需要头部搜索功能的页面才渲染这个组件
		<search></search>
	</div>
	<div class="contain">
		//需要轮播图功能的页面才渲染这个组件
		<banner></banner>
		<p>
		  shopping works!
		</p>
		<a routerLink="/goodslist">跳转到列表页</a> 
	</div>
	//需要底部导航的页面才渲染这个组件
	<footnav></footnav>		
</div>
```
#### 4.配置baseUrl
- 1)往根模块引入http
```javascript
import { HttpModule } from '@angular/http';
import {HttpService} from './utils/http.service';

@NgModule({
    imports: [HttpModule],
    providers: [
  		HttpService
  	],
})
```
- 2)在utils目录下新建http.service.ts（这里get和post的坑）
```javascript
import {Http, RequestMethod, RequestOptions, Headers, URLSearchParams} from '@angular/http';

//解决传参问题
import { Injectable } from '@angular/core';
@Injectable()

export class HttpService{
	constructor(private http: Http){}

	private baseUrl = 'http://localhost:3000/';

	private getUrl(_url){
	    if(_url.startsWith('http')){
	        return _url;
	    }
	    return this.baseUrl + _url;
	}

	get(api, params = {}){
		return new Promise((resolve, reject) => {
			//添加随机数，每次请求的url问题，解决浏览器缓存问题
            params['_'] = Math.random();
            
            const ops = Object.assign({}, {params: params});
            this.http.get(this.getUrl(api), ops).toPromise().then( res => {
                resolve(res.json());
            })
        })
	}

	post(api, params = {}){
		return new Promise((resolve, reject) => {
            
            //拼接请求参数
            let urlSearchParams = new URLSearchParams();
            for(let key in params){
                urlSearchParams.append(key, params[key]);
            }
            //把参数先转成字符串
            let param = urlSearchParams.toString();
            //请求头
            let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'});
            this.http.post(this.getUrl(api), param, {headers: headers}).toPromise().then( res=> {
                resolve(res.json());
            })
        })
	}
}
```
- 3)在需要使用的组件（这里有组件坑）
```javascript
import { Component, OnInit } from '@angular/core';
//1、先把需要的东西引进来
//依赖组件模块引用
import { HttpService } from './../../utils/http.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {
//2、定义引进来的http，这一步很重要，没有会报request is not defined；
  constructor(private http: HttpService) { }

  ngOnInit() {
  //3.使用
  	this.http.get('try.txt').then((res)=>{
  		console.log(res);
  	})
	}
}
```
###  四、项目中遇到的困难
#### 1.引入第三方类库swiper（npm install方法失败了）
- 将swiper文件（swiper-3.4.2.css /swiper-3.4.2.js）放到assets文件下
- 项目目录下：（命令行）<br />
	PS:因为ts并不能准确识别js语法，所以需要用ts中的interface接口，将js转化成ts并暴露出来<br />
	npm install @types/swiper --save  配置在生产环境<br />
	npm install @types/swiper --save-dev 配置在开发环境<br />
- 在index.html引入放在assets文件夹下的swiper文件
- 全局引入swiper
在typings.d.ts文件内 声明全局的jQuery对象，全局的对象一般都放在这里声明 <br />
```javascript
/* SystemJS module definition */
declare var module: NodeModule;
	interface NodeModule {
	  id: string;
	}

declare var jquey:any;
declare var swiper:any;;
```
- 在组件内引入swiper <br />
	import * as swiper from 'swiper'
- 参照swiper的文档，在组件内写入swiper的代码结构

#### 2.请求回来的数据太多，造成的ERROR  is not assignable to type 'object[]'.Property 'includes' is missing in type '{}'.
- 第一种解决方法
```javascript
//在组件里面
	//利用深拷贝，防止数据源的改变
	let data = JSON.parse(JSON.stringify(res));
	this.goodslist = data;				
```
- 第二种解决方法
```javascript
//在组件里
//利用对象，把数据分类存储起来
	dataset: Object = {};
	this.http.get('selectClass',{
			type: this.type		
		}).then((res) => {
			this.dataset[this.type] = res;
		})	
```
#### 3.底部菜单高亮(routerLinkActive)
```javascript
	<li routerLink="/my" routerLinkActive="active">
```

#### 4.如何在angular中引入jquery(error TS2304: Cannot find name '$'.)
- 请参考这位大神：http://blog.csdn.net/home_zhang/article/details/77992734
- npm install --save jquery
- npm install @types/jquery --save
- 在组件中引入jquery	import * as $ from 'jquery';
##### 4-1.利用jquery做吸顶
```html
	<div class="buttons-tab typeNav" (click)="selectType($event)">
		<a href="#tab1" class="tab-link active button">保湿</a>
		<a href="#tab2" class="tab-link button">洗护</a>
		<a href="#tab3" class="tab-link button">防晒</a>
	</div>
```
```javascript
	getScroll(){
	    if($('.contain').scrollTop() < 1000){
	      $('.typeNav').removeAttr("style")
	    }else{
	      $('.typeNav').css({'position':'fixed','top':44,'z-index':'2','width':'100%'})
	    }
  	}
```