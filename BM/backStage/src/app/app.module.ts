import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RootRouter} from './router/router';
import {FormsModule} from '@angular/forms';
import {CommonService} from './utils/common.service';
import {HttpService} from './utils/http.service';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GoodsComponent } from './components/goods/goods.component';
import { VipComponent } from './components/vip/vip.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { TabletemplateComponent } from './components/tabletemplate/tabletemplate.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GoodsComponent,
    VipComponent,
    PagenotfoundComponent,
    TabletemplateComponent
  ],
  imports: [
    BrowserModule,
    RootRouter,
    FormsModule,
    HttpModule
  ],
  providers: [
    HttpService,
    CommonService
  ],
  bootstrap: [HomeComponent]
})
export class AppModule { }