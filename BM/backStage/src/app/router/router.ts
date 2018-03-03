import { RouterModule, Routes } from '@angular/router';

import {GoodsComponent} from "../components/goods/goods.component";
import {VipComponent} from "../components/vip/vip.component";
import {PagenotfoundComponent} from "../components/pagenotfound/pagenotfound.component";

const appRoutes:Routes=[
    {path:'goods',component:GoodsComponent},
    {path:'vip',component:VipComponent},
    {path:'**',component:PagenotfoundComponent}
]

export const RootRouter = RouterModule.forRoot(
    appRoutes,
    { enableTracing: false } 
  )