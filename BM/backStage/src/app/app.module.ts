import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RootRouter} from './router/router';
import {FormsModule} from '@angular/forms';
import {CommonService} from './utils/common.service';
import {HttpService} from './utils/http.service';
import {GetUser} from './utils/getuser.service';
import {HttpModule} from '@angular/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GoodsComponent } from './components/goods/goods.component';
import { VipComponent } from './components/vip/vip.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { TabletemplateComponent } from './components/tabletemplate/tabletemplate.component';
import { LoginComponent } from './components/login/login.component';
import { FormtemplateComponent } from './components/formtemplate/formtemplate.component';
import { LogRegisterComponent } from './components/log-register/log-register.component';
import { RegisterComponent } from './components/register/register.component';
import { DetailsComponent } from './components/details/details.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { GoodsSellComponent } from './components/goods-sell/goods-sell.component';
import { AddgoodsComponent } from './components/addgoods/addgoods.component';
import { UserSettingComponent } from './components/user-setting/user-setting.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GoodsComponent,
    VipComponent,
    PagenotfoundComponent,
    TabletemplateComponent,
    LoginComponent,
    FormtemplateComponent,
    LogRegisterComponent,
    RegisterComponent,
    DetailsComponent,
    StatisticsComponent,
    GoodsSellComponent,
    AddgoodsComponent,
    UserSettingComponent
  ],
  imports: [
    BrowserModule,
    RootRouter,
    FormsModule,
    HttpModule,
    BsDropdownModule.forRoot()
  ],
  providers: [
    HttpService,
    CommonService,
    GetUser
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
