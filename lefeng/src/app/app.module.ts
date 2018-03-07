import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RootRouter} from './router/router';
//第一步往根模块引入http
import { HttpModule } from '@angular/http';
import {HttpService} from './utils/http.service';
import {CommonService} from './utils/common.service'
//双向绑定表单
import {FormsModule} from '@angular/forms';

//这里是引入组件
import { AppComponent } from './app.component';
import { SuperSellComponent } from './components/super-sell/super-sell.component';
import { ClassifyComponent } from './components/classify/classify.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { CarComponent } from './components/car/car.component';
import { MyComponent } from './components/my/my.component';
import { GoodslistComponent } from './components/goodslist/goodslist.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PinpaiComponent } from './components/pinpai/pinpai.component';
import { FootnavComponent } from './components/footnav/footnav.component';
import { SearchComponent } from './components/search/search.component';
import { BannerComponent } from './components/banner/banner.component';
import { ListComponent } from './components/list/list.component';
import { OrderComponent } from './components/order/order.component'
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperSellComponent,
    ClassifyComponent,
    ShoppingComponent,
    CarComponent,
    MyComponent,
    GoodslistComponent,
    LoginComponent,
    RegisterComponent,
    PinpaiComponent,
    FootnavComponent,
   	ListComponent,
    OrderComponent,
    DetailsComponent,
    SearchComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,RootRouter,HttpModule,FormsModule
  ],
  providers: [
  	HttpService,CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
