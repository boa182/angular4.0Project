## 主要目的：通过一个angular项目来学习angular框架
### 一、如何跑通项目
- 在lefeng文件下npm install -g @angular/cli
- 然后再npm install 
- 开启服务器 ng serve --open
### 二、从零搭建
#### 1.typeScript知识的学习
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
	 ng g c goodslist  商品列表页面 <br />
	 ng g c login      登录页面 <br />
	 ng g c register  注册页面 <br />
	 ng g c search    头部搜索组件 <br />
	 ng g c banner    轮播图组件 <br />
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
	
