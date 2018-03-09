import { RouterModule, Routes } from '@angular/router';

import {GoodsComponent} from "../components/goods/goods.component";
import {VipComponent} from "../components/vip/vip.component";
import {PagenotfoundComponent} from "../components/pagenotfound/pagenotfound.component";
import {LoginComponent} from '../components/login/login.component';
import { LogRegisterComponent} from '../components/log-register/log-register.component';
import {RegisterComponent} from '../components/register/register.component';
import {HomeComponent} from '../components/home/home.component';
import {DetailsComponent} from '../components/details/details.component';
import {StatisticsComponent} from '../components/statistics/statistics.component';
import {GoodsSellComponent} from '../components/goods-sell/goods-sell.component';
import {AddgoodsComponent} from  '../components/addgoods/addgoods.component';
import {UserSettingComponent} from  '../components/user-setting/user-setting.component';

const appRoutes:Routes=[
    {path:'enter',component:LogRegisterComponent,children: [
            {path: 'login', component:LoginComponent},
            {path:'register',component:RegisterComponent}
        ]},
    {path:'home',component:HomeComponent,children: [
        {path:'goods',component:GoodsComponent},
        {path:'vip',component:VipComponent},
        {path:'details',component:DetailsComponent},
        {path:'statistics',component:StatisticsComponent},
        {path:'GoodsSell',component:GoodsSellComponent},
        {path:'add',component:AddgoodsComponent},
        {path:'usersetting',component:UserSettingComponent}
    ]},
    {path:'**',component:PagenotfoundComponent}

]

export const RootRouter = RouterModule.forRoot(
    appRoutes,
    { enableTracing: false } 
  )