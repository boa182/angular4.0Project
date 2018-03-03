import { RouterModule, Routes } from '@angular/router';

import {GoodsComponent} from "../components/goods/goods.component";
import {VipComponent} from "../components/vip/vip.component";
import {PagenotfoundComponent} from "../components/pagenotfound/pagenotfound.component";
import {LoginComponent} from '../components/login/login.component';
import { LogRegisterComponent} from '../components/log-register/log-register.component';
import {RegisterComponent} from '../components/register/register.component';

const appRoutes:Routes=[
    {path:'goods',component:GoodsComponent},
    {path:'vip',component:VipComponent},
    {path:'enter',component:LogRegisterComponent,children: [
            {path: 'login', component:LoginComponent},
            {path:'register',component:RegisterComponent}
        ]}
    {path:'**',component:PagenotfoundComponent}

]

export const RootRouter = RouterModule.forRoot(
    appRoutes,
    { enableTracing: false } 
  )