## 主要目的：通过一个angular项目来学习angular框架
### 一、如何跑通项目
- 在lefeng文件下npm install -g @angular/cli
- npm install 
- 开启服务器
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
#### 4.引入ui框架
- SUI Mobile 
#### 5.新建组件
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
#### 6.配置路由
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
		<div class="contain">
			<p>
			  shopping works!
			</p>
			<a routerLink="/goodslist">跳转到列表页</a> 
		</div>
		//需要底部导航的页面，才渲染footnav这个组件
		<footnav></footnav>		
	</div>
```


###  三、实战开始
###  四、项目中遇到的困难
