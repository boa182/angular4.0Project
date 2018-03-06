import {RouterModule,Routes} from '@angular/router';
import {CarComponent} from '../components/car/car.component';
import {MyComponent} from '../components/my/my.component';
import {ListComponent} from '../components/list/list.component';
import {ClassifyComponent} from '../components/classify/classify.component';
import {ShoppingComponent} from '../components/shopping/shopping.component';
import {SuperSellComponent} from '../components/super-sell/super-sell.component';
import {LoginComponent} from '../components/login/login.component';
import {RegisterComponent} from '../components/register/register.component';
import {PinpaiComponent} from '../components/pinpai/pinpai.component';
import {OrderComponent} from '../components/order/order.component';


const appRoutes: Routes = [
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
	{path:'goodslist',component:ListComponent},
	{path:'register',component:RegisterComponent},
	{path:'pinpai',component:PinpaiComponent},
	{path:'order',component:OrderComponent},

	
]

export const RootRouter = RouterModule.forRoot(
	appRoutes,
	{ enableTracing: false}
)