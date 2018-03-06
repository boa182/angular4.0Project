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
<<<<<<< HEAD
import {OrderComponent} from '../components/order/order.component';

=======
import {DetailsComponent} from '../components/details/details.component';
>>>>>>> 7303869d97031bc6285523417286d67a2f50d6a5

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
<<<<<<< HEAD
	{path:'order',component:OrderComponent},

=======
	{path:'details',component:DetailsComponent}
>>>>>>> 7303869d97031bc6285523417286d67a2f50d6a5
	
]

export const RootRouter = RouterModule.forRoot(
	appRoutes,
	{ enableTracing: false}
)