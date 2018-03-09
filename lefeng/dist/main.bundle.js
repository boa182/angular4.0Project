webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'lefeng';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_router__ = __webpack_require__("./src/app/router/router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_http_service__ = __webpack_require__("./src/app/utils/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_common_service__ = __webpack_require__("./src/app/utils/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_super_sell_super_sell_component__ = __webpack_require__("./src/app/components/super-sell/super-sell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_classify_classify_component__ = __webpack_require__("./src/app/components/classify/classify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_shopping_shopping_component__ = __webpack_require__("./src/app/components/shopping/shopping.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_car_car_component__ = __webpack_require__("./src/app/components/car/car.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_my_my_component__ = __webpack_require__("./src/app/components/my/my.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_goodslist_goodslist_component__ = __webpack_require__("./src/app/components/goodslist/goodslist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_pinpai_pinpai_component__ = __webpack_require__("./src/app/components/pinpai/pinpai.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_footnav_footnav_component__ = __webpack_require__("./src/app/components/footnav/footnav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_search_search_component__ = __webpack_require__("./src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_banner_banner_component__ = __webpack_require__("./src/app/components/banner/banner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_list_list_component__ = __webpack_require__("./src/app/components/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_order_order_component__ = __webpack_require__("./src/app/components/order/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_details_details_component__ = __webpack_require__("./src/app/components/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_brand_list_brand_list_component__ = __webpack_require__("./src/app/components/brand-list/brand-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_order_form_order_form_component__ = __webpack_require__("./src/app/components/order-form/order-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//第一步往根模块引入http



//双向绑定表单

//这里是引入组件


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_super_sell_super_sell_component__["a" /* SuperSellComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_classify_classify_component__["a" /* ClassifyComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_shopping_shopping_component__["a" /* ShoppingComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_car_car_component__["a" /* CarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_my_my_component__["a" /* MyComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_goodslist_goodslist_component__["a" /* GoodslistComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_pinpai_pinpai_component__["a" /* PinpaiComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_footnav_footnav_component__["a" /* FootnavComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_order_order_component__["a" /* OrderComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_details_details_component__["a" /* DetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_brand_list_brand_list_component__["a" /* BrandListComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_order_form_order_form_component__["a" /* OrderFormComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_banner_banner_component__["a" /* BannerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__router_router__["a" /* RootRouter */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__utils_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_5__utils_common_service__["a" /* CommonService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/banner/banner.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Swiper -->\r\n<div class=\"swiper-container\">\r\n    <div class=\"swiper-wrapper\">\r\n        <div class=\"swiper-slide\">\r\n        \t<img src=\"http://b.appsimg.com/upload/maappactadmin/2018/02/27/14/151969797178_1125x450_80.jpg\"/>\r\n        </div>\r\n        <div class=\"swiper-slide\">\r\n        \t<img src=\"http://b.appsimg.com/upload/maappactadmin/2018/02/24/74/151946726427_1125x450_80.jpg\"/>\r\n    \t</div>\r\n        <div class=\"swiper-slide\">\r\n        \t<img src=\"http://b.appsimg.com/upload/maappactadmin/2018/02/27/153/151969892357_1125x450_80.jpg\"/>\r\n        </div>\r\n        <div class=\"swiper-slide\">\r\n        \t<img src=\"http://b.appsimg.com/upload/maappactadmin/2018/02/27/63/151969906966_1125x450_80.jpg\"/>\r\n        </div>\r\n    </div>\r\n    <!-- Add Pagination -->\r\n    <div class=\"swiper-pagination\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/banner/banner.component.scss":
/***/ (function(module, exports) {

module.exports = ".swiper-container {\n  height: 9.333333rem; }\n\n.swiper-pagination {\n  top: 6.266667rem; }\n\n.swiper-slide img {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/components/banner/banner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
    }
    BannerComponent.prototype.ngOnInit = function () {
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: 2500,
            autoplayDisableOnInteraction: false,
            loop: true
        });
    };
    BannerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'banner',
            template: __webpack_require__("./src/app/components/banner/banner.component.html"),
            styles: [__webpack_require__("./src/app/components/banner/banner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/components/brand-list/brand-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bigbox\">\r\n\t<div class=\"listhead\">\r\n\t\t<p *ngIf=\"common.brandStoreName\">\r\n\t \t\t<span class=\"icon icon-left\"  (click)=\"goBack()\"></span>\r\n\t \t\t{{common.brandStoreName}}\r\n\t\t</p>\r\n\t\t\t \r\n\t</div>\r\n\t\r\n\t\t<div class=\"listFun\">\r\n\t\t\t<ul>\r\n\t\t\t\t<li>价格排序</li>\r\n\t\t\t\t<li>销量</li>\r\n\t\t\t\t<li>筛选</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t\t<div class=\"listBox\">\r\n\t\t<div class=\"brandShow\" *ngFor=\"let obj of data\">\r\n\t\t\t<img [src]=\"obj.brandImage\" />\r\n\t\t</div>\r\n\t\t\t\t<goodslist [type]=\"common.brandStoreName\"></goodslist>\r\n\t\t</div>\r\n\t\r\n\t<ul class=\"listAside\">\r\n\t\t<li><img src=\"./../../../assets/images/n1.jpg\" /></li>\r\n\t\t<li><img src=\"./../../../assets/images/n2.jpg\" /></li>\r\n\t\t<li (click)=\"tocar()\"><img src=\"./../../../assets/images/n3.jpg\" /></li>\r\n\t</ul>\r\n</div>\n"

/***/ }),

/***/ "./src/app/components/brand-list/brand-list.component.scss":
/***/ (function(module, exports) {

module.exports = ".listhead {\n  height: 2.2rem;\n  line-height: 2.2rem; }\n  .listhead p {\n    width: 100%;\n    text-align: center;\n    font-weight: bold;\n    font-size: 1.326666rem;\n    border: 1px solid #F3F3F3; }\n  .listhead p span {\n      padding-left: 0.4rem;\n      float: left;\n      font-size: 0.8rem; }\n  .listFun {\n  height: 2.2rem;\n  line-height: 2.2rem;\n  border: 1px solid #F3F3F3; }\n  .listFun ul {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .listFun ul li {\n      width: 33.3%;\n      text-align: center; }\n  .listFun ul li:nth-child(2) {\n      border-right: 1px solid #F3F3F3;\n      border-left: 1px solid #F3F3F3; }\n  .listBox {\n  height: 100%;\n  overflow-y: scroll;\n  position: relative; }\n  .listAside {\n  position: fixed;\n  bottom: 30px;\n  right: 20px;\n  width: 52px; }\n  .listAside img {\n    width: 100%; }\n  .brandShow img {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/components/brand-list/brand-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_http_service__ = __webpack_require__("./src/app/utils/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_common_service__ = __webpack_require__("./src/app/utils/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//依赖组件模块引用




var BrandListComponent = /** @class */ (function () {
    function BrandListComponent(http, common, location, router) {
        this.http = http;
        this.common = common;
        this.location = location;
        this.router = router;
        this.resdata = [];
        this.data = [];
    }
    BrandListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('selectstorename', {
            brandStoreName: this.common.brandStoreName
        }).then(function (res) {
            var resdata = JSON.parse(JSON.stringify(res));
            _this.data = resdata;
            console.log(_this.data);
        });
    };
    BrandListComponent.prototype.goBack = function () {
        this.location.back();
    };
    BrandListComponent.prototype.tocar = function () {
        this.router.navigate(['/car']);
    };
    BrandListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-brand-list',
            template: __webpack_require__("./src/app/components/brand-list/brand-list.component.html"),
            styles: [__webpack_require__("./src/app/components/brand-list/brand-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__utils_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__utils_common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], BrandListComponent);
    return BrandListComponent;
}());



/***/ }),

/***/ "./src/app/components/car/car.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bigbox\">\r\n\t<div class=\"contain\">\r\n\t\t<div id=\"chead\">\r\n\t\t\t购物车\r\n\t\t</div>\r\n\t\t<div class=\"ccon\" [ngStyle]=\"style\">\r\n\t\t\t<img src=\"./../../../assets/images/n4.jpg\"/>\r\n\t\t\t<p routerLink=\"/shopping\" >现在去购物咯~❤</p>\r\n\t\t</div>\r\n\t\t<div class=\"ncon\" *ngIf=\"carRes\">\r\n\t\t\t<ul *ngFor=\"let obj of carRes\">\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<img [src]=\"obj.verticalImage\" (click)=\"todetails(obj.gid)\"/>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t<b>{{obj.brandStoreName}}</b>\r\n\t\t\t\t\t\t\t{{obj.name}}\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<p class=\"price\">\r\n\t\t\t\t\t\t\t￥{{obj.vipshopPrice*obj.qty}}\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<p class=\"count\">\r\n\t\t\t\t\t\t\t<span (click)='reduceQty(obj.gid,obj.qty)'>-</span>\r\n\t\t\t\t\t\t\t<span>{{obj.qty}}</span>\r\n\t\t\t\t\t\t\t<span (click)='addQty(obj.gid)'>+</span>\r\n\t\t\t\t\t\t\t<span class=\"icon icon-remove\" (click)=\"del(obj.gid)\"></span>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t\t<div class=\"carNav\" [ngStyle]=\"navstyle\">\r\n\t\t\t<span>总金额：<b>￥{{count}}</b></span>\r\n\t\t\t<span (click)=\"account()\">立即结算</span>\r\n\t\t</div>\r\n\t</div>\r\n\t<footnav></footnav>\r\n</div>\r\n<div id=\"success\">删除成功</div>"

/***/ }),

/***/ "./src/app/components/car/car.component.scss":
/***/ (function(module, exports) {

module.exports = "#chead {\n  height: 2.2rem;\n  text-align: center;\n  line-height: 2.2rem;\n  border: 1px solid #DADCDB; }\n\n.ccon {\n  background-color: #F2F2F2;\n  height: 100%;\n  overflow-y: scroll; }\n\n.ccon img {\n    width: 100%; }\n\n.ccon p {\n    margin: 100px;\n    width: 200px;\n    height: 40px;\n    line-height: 40px;\n    text-align: center;\n    background: #FF0056;\n    color: #fff;\n    position: absolute; }\n\n.ncon {\n  height: 100%;\n  overflow-y: scroll;\n  background-color: #F2F2F2;\n  padding-top: 20px; }\n\n.ncon ul li {\n    background: #fff;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding: 15px;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    margin-bottom: 15px; }\n\n.ncon ul li b {\n      font-weight: bold;\n      margin-right: 10px; }\n\n.ncon ul li img {\n      width: 30%;\n      height: 100%; }\n\n.ncon ul li > div {\n      width: 65%; }\n\n.ncon ul li p {\n      padding: 10px 0; }\n\n.ncon ul li .price {\n      color: red; }\n\n.ncon ul li .count span {\n      display: inline-block;\n      width: 30px;\n      height: 30px;\n      border: 1px solid #CCCCCC;\n      text-align: center;\n      line-height: 30px;\n      margin: 0 -3px; }\n\n.ncon ul li .count span:active {\n      color: yellow;\n      border: 1px solid yellow; }\n\n.ncon ul li .count span:nth-child(4) {\n      float: right;\n      border: 0 none; }\n\n.carNav {\n  height: 2.6rem;\n  line-height: 2.6rem;\n  border-top: 1px solid #DEDEDE; }\n\n.carNav span {\n    margin-left: 10px; }\n\n.carNav span b {\n      color: red; }\n\n.carNav span:nth-child(2) {\n    display: block;\n    float: right;\n    height: 2rem;\n    width: 100px;\n    background: #FF0056;\n    color: #F6F2F3;\n    text-align: center;\n    line-height: 2rem;\n    margin-top: 0.2rem;\n    margin-right: 10px; }\n\n#success {\n  position: fixed;\n  top: 300px;\n  right: 35px;\n  z-index: 10000;\n  width: 1px;\n  height: 52px;\n  line-height: 52px;\n  font-size: 20px;\n  text-align: center;\n  color: #fff;\n  background: red;\n  display: none; }\n"

/***/ }),

/***/ "./src/app/components/car/car.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_http_service__ = __webpack_require__("./src/app/utils/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_common_service__ = __webpack_require__("./src/app/utils/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//依赖组件模块引用




var CarComponent = /** @class */ (function () {
    function CarComponent(http, common, router) {
        this.http = http;
        this.common = common;
        this.router = router;
        this.style = { 'display': 'block' };
        this.navstyle = { 'display': 'none' };
        this.Res = [];
        this.carRes = [];
        this.QtyRes = [];
        this.qtyArr = [];
        this.count = 0;
        this.uid = "0";
    }
    CarComponent.prototype.ngOnInit = function () {
        this.uid = sessionStorage.getItem("uid") || 0;
        if (this.uid == 0) {
            this.style = { 'display': 'block' };
            this.navstyle = { 'display': 'none' };
        }
        else if (this.uid != 0 && this.qtyArr != []) {
            this.style = { 'display': 'none' };
            this.navstyle = { 'display': 'block' };
        }
        this.createList();
    };
    CarComponent.prototype.addQty = function (gid) {
        var _this = this;
        this.http.post('updateqty', {
            uid: this.uid,
            gid: gid,
        }).then(function (res) {
            _this.count = 0;
            _this.createList();
        });
    };
    CarComponent.prototype.del = function (gid) {
        var _this = this;
        this.http.get('deletegoods', {
            uid: this.uid,
            gid: gid
        }).then(function (res) {
            _this.count = 0;
            _this.createList();
            __WEBPACK_IMPORTED_MODULE_4_jquery__("#success").show().animate({ width: '250px' }, 200).fadeOut(1000);
        });
    };
    CarComponent.prototype.reduceQty = function (gid, qty) {
        var _this = this;
        if (qty > 1) {
            this.http.post('reduceqty', {
                uid: this.uid,
                gid: gid,
            }).then(function (res) {
                _this.count = 0;
                _this.createList();
            });
        }
    };
    CarComponent.prototype.account = function () {
        var _this = this;
        var a = JSON.stringify(this.qtyArr);
        sessionStorage.setItem("orderlist", a);
        this.style = { 'display': 'none' };
        this.http.get('createOrder', {
            uid: this.uid
        }).then(function (ares) {
            console.log(ares);
            _this.navstyle = { 'display': 'none' };
            _this.router.navigate(['/order']);
        });
    };
    CarComponent.prototype.createList = function () {
        var _this = this;
        this.http.get('selectqty', {
            uid: this.uid
        }).then(function (qtyres) {
            var QtyRes = JSON.parse(JSON.stringify(qtyres));
            _this.qtyArr = QtyRes;
            _this.http.get('connetGoods', {
                uid: _this.uid
            }).then(function (res) {
                var Res = JSON.parse(JSON.stringify(res));
                _this.carRes = Res;
                for (var i = 0; i < _this.carRes.length; i++) {
                    if (_this.carRes[i].gid == _this.qtyArr[i].gid) {
                        _this.carRes[i].qty = _this.qtyArr[i].qty;
                    }
                }
                _this.countPrice();
            });
        });
    };
    CarComponent.prototype.countPrice = function () {
        for (var i = 0; i < this.carRes.length; i++) {
            this.count += this.carRes[i].qty * this.carRes[i].vipshopPrice;
        }
    };
    CarComponent.prototype.todetails = function (gid) {
        this.common.gid = gid;
        this.router.navigate(['/details']);
    };
    CarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-car',
            template: __webpack_require__("./src/app/components/car/car.component.html"),
            styles: [__webpack_require__("./src/app/components/car/car.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__utils_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__utils_common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], CarComponent);
    return CarComponent;
}());



/***/ }),

/***/ "./src/app/components/classify/classify.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bigbox clearfix\">\r\n\t<div class=\"clearfix\">\r\n\t\t<search></search>\r\n\t</div> \r\n\t<div class=\"contain\">\r\n        <div class=\"hufu\">\r\n            <ul class=\"daohang\">\r\n                <li class=\"active\">\r\n                    <a routerLink=\"/classify\">分类</a>\r\n                    <div></div>\r\n                </li>\r\n                <li><a routerLink=\"/pinpai\">品牌</a></li>  \r\n            </ul>\r\n            <div>\r\n                <div class=\"abc\"></div>\r\n                <div class=\"biaoti\">\r\n                    <span><<<<<<<<<<<<<<</span>\r\n                    <p>面部护理</p>\r\n                    <span>>>>>>>>>>>>>>></span>\r\n                </div>\r\n                <ul class=\"goods\"  (click)=toList($event)>\r\n                    <li *ngFor=\"let obj of facedataset\">\r\n                        <img src={{obj.img}} alt=\"\" title={{obj.title}}/>\r\n                        <p>{{obj.name}}</p>\r\n                    </li>\r\n                </ul>\r\n                <div class=\"abc\"></div>\r\n                <div class=\"biaoti\">\r\n                    <span><<<<<<<<<<<<<<</span>\r\n                    <p>男士护肤</p>\r\n                    <span>>>>>>>>>>>>>>></span>\r\n                </div>\r\n                <ul class=\"goods\"  (click)=toList($event)>\r\n                    <li *ngFor=\"let obj of mandataset\">\r\n                        <img src={{obj.img}} alt=\"\" title={{obj.title}}/>\r\n                        <p>{{obj.name}}</p>\r\n                    </li>\r\n                </ul>\r\n                <div class=\"abc\"></div>\r\n                <div class=\"biaoti\">\r\n                    <span><<<<<<<<<<<<<<</span>\r\n                    <p>彩妆</p>\r\n                    <span>>>>>>>>>>>>>>></span>\r\n                </div>\r\n                <ul class=\"goods\"  (click)=toList($event)>\r\n                    <li *ngFor=\"let obj of czdataset\">\r\n                        <img src={{obj.img}} alt=\"\" title={{obj.title}}/>\r\n                        <p>{{obj.name}}</p>\r\n                    </li>\r\n                </ul>\r\n                <div class=\"abc\"></div>\r\n                <div class=\"biaoti\">\r\n                    <span><<<<<<<<<<<<<<</span>\r\n                    <p>个人护理</p>\r\n                    <span>>>>>>>>>>>>>>></span>\r\n                </div>\r\n                <ul class=\"goods\"  (click)=toList($event)>\r\n                    <li *ngFor=\"let obj of hldataset\">\r\n                        <img src={{obj.img}} alt=\"\" title={{obj.title}}/>\r\n                        <p>{{obj.name}}</p>\r\n                    </li>\r\n                </ul>\r\n                <div class=\"abc\"></div>\r\n                <div class=\"biaoti\">\r\n                    <span><<<<<<<<<<<<<<</span>\r\n                    <p>香水香氛</p>\r\n                    <span>>>>>>>>>>>>>>></span>\r\n                </div>\r\n                <ul class=\"goods\"  (click)=toList($event)>\r\n                    <li *ngFor=\"let obj of xsdataset\">\r\n                        <img src={{obj.img}} alt=\"\" title={{obj.title}}/>\r\n                        <p>{{obj.name}}</p>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <div>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n\t</div> \r\n\t<footnav></footnav>\t\t\r\n</div>"

/***/ }),

/***/ "./src/app/components/classify/classify.component.scss":
/***/ (function(module, exports) {

module.exports = ".daohang {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 1.171875rem; }\n  .daohang li {\n    width: 50%;\n    text-align: center;\n    line-height: 1.171875rem;\n    font-size: 0.546875rem;\n    font-weight: bold;\n    color: #DADADA; }\n  .daohang li a {\n      display: block; }\n  .abc {\n  height: 0.234375rem;\n  background-color: #F2F5FA;\n  margin: 0.3125rem 0; }\n  .hufu {\n  padding-top: 0.40625rem;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n  .active {\n  position: relative; }\n  .active a {\n    color: red; }\n  .active div:first-of-type {\n    width: 100%;\n    background-color: red;\n    position: absolute;\n    bottom: 0;\n    height: 0.0625rem; }\n  .biaoti {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  font-size: 0.390625rem; }\n  .biaoti > span {\n    color: #F4F4F4; }\n  .biaoti > p {\n    font-weight: bold; }\n  .goods {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n  .goods li {\n    width: 25%;\n    margin-top: 0.78125rem; }\n  .goods li img {\n      width: 100%;\n      height: 2.203125rem; }\n  .goods li p {\n      font-size: 0.40625rem;\n      text-align: center; }\n"

/***/ }),

/***/ "./src/app/components/classify/classify.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassifyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_http_service__ = __webpack_require__("./src/app/utils/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_common_service__ = __webpack_require__("./src/app/utils/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//依赖组件模块引用


var ClassifyComponent = /** @class */ (function () {
    function ClassifyComponent(http, common, router) {
        this.http = http;
        this.common = common;
        this.router = router;
        this.xsdataset = [
            { img: '../../../assets/images/l1.jpg', name: '洁面', title: '洁面' },
            { img: '../../../assets/images/l2.jpg', name: '香氛', title: '香氛' },
            { img: '../../../assets/images/l3.jpg', name: '卸妆', title: '卸妆' },
            { img: '../../../assets/images/l4.jpg', name: '美白', title: '美白' },
            { img: '../../../assets/images/l5.jpg', name: '套装', title: '套装' }
        ];
        this.hldataset = [
            { img: '../../../assets/images/l1.jpg', name: '面膜', title: '面膜' },
            { img: '../../../assets/images/l2.jpg', name: '洗浴', title: '洗浴' },
            { img: '../../../assets/images/l3.jpg', name: '围巾', title: '围巾' },
            { img: '../../../assets/images/l4.jpg', name: '洗护', title: '洗护' },
            { img: '../../../assets/images/l5.jpg', name: '保湿', title: '保湿' },
            { img: '../../../assets/images/l6.jpg', name: '床上用品', title: '床上用品' },
            { img: '../../../assets/images/l7.jpg', name: '防晒', title: '防晒' },
        ];
        this.czdataset = [
            { img: '../../../assets/images/l1.jpg', name: '防晒', title: '防晒' },
            { img: '../../../assets/images/l2.jpg', name: '彩妆', title: '彩妆' },
            { img: '../../../assets/images/l3.jpg', name: '洁面', title: '洁面' },
            { img: '../../../assets/images/l4.jpg', name: '香氛', title: '香氛' },
            { img: '../../../assets/images/l5.jpg', name: '卸妆', title: '卸妆' },
            { img: '../../../assets/images/l6.jpg', name: '美白', title: '美白' },
            { img: '../../../assets/images/l7.jpg', name: '套装', title: '套装' },
            { img: '../../../assets/images/l8.jpg', name: '服饰', title: '服饰' },
            { img: '../../../assets/images/l9.jpg', name: '旅游', title: '旅游' },
        ];
        this.mandataset = [
            { img: '../../../assets/images/l1.jpg', name: '服饰', title: '服饰' },
            { img: '../../../assets/images/l2.jpg', name: '旅游', title: '旅游' },
            { img: '../../../assets/images/l3.jpg', name: '面膜', title: '面膜' },
            { img: '../../../assets/images/l4.jpg', name: '洗浴', title: '洗浴' },
            { img: '../../../assets/images/l5.jpg', name: '围巾', title: '围巾' },
            { img: '../../../assets/images/l6.jpg', name: '洗护', title: '洗护' },
        ];
        this.facedataset = [
            { img: '../../../assets/images/l1.jpg', name: '服饰', title: '服饰' },
            { img: '../../../assets/images/l2.jpg', name: '旅游', title: '旅游' },
            { img: '../../../assets/images/l3.jpg', name: '面膜', title: '面膜' },
            { img: '../../../assets/images/l4.jpg', name: '洗浴', title: '洗浴' },
            { img: '../../../assets/images/l5.jpg', name: '围巾', title: '围巾' },
            { img: '../../../assets/images/l6.jpg', name: '洗护', title: '洗护' },
            { img: '../../../assets/images/l7.jpg', name: '保湿', title: '保湿' },
            { img: '../../../assets/images/l8.jpg', name: '床上用品', title: '床上用品' },
            { img: '../../../assets/images/l9.jpg', name: '防晒', title: '防晒' },
            { img: '../../../assets/images/l10.jpg', name: '彩妆', title: '彩妆' },
            { img: '../../../assets/images/l11.jpg', name: '洁面', title: '洁面' },
            { img: '../../../assets/images/l12.jpg', name: '香氛', title: '香氛' },
            { img: '../../../assets/images/l13.jpg', name: '卸妆', title: '卸妆' },
            { img: '../../../assets/images/l14.jpg', name: '美白', title: '美白' },
            { img: '../../../assets/images/l15.jpg', name: '套装', title: '套装' },
            { img: '../../../assets/images/l16.jpg', name: '美白', title: '美白' },
        ];
    }
    ClassifyComponent.prototype.ngOnInit = function () {
    };
    ClassifyComponent.prototype.selectType = function (e) {
        this.common.type = e.target.innerText;
    };
    ClassifyComponent.prototype.toList = function (e) {
        if (e.target.tagName == "P") {
            this.common.type = e.target.innerText;
            this.router.navigate(['/goodslist']);
            console.log(e.target.innerText);
        }
        if (e.target.tagName == "IMG") {
            console.log(e.target.parentNode);
            this.common.brandStoreName = '';
            this.common.type = e.target.title;
            this.router.navigate(['/goodslist']);
        }
    };
    ClassifyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-classify',
            template: __webpack_require__("./src/app/components/classify/classify.component.html"),
            styles: [__webpack_require__("./src/app/components/classify/classify.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__utils_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_3__utils_common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], ClassifyComponent);
    return ClassifyComponent;
}());



/***/ }),

/***/ "./src/app/components/details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<p (click)=\"goBack()\">\r\n  details works!\r\n  {{this.common.gid}}\r\n</p>-->\r\n<div class=\"bigbox\" *ngIf=\"data\">\r\n\t\t<div class=\"detailsHead\" *ngFor=\"let obj of data\">\r\n\t\t\t\t<p>\r\n\t\t\t\t \t\t<span class=\"icon icon-left\" (click)=\"goBack()\"></span>\r\n\t\t\t\t \t\t{{obj.name}}\r\n\t\t\t\t \t\r\n\t\t\t\t\t\t<span class=\"icon icon-share\"></span>\r\n\t\t\t\t</p>\r\n\t\t</div>\r\n\t\t\t<ul class=\"detailsCon\" *ngFor=\"let obj of data\">\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<img [src]=\"obj.middleImage\"/>\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t<span>{{obj.brandStoreName}}  {{obj.name}}</span>\r\n\t\t\t\t\t\t\t<span class=\"icon icon-star\"></span>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t<span>￥{{obj.vipshopPrice}}</span>\r\n\t\t\t\t\t\t\t<del>￥{{obj.marketPrice}}</del>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<p><span>买赠</span><span>跨品牌满199减100上不封顶</span></p>\r\n\t\t\t\t\t\t<p><span>买赠</span><span>买即可增猪圆肉润的鱼露一枚</span></p>\r\n\t\t\t\t\t\t<p><span>买赠</span><span></span>满99增清润护肤品一套</p>\r\n\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t商品评论 （{{obj.goodCount}}）\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t<i>\r\n\t\t\t\t\t\t\t\t\t\t{{obj.greatScale}}\r\n\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t好评\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t<ul class=\"comment\">\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon icon-star\">满意</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span>138******   2018-8-12</span>\r\n\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t\t满199减100的活动，太给力，买了两盒\r\n\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon icon-star\">满意</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span>181******   2017-5-1</span>\r\n\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t\t效果挺好的\r\n\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"detalisImag\" >\r\n\t\t\t\t\t\t<div class=\"uibox\">\r\n\t\t\t\t\t\t\t<!--<goodslist></goodslist>-->\r\n\t\t\t\t\t\t\t<div class=\"buttons-tab typeNav\">\r\n\t\t\t\t\t\t\t\t<a href=\"#tab1\" class=\"tab-link active button\">商品详情</a>\r\n\t\t\t\t\t\t\t\t<a href=\"#tab2\" class=\"tab-link button\">商品说明</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"content-block\">\r\n\t\t\t\t\t\t\t\t<div class=\"tabs\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<div id=\"tab1\" class=\"tab active\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf = \"images\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"item\"  *ngFor=\"let item of images\"/>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div id=\"tab2\" class=\"tab\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h3>关于商品</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>网上所售卖的商品均经过品牌授权，确保正品，并由中国人民财产保险股份有限公司为您购买的每一件商品进行承保。</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<h3>商品价格说明</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>乐蜂展示的中间未划横线价格（显示如¥799）为乐蜂销售价，该价格是交易成交价，是您最终决定是否购买商品的依据。\r\n\r\n乐蜂展示的中间划横线价格（显示如￥1399）为参考价，采集自品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价可能会与您购物时展示的不一致。该价格仅供您参考。\r\n\r\n折扣比为乐蜂销售价与参考价的对比（该值四舍五入后采用小数点后1位，如¥799/¥2899=0.2756=2.8折），该对比值仅供您参考，不作为结算基数。</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<h3>售后说明</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>在您签收商品之日起的7天之内，乐蜂为您提供七天无理由放心退服务，但以下情形将不能退货：</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t1、非乐蜂销售的商品，或有明显使用痕迹影响二次销售的商品；\r\n\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t2、法律明确规定不适用七天无理由退货的商品；\r\n\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t3、基于安全及健康的考虑，已拆封的食品、药品、保健品、化妆品、贴身用品等；\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t4、已经激活的手机、电脑、数码产品等；\r\n\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t5、已在线交付的充值类商品；\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t6、未经授权的维修、误用、碰撞、疏忽、滥用、进液、事故、改动、不正确的安装所造成的商品质量问题，或撕毁、涂改标贴、机器序号、防伪标记；\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t7、无法提供商品的发票（如已索要发票）、保修卡等三包凭证或者三包凭证信息与商品不符及被涂改的；\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t8、礼包或套装中的商品不可以部分退换货。上述退货规则，客户一经购买，视为认可。\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t</p>\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t\t\r\n\t\t\t<div class=\"detailsNav\" *ngFor=\"let obj of data\">\r\n\t\t\t<span class=\"icon icon-cart\" (click)=\"toCar(obj.name)\"></span>\r\n\t\t\t<span (click)=\"addCar()\">加入购物车</span>\r\n\t\t</div>\r\n</div>\n<div id=\"Loginmsg\">请先登录</div>\r\n<div id=\"success\">加购成功</div>"

/***/ }),

/***/ "./src/app/components/details/details.component.scss":
/***/ (function(module, exports) {

module.exports = ".detailsHead {\n  height: 2.2rem;\n  line-height: 2.2rem; }\n  .detailsHead p {\n    width: 100%;\n    text-align: center;\n    font-weight: bold;\n    font-size: 0.76666rem;\n    border: 1px solid #F3F3F3; }\n  .detailsHead p span:nth-of-type(1) {\n      padding-left: 0.4rem;\n      float: left;\n      font-size: 0.3rem; }\n  .detailsHead p span:nth-of-type(2) {\n      float: right;\n      padding-right: 0.35rem; }\n  .detailsCon {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background: #F8F8F8;\n  overflow-y: scroll; }\n  .detailsCon > li {\n    background: #fff;\n    margin-bottom: 10px; }\n  .detailsCon > li:nth-child(1) p:nth-of-type(1) {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding: 10px; }\n  .detailsCon > li:nth-child(1) p:nth-of-type(1) span:nth-child(1) {\n      width: 90%; }\n  .detailsCon > li:nth-child(1) p:nth-of-type(1) span:nth-child(2) {\n      width: 10%;\n      font-size: 26px;\n      color: #F1ABC3; }\n  .detailsCon > li:nth-child(1) p:nth-of-type(2) span {\n    font-size: 30px;\n    color: #BE1D53; }\n  .detailsCon > li:nth-child(1) p:nth-of-type(2) span del {\n      color: #A3A3A3; }\n  .detailsCon > li:nth-child(1) img {\n    width: 100%; }\n  .detailsCon > li:nth-child(2) p {\n    margin: 10px  0 0 22px;\n    padding-bottom: 5px;\n    border-bottom: 1px solid #EFEFEF; }\n  .detailsCon > li:nth-child(2) p span:nth-child(1) {\n      margin-right: 10px;\n      text-align: center;\n      display: inline-block;\n      width: 40px;\n      background: #FF5890;\n      color: #FFECFF;\n      border-radius: 10% 10%; }\n  .detailsCon > li:nth-child(3) > p:nth-child(1) {\n    border-bottom: 1px solid #EFEFEF; }\n  .detailsCon > li:nth-child(3) p:nth-child(1) {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    padding: 10px 25px; }\n  .detailsCon > li:nth-child(3) ul p:nth-child(1) span:nth-child(1) {\n    color: #FF0056; }\n  .detailsCon > li:nth-child(3) ul p:nth-child(1) span:nth-child(2) {\n    color: #9D9D9D; }\n  .detailsCon > li:nth-child(3) ul p:nth-child(2) {\n    padding: 10px 25px;\n    border-bottom: 1px solid #E9E9E9; }\n  .comment li span {\n  font-size: 16px; }\n  .detalisImag img {\n  width: 100%; }\n  h3 {\n  width: 100%;\n  text-align: center;\n  font-weight: bold; }\n  #tab2 p {\n  text-indent: 1.8rem;\n  margin: 10px 5px; }\n  .detailsNav {\n  height: 3.2rem;\n  line-height: 3.2rem;\n  padding: 10px 20px; }\n  .detailsNav span:nth-child(1) {\n    font-size: 20px;\n    color: #FF0056;\n    line-height: 50px;\n    display: block;\n    float: left; }\n  .detailsNav span:nth-child(2) {\n    display: block;\n    float: right;\n    width: 120px;\n    background: #FF0056;\n    color: #F7F7F7;\n    height: 50px;\n    text-align: center;\n    line-height: 50px; }\n  #Loginmsg {\n  position: fixed;\n  top: 300px;\n  right: 35px;\n  z-index: 10000;\n  width: 1px;\n  height: 52px;\n  line-height: 52px;\n  font-size: 20px;\n  text-align: center;\n  color: #fff;\n  background: #58bc58;\n  display: none; }\n  #success {\n  position: fixed;\n  top: 300px;\n  right: 35px;\n  z-index: 10000;\n  width: 1px;\n  height: 52px;\n  line-height: 52px;\n  font-size: 20px;\n  text-align: center;\n  color: #fff;\n  background: red;\n  display: none; }\n"

/***/ }),

/***/ "./src/app/components/details/details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_http_service__ = __webpack_require__("./src/app/utils/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_common_service__ = __webpack_require__("./src/app/utils/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//依赖注入




//import {Router} from '@angular/router';
var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(location, http, common, router) {
        this.location = location;
        this.http = http;
        this.common = common;
        this.router = router;
        this.resdata = [];
        this.data = [];
        this.images = [];
        this.uid = 0;
        this.once = 1;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.once = 1;
        this.uid = sessionStorage.getItem("uid") || 0;
        this.http.get('getgid', {
            gid: this.common.gid
        }).then(function (res) {
            var resdata = JSON.parse(JSON.stringify(res));
            _this.data = resdata;
            if (_this.data != []) {
                _this.images = _this.data[0]['allImages'].split(',');
                _this.images = _this.images.slice(1, -2);
            }
        });
    };
    DetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    DetailsComponent.prototype.toCar = function () {
        this.router.navigate(['/car']);
    };
    DetailsComponent.prototype.addCar = function () {
        var _this = this;
        if (this.uid == 0) {
            __WEBPACK_IMPORTED_MODULE_5_jquery__("#Loginmsg").show().animate({ width: '250px' }, 200).fadeOut(1000);
        }
        else if (this.uid != 0 && this.once != 0) {
            this.http.post('addCar', {
                uid: this.uid,
                gid: this.common.gid,
                qty: 1
            }).then(function (res) {
                var Res = JSON.parse(JSON.stringify(res));
                __WEBPACK_IMPORTED_MODULE_5_jquery__("#success").show().animate({ width: '250px' }, 200).fadeOut(1000);
                _this.once = 0;
            });
        }
        console.log(this.common.gid);
    };
    DetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-details',
            template: __webpack_require__("./src/app/components/details/details.component.html"),
            styles: [__webpack_require__("./src/app/components/details/details.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_3__utils_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_4__utils_common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/footnav/footnav.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"bigbox\">\r\n\t\t<div class=\"contain\">\r\n\t\t\t<router-outlet></router-outlet>\r\n\t\t</div>\r\n</div>-->\r\n<div class=\"footnav\">\r\n\t<ul>\r\n\t\t<li routerLink=\"/super\" routerLinkActive=\"active\" class=\"open-preloader\">\r\n\t\t\t<span class=\"icon icon-clock\"></span>\r\n\t\t\t<a >特卖</a> \r\n\t\t\t\r\n\t\t</li>\r\n\t\t<li routerLink=\"/classify\" routerLinkActive=\"active\" class=\"open-preloader\">\r\n\t\t\t<span class=\"icon icon-menu\"></span>\r\n\t\t\t<a>分类</a> \r\n\t\t\t\r\n\t\t\t\r\n\t\t</li>\r\n\t\t<li routerLink=\"/shopping\" routerLinkActive=\"active\" class=\"open-preloader\">\r\n\t\t\t<span class=\"icon icon-gift\"></span>\r\n\t\t\t<a>商场</a> \r\n\t\t\t\r\n\t\t</li>\r\n\t\t<li routerLink=\"/car\" routerLinkActive=\"active\" class=\"open-preloader\">\r\n\t\t\t<span class=\"icon icon-cart\"></span>\r\n\t\t\t<a>购物车</a> \r\n\t\t\t\r\n\t\t</li>\r\n\t\t<li routerLink=\"/my\" routerLinkActive=\"active\" class=\"open-preloader\">\r\n\t\t\t<span class=\"icon icon-me\"></span>\r\n\t\t\t<a>我的蜂巢</a> \r\n\t\t</li>\r\n\t</ul>\r\n</div>\r\n<script>\r\n\t$.init()\r\n\t$.config = {router: false}\r\n</script>"

/***/ }),

/***/ "./src/app/components/footnav/footnav.component.scss":
/***/ (function(module, exports) {

module.exports = ".footnav ul {\n  height: 2.173333rem;\n  background: #fff;\n  color: #666666;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-top: 1px solid #DADCDB; }\n  .footnav ul li {\n    float: left;\n    width: 20%;\n    text-align: center;\n    font-size: 0.4rem;\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center; }\n  .footnav ul li.active span {\n    color: red; }\n  .footnav ul li.active a {\n    color: red; }\n"

/***/ }),

/***/ "./src/app/components/footnav/footnav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FootnavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FootnavComponent = /** @class */ (function () {
    function FootnavComponent() {
    }
    FootnavComponent.prototype.ngOnInit = function () {
    };
    FootnavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'footnav',
            template: __webpack_require__("./src/app/components/footnav/footnav.component.html"),
            styles: [__webpack_require__("./src/app/components/footnav/footnav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FootnavComponent);
    return FootnavComponent;
}());



/***/ }),

/***/ "./src/app/components/goodslist/goodslist.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<h1>{{common.type}}</h1>-->\r\n<ul class=\"zbylist\">\r\n\t<li *ngFor=\"let obj of dataset[type]; trackBy: trackByGid\" (click)='toDetails(obj.gid,$event)'>\r\n\t\t<img [src]=\"obj.verticalImage\"/>\r\n\t\t<p>\r\n\t\t\t<span>{{obj.brandStoreName}}</span>\r\n\t\t\t<span>{{obj.name}}</span>\r\n\t\t\t<!--<span>{{obj.pointDescribe}}</span>-->\r\n\t\t</p>\r\n\t\t\r\n\t\t<p>\r\n\t\t\t<span>￥{{obj.vipshopPrice}} <del>￥{{obj.marketPrice}}</del></span>\r\n\t\t\t<span class=\"icon icon-cart gouwuche addcar\" (click)='add(obj.gid,$event)'></span>\r\n\t\t</p>\r\n\t</li>\t\r\n</ul>\r\n<ul class=\"listAside\">\r\n\t<li class=\"toTop\"><img src=\"./../../../assets/images/n1.jpg\" /></li>\r\n\t<li><img src=\"./../../../assets/images/n2.jpg\" /></li>\r\n\t<li id=\"end\" (click)='tocar()'><img src=\"./../../../assets/images/n3.jpg\" /></li>\r\n</ul>\r\n<div id=\"Loginmsg\">请先登录</div>\r\n<div id=\"success\">加购成功</div>"

/***/ }),

/***/ "./src/app/components/goodslist/goodslist.component.scss":
/***/ (function(module, exports) {

module.exports = ".zbylist {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  background: #f5f5f5; }\n  .zbylist li {\n    background: #FFFFFF;\n    width: 49.5%;\n    margin-bottom: 0.266666rem; }\n  .zbylist li img {\n      width: 100%; }\n  .zbylist li p:nth-of-type(1) span:nth-child(1) {\n      display: block;\n      width: 100%;\n      text-align: center;\n      font-weight: bold;\n      padding-right: 0.266666rem; }\n  .zbylist li p:nth-of-type(1) span {\n      display: -webkit-box;\n      -webkit-box-orient: vertical;\n      -webkit-line-clamp: 1;\n      overflow: hidden; }\n  .zbylist li p:nth-of-type(2) {\n      margin-top: 0.466666rem; }\n  .zbylist li p:nth-of-type(2) del {\n        color: #9A9A9A; }\n  .zbylist li p:nth-of-type(2) span:nth-child(2) {\n        color: #E98AAA;\n        float: right;\n        padding-right: 0.4rem; }\n  .listAside {\n  position: fixed;\n  bottom: 30px;\n  right: 20px;\n  width: 52px; }\n  .listAside img {\n    width: 100%; }\n  #Loginmsg {\n  position: fixed;\n  top: 300px;\n  right: 35px;\n  z-index: 10000;\n  width: 1px;\n  height: 52px;\n  line-height: 52px;\n  font-size: 20px;\n  text-align: center;\n  color: #fff;\n  background: #58bc58;\n  display: none; }\n  #success {\n  position: fixed;\n  top: 300px;\n  right: 35px;\n  z-index: 10000;\n  width: 1px;\n  height: 52px;\n  line-height: 52px;\n  font-size: 20px;\n  text-align: center;\n  color: #fff;\n  background: red;\n  display: none; }\n"

/***/ }),

/***/ "./src/app/components/goodslist/goodslist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoodslistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_http_service__ = __webpack_require__("./src/app/utils/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_common_service__ = __webpack_require__("./src/app/utils/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//依赖组件模块引用




var GoodslistComponent = /** @class */ (function () {
    function GoodslistComponent(http, common, router) {
        this.http = http;
        this.common = common;
        this.router = router;
        this.goodslist = [];
        this.dataset = {};
        this.type = null;
        this.Res = {};
        this.arr = [];
        this.qty = 1;
        this.carRes = [];
        this.carres = [];
        this.uid = 0;
    }
    GoodslistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uid = sessionStorage.getItem("uid") || 0;
        if (this.uid != 0) {
            this.http.get('selectqty', {
                uid: this.uid,
            }).then(function (res) {
                var carRes = JSON.parse(JSON.stringify(res));
                _this.carres = carRes;
                _this.arr = [];
                for (var i = 0; i < _this.carres.length; i++) {
                    _this.arr.push(_this.carres[i].gid);
                }
            });
            console.log(this.uid);
        }
        this.createList();
    };
    GoodslistComponent.prototype.trackByGid = function (item) {
        return item.gid;
    };
    GoodslistComponent.prototype.createList = function () {
        var _this = this;
        this.http.get('selectClass', {
            type: this.type || this.common.type
        }).then(function (res) {
            _this.dataset[_this.type] = res;
        });
    };
    GoodslistComponent.prototype.tocar = function () {
        this.router.navigate(['/car']);
    };
    GoodslistComponent.prototype.toDetails = function (gid, e) {
        if (e.target.tagName != 'SPAN') {
            this.common.gid = gid;
            this.router.navigate(['/details']);
        }
    };
    GoodslistComponent.prototype.add = function (goodsId, e) {
        if (this.uid == 0) {
            __WEBPACK_IMPORTED_MODULE_4_jquery__("#Loginmsg").show().animate({ width: '250px' }, 200).fadeOut(1000);
        }
        else if (this.uid != 0) {
            //			console.log(e.target.parent().parent()
            //这里加入购物车
            if (this.arr.indexOf(goodsId) == -1) {
                this.arr.push(goodsId);
                this.http.post('addCar', {
                    uid: this.uid,
                    gid: goodsId,
                    qty: 1
                }).then(function (res) {
                    var Res = JSON.parse(JSON.stringify(res));
                    __WEBPACK_IMPORTED_MODULE_4_jquery__("#success").show().animate({ width: '250px' }, 200).fadeOut(1000);
                });
            }
            else {
                this.http.post('updateqty', {
                    uid: this.uid,
                    gid: goodsId,
                }).then(function (res) {
                    var Res = JSON.parse(JSON.stringify(res));
                    __WEBPACK_IMPORTED_MODULE_4_jquery__("#success").show().animate({ width: '250px' }, 200).fadeOut(1000);
                });
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], GoodslistComponent.prototype, "type", void 0);
    GoodslistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'goodslist',
            template: __webpack_require__("./src/app/components/goodslist/goodslist.component.html"),
            styles: [__webpack_require__("./src/app/components/goodslist/goodslist.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__utils_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__utils_common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], GoodslistComponent);
    return GoodslistComponent;
}());



/***/ }),

/***/ "./src/app/components/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bigbox\">\n\t\t<div class=\"listhead\">\n\t\t\t <p *ngIf=\"common.type\">\n\t\t \t\t<span class=\"icon icon-left\"  (click)=\"goBack()\"></span>\n\t\t \t\t{{common.type}}\n\t\t\t </p>\n\t\t</div>\n\t\t<div class=\"listFun\">\n\t\t\t<ul>\n\t\t\t\t<li (click)=\"paixu()\">价格排序</li>\n\t\t\t\t<li>销量</li>\n\t\t\t\t<li>筛选</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=\"listBox\">\n\t\t\t<goodslist></goodslist>\t\t\t\n\t\t</div>\n</div>\t\n"

/***/ }),

/***/ "./src/app/components/list/list.component.scss":
/***/ (function(module, exports) {

module.exports = ".listhead {\n  height: 2.2rem;\n  line-height: 2.2rem; }\n  .listhead p {\n    width: 100%;\n    text-align: center;\n    font-weight: bold;\n    font-size: 1.326666rem;\n    border: 1px solid #F3F3F3; }\n  .listhead p span {\n      padding-left: 0.4rem;\n      float: left;\n      font-size: 0.8rem; }\n  .listFun {\n  height: 2.2rem;\n  line-height: 2.2rem;\n  border: 1px solid #F3F3F3; }\n  .listFun ul {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .listFun ul li {\n      width: 33.3%;\n      text-align: center; }\n  .listFun ul li:nth-child(2) {\n      border-right: 1px solid #F3F3F3;\n      border-left: 1px solid #F3F3F3; }\n  .listBox {\n  height: 100%;\n  overflow-y: scroll;\n  position: relative; }\n  .listAside {\n  position: fixed;\n  bottom: 30px;\n  right: 20px;\n  width: 52px; }\n  .listAside img {\n    width: 100%; }\n"

/***/ }),

/***/ "./src/app/components/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_http_service__ = __webpack_require__("./src/app/utils/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_common_service__ = __webpack_require__("./src/app/utils/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//依赖组件模块引用




var ListComponent = /** @class */ (function () {
    function ListComponent(http, common, location, router) {
        this.http = http;
        this.common = common;
        this.location = location;
        this.router = router;
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent.prototype.goBack = function () {
        this.location.back();
    };
    ListComponent.prototype.paixu = function () {
    };
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list',
            template: __webpack_require__("./src/app/components/list/list.component.html"),
            styles: [__webpack_require__("./src/app/components/list/list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__utils_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__utils_common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  \t<div class=\"title\">\r\n\t\t<span class=\"icon icon-left\" (click)='back()'></span>\r\n\t\t<span>登录</span>\r\n\t\t<span class=\"icon icon-home\"></span>\r\n\t</div>\r\n\t<form>\r\n\t\t<input type=\"text\" placeholder=\"手机号/用户/邮箱\"/>\r\n\t\t<input type=\"password\" placeholder=\"密码\"/>\r\n\t\t<button (click)=\"login()\">登录</button>\r\n\t\t<p>\r\n\t\t\t<a href=\"register\" class=\"open-preloader\">立即注册</a>\r\n\t\t\t<span class=\"forget\">忘记密码</span>\r\n\t\t</p>\r\n\t</form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  height: 100%;\n  background: #F6F6F6; }\n  .container .title {\n    width: 100%;\n    -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#fcfdfe), to(#f8f9fa));\n    background-image: linear-gradient(180deg, #fcfdfe, #f8f9fa);\n    text-align: center;\n    margin: 0;\n    position: relative; }\n  .container .title span:nth-of-type(2) {\n      display: inline-block;\n      width: 300px; }\n  .container .title span:nth-of-type(3) {\n      margin-right: 15px; }\n  .container form {\n    margin: 30px 19px;\n    margin-bottom: 0;\n    width: 338px;\n    height: 206px; }\n  .container form input {\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      width: 337px;\n      height: 42px;\n      border: 1px solid #ddd;\n      padding: 8px;\n      font-size: 12px;\n      color: #444;\n      line-height: 42px;\n      margin: 0; }\n  .container form button {\n      width: 338px;\n      height: 45px;\n      background-color: #ff0056;\n      text-align: center;\n      line-height: 45px;\n      color: #fff;\n      font-size: 14px;\n      border-radius: 3px;\n      outline: none;\n      text-shadow: 0 -1px rgba(0, 0, 0, 0.25);\n      margin-top: 50px; }\n  .container form a {\n      font-size: 12px;\n      color: #3195cb;\n      margin-right: 5px; }\n  .container form a:nth-of-type(1) {\n      margin-left: 225px; }\n  .container form p span {\n      font-size: 12px;\n      color: #3195cb;\n      margin-right: 5px;\n      cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_http_service__ = __webpack_require__("./src/app/utils/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(location, router, http) {
        this.location = location;
        this.router = router;
        this.http = http;
    }
    LoginComponent.prototype.ngOnInit = function () {
        $('.forget').click(function () {
            alert('密码都忘记就别登录了');
        });
        sessionStorage.setItem('orderlist', '');
    };
    LoginComponent.prototype.back = function () {
        this.location.back();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var username = document.getElementsByTagName('input')[0].value;
        var password = document.getElementsByTagName('input')[1].value;
        if (username.trim() == '' || password.trim() == '') {
            // alert('用户名或密码不为空')
        }
        else {
            this.http.get('loginapp', { username: username, password: password }).then(function (res) {
                var Res = JSON.parse(JSON.stringify(res));
                var status = Res.status;
                if (status == true) {
                    alert('登录成功');
                    sessionStorage.setItem("username", username);
                    sessionStorage.setItem("uid", Res.uid);
                    _this.router.navigateByUrl("my");
                }
                else {
                    alert('用户名或密码错误');
                }
            });
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__utils_http_service__["a" /* HttpService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/my/my.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bigbox\">\r\n\t<div class=\"contain\">\r\n\t\t<div class=\"head\">\r\n\t\t\t<img src='https://h5rsc-ssl.vipstatic.com/lefeng/build/f39c984d8edd5e686a2a88e59a87d886.png' >\r\n\t\t\t<p>\r\n\t\t\t\t<a href=\"login\">登录</a>\r\n\t\t\t\t<span>/</span>\r\n\t\t\t\t<a href=\"register\">注册</a>\r\n\t\t\t</p>\r\n\t\t</div>\r\n\t\t<div class=\"order\">\r\n\t\t\t<a href=\"order\" class='my_order'>\r\n\t\t\t\t我的订单\r\n\t\t\t\t<b>全部订单</b> \r\n\t\t\t\t<span class=\"icon icon-right\"></span>\r\n\t\t\t</a>\r\n\t\t\t<div class=\"order_tag\">\r\n\t\t\t\t<a href=\"\">\r\n\t\t\t\t\t<span class=\"icon icon-browser\"></span>\r\n\t\t\t\t\t<p>待支付</p>\r\n\t\t\t\t</a>\r\n\t\t\t\t<a href=\"\">\r\n\t\t\t\t\t<span class=\"icon icon-app\"></span>\r\n\t\t\t\t\t<p>待收货</p>\r\n\t\t\t\t</a>\r\n\t\t\t\t<a href=\"\">\r\n\t\t\t\t\t<span class=\"icon icon-emoji\"></span>\r\n\t\t\t\t\t<p>待评价</p>\r\n\t\t\t\t</a>\r\n\t\t\t</div>\r\n\t\t\t<!-- <div class=\"item\">\r\n\t\t\t\t<span class=\"icon icon-check\"></span>\r\n\t\t\t\t收货地区\r\n\t\t\t\t<b class=\"txt\">广东</b>\r\n\t\t\t\t<span class=\"icon icon-right\"></span>\r\n\t\t\t</div> -->\r\n\t\t\t<div class=\"item\">\r\n\t\t\t\t<span class=\"icon icon-check\"></span>\r\n\t\t\t\t我的优惠券\r\n\t\t\t\t<span class=\"icon icon-right\"></span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"item\">\r\n\t\t\t\t<span class=\"icon icon-menu\"></span>\r\n\t\t\t\t我的花粉\r\n\t\t\t\t<span class=\"icon icon-right\"></span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"item mb\">\r\n\t\t\t\t<span class=\"icon icon-code\"></span>\r\n\t\t\t\t我的银行卡\r\n\t\t\t\t<span class=\"icon icon-right\"></span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"item\">\r\n\t\t\t\t<span class=\"icon icon-download cc\"></span>\r\n\t\t\t\t我的收藏\r\n\t\t\t\t<span class=\"icon icon-right\"></span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"item mb\">\r\n\t\t\t\t<span class=\"icon icon-edit cc\"></span>\r\n\t\t\t\t浏览记录\r\n\t\t\t\t<span class=\"icon icon-right\"></span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"item\">\r\n\t\t\t\t<span class=\"icon icon-phone cc\"></span>\r\n\t\t\t\t意见反馈\r\n\t\t\t\t<span class=\"icon icon-right\"></span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"item\">\r\n\t\t\t\t<span class=\"icon icon-friends cc\"></span>\r\n\t\t\t\t联系客服\r\n\t\t\t\t<span class=\"icon icon-right\"></span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"item mb\">\r\n\t\t\t\t<span class=\"icon icon-me cc\"></span>\r\n\t\t\t\t关于乐峰\r\n\t\t\t\t<span class=\"icon icon-right\"></span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<footnav></footnav>\t\t\r\n</div>"

/***/ }),

/***/ "./src/app/components/my/my.component.scss":
/***/ (function(module, exports) {

module.exports = ".bigbox {\n  background: #f6f6f6; }\n  .bigbox .head {\n    height: 90px;\n    width: 100%;\n    position: relative;\n    background: #ccc;\n    background-image: url(https://h5rsc-ssl.vipstatic.com/lefeng/build/ce0cbb137bb02dffefc5d38959e9c489.png);\n    background-repeat: no-repeat;\n    background-size: cover; }\n  .bigbox .head img {\n      position: absolute;\n      left: 50px;\n      top: 50%;\n      width: 60px;\n      height: 60px;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%); }\n  .bigbox .head p {\n      position: absolute;\n      left: 145px;\n      top: 50%;\n      width: 110px;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%);\n      font-size: 14px;\n      color: #444; }\n  .bigbox .order .my_order {\n    display: inline-block;\n    height: 47px;\n    width: 100%;\n    padding: 0 10px;\n    color: #444;\n    font-size: 14px;\n    line-height: 47px;\n    border-top: 1px solid rgba(0, 0, 0, 0.06);\n    border-bottom: 1px solid rgba(0, 0, 0, 0.06);\n    background: #fff; }\n  .bigbox .order .my_order b {\n      font-size: 14px;\n      line-height: 47px;\n      color: #444;\n      font-weight: normal;\n      margin-left: 215px; }\n  .bigbox .order .my_order span {\n      font-size: 14px;\n      margin-left: 5px;\n      color: #ccc; }\n  .bigbox .order .order_tag {\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    background: #fff;\n    margin-bottom: 10px; }\n  .bigbox .order .order_tag a {\n      height: 55px;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      display: block;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      padding: 10px 0;\n      font-size: 14px;\n      text-align: center; }\n  .bigbox .order .order_tag a span {\n        color: pink; }\n  .bigbox .order .order_tag a p {\n        font-size: 12px; }\n  .bigbox .order .item {\n    height: 52px;\n    padding: 0 30px 0 15px;\n    background: #fff;\n    border-top: 1px solid rgba(0, 0, 0, 0.06);\n    border-bottom: 1px solid rgba(0, 0, 0, 0.06);\n    line-height: 52px;\n    font-size: 14px;\n    position: relative; }\n  .bigbox .order .item b {\n      margin-left: 200px;\n      font-size: 12px; }\n  .bigbox .order .item span:nth-of-type(1) {\n      margin-right: 10px;\n      color: pink; }\n  .bigbox .order .item span:nth-of-type(2) {\n      font-size: 12px;\n      color: #ccc;\n      position: absolute;\n      top: 0;\n      right: 10px; }\n  .bigbox .order .cc {\n    color: #ccc !important; }\n  .bigbox .order .mb {\n    margin-bottom: 10px; }\n"

/***/ }),

/***/ "./src/app/components/my/my.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyComponent = /** @class */ (function () {
    function MyComponent() {
    }
    MyComponent.prototype.ngOnInit = function () {
        var username = sessionStorage.getItem("username");
        if (username == undefined) {
            console.log('username is undefined');
        }
        else {
            document.getElementsByTagName('p')[0].innerHTML = '<span>' + username + '</span>';
        }
    };
    MyComponent.prototype.login = function () {
    };
    MyComponent.prototype.register = function () {
    };
    MyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-my',
            template: __webpack_require__("./src/app/components/my/my.component.html"),
            styles: [__webpack_require__("./src/app/components/my/my.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MyComponent);
    return MyComponent;
}());



/***/ }),

/***/ "./src/app/components/order-form/order-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bigbox\">\r\n    <div class=\"head\">\r\n        <span class=\"icon icon-left\" routerLink=\"/order\"></span>\r\n        <p >订单详情</p>\r\n        <span></span>\r\n    </div>\r\n    <div class=\"contain\">\r\n        <ul *ngFor=\"let obj of resdata\">\r\n        <div class=\"abc\">&nbsp;</div>\r\n        <ul class=\"list\">\r\n            <li><p>订单信息</p></li>\r\n            <li>\r\n                <p>订单编号：18036095424513</p>\r\n                <p>下单时间：<span [style.color]=\"'#A4A4A4'\">{{obj.addtime}}</span></p>\r\n                <p>支付方式：<span [style.color]=\"'#A4A4A4'\">乐峰唯宝快捷支付</span></p>\r\n                <p>订单状态：<span [style.color]=\"'#EECB79'\">未支付</span></p>\r\n            </li>\r\n        </ul>\r\n        <ul class=\"list\">\r\n            <li><p>商品信息</p></li>\r\n            <li class=\"imglist\">\r\n                <img src={{obj.verticalImage}} alt=\"\" />\r\n                <div>\r\n                    <span>{{obj.name}}</span>\r\n                    <p [style.color]=\"'#A4A4A4'\">数量：{{obj.qty}}</p>\r\n                    <p>金额：￥ {{obj.goodCount}}</p>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n        </ul>\r\n        <div class=\"abc\">&nbsp;</div>\r\n        <ul class=\"list\">\r\n            <li class=\"imglist\" [style.justify-content]=\"'space-between'\">\r\n                <p>发票信息</p>\r\n                <p>不开发票</p>\r\n            </li>\r\n        </ul>\r\n        <div class=\"abc\">&nbsp;</div>\r\n        <ul class=\"list\">\r\n            <li >\r\n                <p>订单金额</p>\r\n                <p class=\"imglist\">商品总金额<span [style.color]=\"'#A4A4A4'\">￥ {{total}}</span></p>\r\n                <p class=\"imglist\">运费<span [style.color]=\"'#A4A4A4'\">￥ 10.00</span></p>\r\n                <p class=\"imglist\">应付金额<span [style.color]=\"'#C31751'\">￥ {{total+10}}</span></p>\r\n            </li>\r\n        </ul>\r\n        <div class=\"abc\">&nbsp;</div>\r\n        <ul class=\"imglist\" [style.padding-right]=\"'0.46875rem'\" [style.justify-content]=\"'space-between'\">\r\n            <li class=\"blist\">总金额：<span [style.color]=\"'#C31751'\">￥ {{total+10}}</span></li>\r\n            <li class=\"imglist anniulist\">\r\n                <div (click)=delete()>取消订单</div>\r\n                <div (click)=pay()>\r\n                    <p>支付</p>\r\n                    <p>￥ {{total+10}}</p>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/order-form/order-form.component.scss":
/***/ (function(module, exports) {

module.exports = ".head {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .head p, .head span {\n    font-size: 0.890625rem;\n    line-height: 2.296875rem;\n    font-weight: bold; }\n  .head span {\n    margin-left: 0.46875rem; }\n  .abc {\n  height: 1rem;\n  background-color: #EFF3F6; }\n  .list {\n  padding-left: 0.75rem; }\n  .list li {\n    border-bottom: 0.03125rem solid #EFF3F6; }\n  .list li p, .list li span {\n      line-height: 1.8125rem;\n      font-size: 0.71875rem;\n      font-weight: bold; }\n  .list li img {\n      width: 3.0625rem;\n      height: 3.0625rem; }\n  .blist span {\n  line-height: 2.34375rem;\n  font-size: 0.78125rem;\n  font-weight: bold; }\n  .imglist {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-right: 1rem; }\n  .imglist img {\n    margin-right: 0.3125rem; }\n  .anniulist {\n  height: 2.34375rem; }\n  .anniulist div {\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n    font-size: 0.78125rem;\n    width: 3.75rem;\n    line-height: 1.5625rem;\n    border: 1px solid #999999;\n    text-align: center; }\n  .anniulist div:last-child {\n    margin-left: 0.3125rem;\n    background-color: #FF0056; }\n  .anniulist div:last-child p {\n      font-size: 0.875rem;\n      line-height: 0.875rem;\n      color: white; }\n  .anniulist div:last-child p:last-child {\n      font-size: 0.7rem; }\n"

/***/ }),

/***/ "./src/app/components/order-form/order-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_http_service__ = __webpack_require__("./src/app/utils/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_common_service__ = __webpack_require__("./src/app/utils/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderFormComponent = /** @class */ (function () {
    function OrderFormComponent(http, common, router) {
        this.http = http;
        this.common = common;
        this.router = router;
        this.resdata = [];
        this.Res = [];
        this.total = 0;
        this.uid = 0;
        this.type = 1;
    }
    OrderFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uid = sessionStorage.getItem("uid") || 0;
        this.http.get('selectgoods_fromType', { uid: this.uid, type: 1 }).then(function (res) {
            var Res = JSON.parse(JSON.stringify(res));
            _this.resdata = Res;
            for (var i = 0; i < _this.resdata.length; i++) {
                _this.total = _this.total + Number(_this.resdata[i]['goodCount']);
            }
        });
    };
    OrderFormComponent.prototype.pay = function () {
        var _this = this;
        this.uid = sessionStorage.getItem("uid") || 0;
        this.http.get('updateorder', { uid: this.uid }).then(function (res) {
            alert("付款成功");
            _this.router.navigateByUrl("order");
        });
    };
    OrderFormComponent.prototype.delete = function () {
        this.uid = sessionStorage.getItem("uid") || 0;
        this.http.get('deletgoodsorder', { uid: this.uid, type: 1 });
    };
    OrderFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-order-form',
            template: __webpack_require__("./src/app/components/order-form/order-form.component.html"),
            styles: [__webpack_require__("./src/app/components/order-form/order-form.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__utils_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__utils_common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], OrderFormComponent);
    return OrderFormComponent;
}());



/***/ }),

/***/ "./src/app/components/order/order.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"bar bar-nav\">\r\n\t<span class=\"icon icon-left fl\"  (click)=\"goBack()\"></span>\r\n  \t<h1 class='title'>\r\n  \t\t我的订单\r\n  \t</h1>\r\n</header>\r\n<div class=\"content\">\r\n\t<div class=\"buttons-tab\">\r\n\t\t<a href=\"#tab1\" class=\"tab-link active button\" (click)='getAll()'>全部订单</a>\r\n\t\t<a href=\"#tab2\" class=\"tab-link button\" (click)='unpay()'>待付款</a>\r\n\t\t<a href=\"#tab3\" class=\"tab-link button\" (click)='unsend()'>待收货</a>\r\n\t\t<a href=\"#tab4\" class=\"tab-link button\" (click)='uncommon()'>待评价</a>\r\n\t</div>\r\n\t<div class=\"content-block\">\r\n\t\t<div class=\"tabs\">\r\n\t\t<div id=\"tab1\" class=\"tab active\">\r\n\t\t\t<div class=\"content-block\">\r\n\t\t\t<ul>\r\n\t\t\t\t<li *ngFor='let obj of Data1' (click)='toDetail()'> \r\n\t\t\t\t\t<h3>下单时间：{{obj.addtime.split('T')[0]}}</h3>\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<img src={{obj.verticalImage}}>\r\n\t\t\t\t\t<p>订单编号：{{obj.addtime.split('.')[0].replace('-','').replace('-','').replace('T','').replace(':','').replace(':','').slice(2)}}</p>\r\n\t\t\t\t\t<p>订单金额：￥{{obj.vipshopPrice * obj.qty}}</p>\r\n\t\t\t\t\t<p>订单状态：{{Status[obj.order_type-1]}}</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t\t<div id=\"tab2\" class=\"tab\">\r\n\t\t\t<div class=\"content-block\">\r\n\t\t\t\t<ul>\r\n\t\t\t\t\t<li  *ngFor='let obj of Data2 '>\r\n\t\t\t\t\t\t<h3>下单时间：{{obj.addtime.split('T')[0]}}</h3>\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<img src={{obj.verticalImage}}>\r\n\t\t\t\t\t<p>订单编号：{{obj.addtime.split('.')[0].replace('-','').replace('-','').replace('T','').replace(':','').replace(':','').slice(2)}}</p>\r\n\t\t\t\t\t<p>订单金额：￥{{obj.vipshopPrice * obj.qty}}</p>\r\n\t\t\t\t\t<p>订单状态：{{Status[obj.order_type-1]}}</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div id=\"tab3\" class=\"tab\">\r\n\t\t\t<div class=\"content-block\">\r\n\t\t\t\t<ul>\r\n\t\t\t\t\t<li  *ngFor='let obj of Data3 '>\r\n\t\t\t\t\t\t<h3>下单时间：{{obj.addtime.split('T')[0]}}</h3>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<img src={{obj.verticalImage}}>\r\n\t\t\t\t\t\t<p>订单编号：{{obj.addtime.split('.')[0].replace('-','').replace('-','').replace('T','').replace(':','').replace(':','').slice(2)}}</p>\r\n\t\t\t\t\t\t<p>订单金额：￥{{obj.vipshopPrice * obj.qty}}</p>\r\n\t\t\t\t\t\t<p>订单状态：{{Status[obj.order_type-1]}}</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div id=\"tab4\" class=\"tab\">\r\n\t\t\t<div class=\"content-block\">\r\n\t\t\t\t<ul>\r\n\t\t\t\t\t<li  *ngFor='let obj of Data4'>\r\n\t\t\t\t\t\t<h3>下单时间：{{obj.addtime.split('T')[0]}}</h3>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<img src={{obj.verticalImage}}>\r\n\t\t\t\t\t\t<p>订单编号：{{obj.addtime.split('.')[0].replace('-','').replace('-','').replace('T','').replace(':','').replace(':','').slice(2)}}</p>\r\n\t\t\t\t\t\t<p>订单金额：￥{{obj.vipshopPrice * obj.qty}}</p>\r\n\t\t\t\t\t\t<p>订单状态：{{Status[obj.order_type-1]}}</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/order/order.component.scss":
/***/ (function(module, exports) {

module.exports = ".content-block {\n  margin: 0;\n  margin-top: 10px;\n  padding: 0; }\n\n.fl {\n  float: left; }\n\n.content {\n  background: #f6f6f6; }\n\nul li {\n  margin: 0 auto;\n  background: #fff;\n  width: 353px;\n  height: 148px;\n  margin-bottom: 15px; }\n\nul li h3 {\n    width: 333px;\n    height: 36px;\n    margin: 0 10px;\n    font-size: 14px;\n    color: #999;\n    border-bottom: 1px solid #e1e1e1;\n    line-height: 36px; }\n\nul li div {\n    position: relative;\n    padding-top: 25px; }\n\nul li div img {\n      position: absolute;\n      left: 10px;\n      top: 10px;\n      width: 75px;\n      height: 90px; }\n\nul li div p {\n      padding-left: 95px;\n      font-size: 12px;\n      color: #000;\n      line-height: 22px; }\n"

/***/ }),

/***/ "./src/app/components/order/order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_http_service__ = __webpack_require__("./src/app/utils/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderComponent = /** @class */ (function () {
    function OrderComponent(http, location, router) {
        this.http = http;
        this.location = location;
        this.router = router;
        this.Status = ['待付款', '待收货', '待评价'];
    }
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var uid = sessionStorage.getItem('uid');
        this.http.get('getgoodsorder', { uid: uid }).then(function (res) {
            var Res = JSON.parse(JSON.stringify(res));
            _this.Data1 = Res;
        });
    };
    OrderComponent.prototype.getAll = function () {
        var _this = this;
        var uid = sessionStorage.getItem('uid');
        this.http.get('getgoodsorder', { uid: uid }).then(function (res) {
            var Res = JSON.parse(JSON.stringify(res));
            _this.Data1 = Res;
        });
    };
    OrderComponent.prototype.unpay = function () {
        var _this = this;
        var uid = sessionStorage.getItem('uid');
        this.http.get('selectgoods_fromType', { uid: uid, type: 1 }).then(function (res) {
            var Res = JSON.parse(JSON.stringify(res));
            _this.Data2 = Res;
        });
    };
    OrderComponent.prototype.unsend = function () {
        var _this = this;
        var uid = sessionStorage.getItem('uid');
        this.http.get('selectgoods_fromType', { uid: uid, type: 2 }).then(function (res) {
            var Res = JSON.parse(JSON.stringify(res));
            _this.Data3 = Res;
        });
    };
    OrderComponent.prototype.uncommon = function () {
        var _this = this;
        var uid = sessionStorage.getItem('uid');
        this.http.get('selectgoods_fromType', { uid: uid, type: 3 }).then(function (res) {
            var Res = JSON.parse(JSON.stringify(res));
            _this.Data4 = Res;
        });
    };
    OrderComponent.prototype.goBack = function () {
        this.location.back();
    };
    OrderComponent.prototype.toDetail = function () {
        this.router.navigateByUrl("orderform");
    };
    OrderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-order',
            template: __webpack_require__("./src/app/components/order/order.component.html"),
            styles: [__webpack_require__("./src/app/components/order/order.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__utils_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/components/pinpai/pinpai.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"bigbox clearfix\">\r\n    <div class=\"clearfix\">\r\n        <search></search>\r\n    </div> \r\n    <div class=\"contain\">   \r\n        <div>    \r\n            <ul class=\"daohang\">\r\n                <li>\r\n                    <a routerLink=\"/classify\">分类</a>\r\n                </li>\r\n                <li  class=\"active\">\r\n                    <a routerLink=\"/pinpai\">品牌</a>\r\n                    <div></div>\r\n                </li>  \r\n            </ul>            \r\n            <div class=\"abc\"><a  name=\"hot\">热门品牌</a></div>\r\n            <ul class=\"hotgoods\" (click)=\"toBrandList($event)\">\r\n                <li><img src=\"../../../assets/images/i7.jpg\" alt=\"\" title=\"自然堂\"/></li>\r\n                <li><img src=\"../../../assets/images/i8.jpg\" alt=\"\"  title=\"韩束\"/></li>\r\n                <li><img src=\"../../../assets/images/i9.jpg\" alt=\"\" title=\"欧诗漫\"/></li>\r\n                <li><img src=\"../../../assets/images/i10.jpg\" alt=\"\"  title=\"花印\"/></li>\r\n                <li><img src=\"../../../assets/images/i11.jpg\" alt=\"\" title=\"IT°S SKIN\"/></li>\r\n                <li><img src=\"../../../assets/images/i12.jpg\" alt=\"\"  title=\"丸美\"/></li>\r\n            </ul>\r\n            <div class=\"abc\"><a href=\"#\" name=\"A\">A</a></div>\r\n            <ul class=\"datalist\" (click)=\"toBrandListZ($event)\">\r\n                <li *ngFor=\"let obj of Adataset\">\r\n                    <img src={{obj.img}} alt=\"\" />\r\n                    <span>{{obj.name}}</span>\r\n                </li>\r\n            </ul>\r\n            <div class=\"abc\"><a href=\"#\" name=\"B\">B</a></div>\r\n             <ul class=\"datalist\" (click)=\"toBrandListZ($event)\">\r\n                <li *ngFor=\"let obj of Bdataset\">\r\n                    <img src={{obj.img}} alt=\"\" />\r\n                    <span>{{obj.name}}</span>\r\n                </li>\r\n            </ul>\r\n            <div class=\"abc\"><a href=\"#\" name=\"C\">C</a></div>\r\n           <ul class=\"datalist\" (click)=\"toBrandListZ($event)\">\r\n               <li *ngFor=\"let obj of Cdataset\">\r\n                    <img src={{obj.img}} alt=\"\" />\r\n                    <span>{{obj.name}}</span>\r\n                </li>\r\n            </ul>\r\n            <div class=\"abc\"><a href=\"#\" name=\"D\">D</a></div>\r\n            <ul class=\"datalist\" (click)=\"toBrandListZ($event)\">\r\n                <li *ngFor=\"let obj of Ddataset\">\r\n                    <img src={{obj.img}} alt=\"\" />\r\n                    <span>{{obj.name}}</span>\r\n                </li>\r\n            </ul>\r\n            <div class=\"abc\"><a href=\"#\" name=\"E\">E</a></div>\r\n           <ul class=\"datalist\" (click)=\"toBrandListZ($event)\">\r\n                <li *ngFor=\"let obj of Ddataset\">\r\n                    <img src={{obj.img}} alt=\"\" />\r\n                    <span>{{obj.name}}</span>\r\n                </li>\r\n            </ul>\r\n            <div class=\"abc\"><a href=\"#\" name=\"F\">F</a></div>\r\n            <ul class=\"datalist\" (click)=\"toBrandListZ($event)\">\r\n                <li *ngFor=\"let obj of Bdataset\">\r\n                    <img src={{obj.img}} alt=\"\" />\r\n                    <span>{{obj.name}}</span>\r\n                </li>\r\n            </ul>\r\n            <div class=\"abc\"><a href=\"#\" name=\"G\">G</a></div>\r\n            <ul class=\"datalist\" (click)=\"toBrandListZ($event)\">\r\n                <li *ngFor=\"let obj of Cdataset\">\r\n                    <img src={{obj.img}} alt=\"\" />\r\n                    <span>{{obj.name}}</span>\r\n                </li>\r\n            </ul>\r\n            <div class=\"abc\"><a href=\"#\" name=\"H\">H</a></div>\r\n            <ul class=\"datalist\" (click)=\"toBrandListZ($event)\">\r\n                <li *ngFor=\"let obj of Fdataset\">\r\n                    <img src={{obj.img}} alt=\"\" />\r\n                    <span>{{obj.name}}</span>\r\n                </li>\r\n            </ul>\r\n            <div class=\"abc\"><a href=\"#\" name=\"I\">I</a></div>\r\n            <ul class=\"datalist\" (click)=\"toBrandListZ($event)\">\r\n                <li *ngFor=\"let obj of Bdataset\">\r\n                    <img src={{obj.img}} alt=\"\" />\r\n                    <span>{{obj.name}}</span>\r\n                </li>\r\n            </ul>\r\n            <div class=\"abc\"><a href=\"#\" name=\"J\">J</a></div>\r\n            <ul class=\"datalist\" (click)=\"toBrandListZ($event)\">\r\n                <li *ngFor=\"let obj of Ddataset\">\r\n                    <img src={{obj.img}} alt=\"\" />\r\n                    <span>{{obj.name}}</span>\r\n                </li>\r\n            </ul>\r\n            <div class=\"abc\"><a href=\"#\" name=\"K\">K</a></div>\r\n            <ul class=\"datalist\" (click)=\"toBrandListZ($event)\">\r\n                <li *ngFor=\"let obj of Fdataset\">\r\n                    <img src={{obj.img}} alt=\"\" />\r\n                    <span>{{obj.name}}</span>\r\n                </li>\r\n            </ul>\r\n            <div class=\"abc\"><a href=\"#\" name=\"L\">L</a></div>\r\n            <ul class=\"datalist\" (click)=\"toBrandListZ($event)\">\r\n                <li *ngFor=\"let obj of Cdataset\">\r\n                    <img src={{obj.img}} alt=\"\" />\r\n                    <span>{{obj.name}}</span>\r\n                </li>\r\n            </ul>\r\n            <div class=\"abc\"><a href=\"#\" name=\"M\">M</a></div>\r\n            <ul class=\"datalist\" (click)=\"toBrandListZ($event)\">\r\n                <li *ngFor=\"let obj of Fdataset\">\r\n                    <img src={{obj.img}} alt=\"\" />\r\n                    <span>{{obj.name}}</span>\r\n                </li>\r\n            </ul>\r\n            <div class=\"abc\"><a href=\"#\" name=\"N\">N</a></div>\r\n            <ul class=\"datalist\" (click)=\"toBrandListZ($event)\">\r\n                <li *ngFor=\"let obj of Bdataset\">\r\n                    <img src={{obj.img}} alt=\"\" />\r\n                    <span>{{obj.name}}</span>\r\n                </li>\r\n            </ul>\r\n            <div class=\"abc\"><a href=\"#\" name=\"O\">O</a></div>\r\n            <ul class=\"datalist\" (click)=\"toBrandListZ($event)\">\r\n                <li *ngFor=\"let obj of Ddataset\">\r\n                    <img src={{obj.img}} alt=\"\" />\r\n                    <span>{{obj.name}}</span>\r\n                </li>\r\n            </ul>\r\n            <div class=\"abc\"><a href=\"#\" name=\"P\">P</a></div>\r\n           <ul class=\"datalist\" (click)=\"toBrandListZ($event)\">\r\n                <li *ngFor=\"let obj of Bdataset\">\r\n                    <img src={{obj.img}} alt=\"\" />\r\n                    <span>{{obj.name}}</span>\r\n                </li>\r\n            </ul>\r\n            <div class=\"abc\"><a href=\"#\" name=\"Q\">Q</a></div>\r\n            <ul class=\"datalist\" (click)=\"toBrandListZ($event)\">\r\n                <li *ngFor=\"let obj of Ddataset\">\r\n                    <img src={{obj.img}} alt=\"\" />\r\n                    <span>{{obj.name}}</span>\r\n                </li>\r\n            </ul>\r\n            <div class=\"abc\"><a href=\"#\" name=\"R\">R</a></div>\r\n            <ul class=\"datalist\" (click)=\"toBrandListZ($event)\">\r\n                <li *ngFor=\"let obj of Cdataset\">\r\n                    <img src={{obj.img}} alt=\"\" />\r\n                    <span>{{obj.name}}</span>\r\n                </li>\r\n            </ul>\r\n            <div class=\"abc\"><a href=\"#\" name=\"S\">S</a></div>\r\n           <ul class=\"datalist\" (click)=\"toBrandListZ($event)\">\r\n                <li *ngFor=\"let obj of Fdataset\">\r\n                    <img src={{obj.img}} alt=\"\" />\r\n                    <span>{{obj.name}}</span>\r\n                </li>\r\n            </ul>\r\n            <div class=\"abc\"><a href=\"#\" name=\"T\">T</a></div>\r\n            <ul class=\"datalist\" (click)=\"toBrandListZ($event)\">\r\n                <li *ngFor=\"let obj of Bdataset\">\r\n                    <img src={{obj.img}} alt=\"\" />\r\n                    <span>{{obj.name}}</span>\r\n                </li>\r\n            </ul>\r\n            <div class=\"abc\"><a href=\"#\" name=\"U\">U</a></div>\r\n           <ul class=\"datalist\" (click)=\"toBrandListZ($event)\">\r\n                <li *ngFor=\"let obj of Fdataset\">\r\n                    <img src={{obj.img}} alt=\"\" />\r\n                    <span>{{obj.name}}</span>\r\n                </li>\r\n            </ul>\r\n            <div class=\"abc\"><a href=\"#\" name=\"V\">V</a></div>\r\n            <ul class=\"datalist\" (click)=\"toBrandListZ($event)\">\r\n                <li *ngFor=\"let obj of Fdataset\">\r\n                    <img src={{obj.img}} alt=\"\" />\r\n                    <span>{{obj.name}}</span>\r\n                </li>\r\n            </ul>\r\n            <div class=\"abc\"><a href=\"#\" name=\"W\">W</a></div>\r\n            <ul class=\"datalist\" (click)=\"toBrandListZ($event)\">\r\n                <li *ngFor=\"let obj of Ddataset\">\r\n                    <img src={{obj.img}} alt=\"\" />\r\n                    <span>{{obj.name}}</span>\r\n                </li>\r\n            </ul>\r\n            <div class=\"abc\"><a href=\"#\" name=\"X\">X</a></div>\r\n            <ul class=\"datalist\" (click)=\"toBrandListZ($event)\">\r\n                <li *ngFor=\"let obj of Cdataset\">\r\n                    <img src={{obj.img}} alt=\"\" />\r\n                    <span>{{obj.name}}</span>\r\n                </li>\r\n            </ul>\r\n            <div class=\"abc\"><a href=\"#\" name=\"Y\">Y</a></div>\r\n            <ul class=\"datalist\" (click)=\"toBrandListZ($event)\">\r\n                <li *ngFor=\"let obj of Adataset\">\r\n                    <img src={{obj.img}} alt=\"\" />\r\n                    <span>{{obj.name}}</span>\r\n                </li>\r\n            </ul>\r\n            <div class=\"abc\"><a href=\"#\" name=\"Z\">Z</a></div>\r\n            <ul class=\"datalist\" (click)=\"toBrandListZ($event)\">\r\n                <li *ngFor=\"let obj of Bdataset\">\r\n                    <img src={{obj.img}} alt=\"\" />\r\n                    <span>{{obj.name}}</span>\r\n                </li>\r\n            </ul>\r\n            <ul class=\"fixed\">\r\n                <li><a href=\"/pinpai#hot\">热</a></li>\r\n                <li><a href=\"/pinpai#A\">A</a></li>\r\n               <li><a href=\"/pinpai#B\">B</a></li>\r\n               <li><a href=\"/pinpai#C\">C</a></li>\r\n               <li><a href=\"/pinpai#D\">D</a></li>\r\n               <li><a href=\"/pinpai#E\">E</a></li>\r\n               <li><a href=\"/pinpai#F\">F</a></li>\r\n               <li><a href=\"/pinpai#G\">G</a></li>\r\n               <li><a href=\"/pinpai#H\">H</a></li>\r\n               <li><a href=\"/pinpai#I\">I</a></li>\r\n               <li><a href=\"/pinpai#J\">J</a></li>\r\n               <li><a href=\"/pinpai#K\">K</a></li>\r\n               <li><a href=\"/pinpai#L\">L</a></li>\r\n               <li><a href=\"/pinpai#M\">M</a></li>\r\n               <li><a href=\"/pinpai#N\">N</a></li>\r\n               <li><a href=\"/pinpai#O\">O</a></li>\r\n               <li><a href=\"/pinpai#P\">P</a></li>\r\n               <li><a href=\"/pinpai#Q\">Q</a></li>\r\n               <li><a href=\"/pinpai#R\">R</a></li>\r\n               <li><a href=\"/pinpai#S\">S</a></li>\r\n               <li><a href=\"/pinpai#T\">T</a></li>\r\n               <li><a href=\"/pinpai#U\">U</a></li>\r\n               <li><a href=\"/pinpai#V\">V</a></li>\r\n               <li><a href=\"/pinpai#W\">W</a></li>\r\n               <li><a href=\"/pinpai#X\">X</a></li>\r\n               <li><a href=\"/pinpai#Y\">Y</a></li>\r\n               <li><a href=\"/pinpai#Z\">Z</a></li>       \r\n            </ul>\r\n            <div>\r\n                <router-outlet></router-outlet>\r\n            </div>\r\n        </div> \r\n    </div> \r\n    <footnav></footnav>     \r\n</div>"

/***/ }),

/***/ "./src/app/components/pinpai/pinpai.component.scss":
/***/ (function(module, exports) {

module.exports = ".daohang {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 1.171875rem;\n  margin-top: 0.40625rem; }\n  .daohang li {\n    width: 50%;\n    text-align: center;\n    line-height: 1.171875rem;\n    font-size: 0.546875rem;\n    font-weight: bold;\n    color: #DADADA; }\n  .daohang a {\n    display: block; }\n  .active {\n  position: relative; }\n  .active a {\n    color: red; }\n  .active div:first-of-type {\n    width: 100%;\n    background-color: red;\n    position: absolute;\n    bottom: 0;\n    height: 0.0625rem; }\n  .active div:first-of-type a {\n      display: block; }\n  .hotgoods {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n  .hotgoods li {\n    width: 33%; }\n  .hotgoods li > a {\n      font-weight: bold; }\n  .hotgoods li img {\n      width: 100%; }\n  .fixed {\n  position: fixed;\n  right: 0.15625rem;\n  top: 15%; }\n  .fixed li {\n    font-size: 0.6rem;\n    line-height: 0.8rem; }\n  .fixed li > a {\n      font-weight: bold; }\n  .abc {\n  height: 1rem;\n  background-color: #F6F6F6;\n  font-size: 0.703125rem;\n  color: #626262;\n  font-weight: bold;\n  line-height: 1rem;\n  text-indent: 2em; }\n  .abc a {\n    font-weight: bold; }\n  .datalist li {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-bottom: 1px solid #F3F3F3; }\n  .datalist li span {\n    font-size: 0.46875rem;\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center; }\n  .datalist li img {\n    width: 2.796875rem;\n    height: 2.796875rem;\n    margin: 0.3125rem 0.3125rem; }\n"

/***/ }),

/***/ "./src/app/components/pinpai/pinpai.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PinpaiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_http_service__ = __webpack_require__("./src/app/utils/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_common_service__ = __webpack_require__("./src/app/utils/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//依赖组件模块引用


var PinpaiComponent = /** @class */ (function () {
    function PinpaiComponent(http, common, router) {
        this.http = http;
        this.common = common;
        this.router = router;
        this.Adataset = [
            { img: './../../../assets/images/l7.jpg', name: '丽得姿' },
            { img: './../../../assets/images/l8.jpg', name: '发朵' },
            { img: '../../../assets/images/l9.jpg', name: '欧莱雅' },
            { img: '../../../assets/images/l10.jpg', name: '纤丝鸟' },
            { img: '../../../assets/images/l2.jpg', name: '伊丽莎白.长耳熊' },
            { img: '../../../assets/images/l3.jpg', name: '美洲野牛' },
            { img: '../../../assets/images/l4.jpg', name: 'LEADERS INSOLUTION' },
            { img: '../../../assets/images/l5.jpg', name: '玛吉卡' },
            { img: '../../../assets/images/l3.jpg', name: '美洲野牛' },
            { img: '../../../assets/images/l4.jpg', name: 'LEADERS INSOLUTION' },
            { img: '../../../assets/images/l5.jpg', name: '玛吉卡' },
        ];
        this.Bdataset = [
            { img: '../../../assets/images/l7.jpg', name: '皮尔·卡丹' },
            { img: '../../../assets/images/l8.jpg', name: 'Nuxe' },
            { img: '../../../assets/images/l9.jpg', name: '骆驼' },
            { img: '../../../assets/images/l10.jpg', name: '五羊' },
            { img: '../../../assets/images/l2.jpg', name: 'ELASTINE' },
            { img: '../../../assets/images/l3.jpg', name: 'LG' },
            { img: '../../../assets/images/l3.jpg', name: 'LG' },
        ];
        this.Cdataset = [
            { img: '../../../assets/images/l7.jpg', name: '奢步士' },
            { img: '../../../assets/images/l8.jpg', name: 'YZC' },
            { img: '../../../assets/images/l9.jpg', name: '物生物' },
            { img: '../../../assets/images/l10.jpg', name: 'Tangle Teezer' },
        ];
        this.Ddataset = [
            { img: '../../../assets/images/l7.jpg', name: '森田药妆' },
            { img: '../../../assets/images/l8.jpg', name: 'THE SAEM' },
            { img: '../../../assets/images/l9.jpg', name: '皮尔·卡丹' },
            { img: '../../../assets/images/l10.jpg', name: '婵真' },
            { img: '../../../assets/images/l2.jpg', name: '丽得姿' }
        ];
        this.Edataset = [
            { img: '../../../assets/images/l7.jpg', name: '伊加' },
            { img: '../../../assets/images/l8.jpg', name: '迪赛尼斯' },
            { img: '../../../assets/images/l9.jpg', name: '红色小象' },
            { img: '../../../assets/images/l10.jpg', name: 'Tangle Teezer' },
        ];
        this.Fdataset = [
            { img: '../../../assets/images/l7.jpg', name: '艾欧唯' },
            { img: '../../../assets/images/l8.jpg', name: '福海堂' },
            { img: '../../../assets/images/l9.jpg', name: 'too cool for school' },
        ];
    }
    PinpaiComponent.prototype.ngOnInit = function () {
    };
    PinpaiComponent.prototype.toBrandList = function (e) {
        if (e.target.tagName == "IMG") {
            this.common.type = '';
            this.common.brandStoreName = e.target.title;
            this.router.navigate(['/brand']);
        }
    };
    PinpaiComponent.prototype.toBrandListZ = function (e) {
        if (e.target.tagName == "LI") {
            this.common.type = '';
            this.common.brandStoreName = e.target.lastElementChild.innerText;
            this.router.navigate(['/brand']);
        }
        if (e.target.tagName == "IMG") {
            this.common.type = '';
            this.common.brandStoreName = e.target.nextElementSibling.innerText;
            this.router.navigate(['/brand']);
        }
        if (e.target.tagName == "SPAN") {
            this.common.type = '';
            this.common.brandStoreName = e.target.innerText;
            this.router.navigate(['/brand']);
        }
    };
    PinpaiComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pinpai',
            template: __webpack_require__("./src/app/components/pinpai/pinpai.component.html"),
            styles: [__webpack_require__("./src/app/components/pinpai/pinpai.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__utils_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_3__utils_common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], PinpaiComponent);
    return PinpaiComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"title\">\r\n  <span class=\"icon icon-left\"></span>\r\n  <span>注册</span>\r\n</div>\r\n<form>\r\n  <input type=\"text\" placeholder=\"手机号/用户\"/>\r\n  <input type=\"password\" placeholder=\"密码（6-20位字母、数字或符号）\"/>\r\n  <button (click)='register()'>注册</button>\r\n  <p>\r\n    注册即表示接受<span class=\"check\">乐蜂网用户协议</span>\r\n  </p>\r\n</form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.scss":
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  height: 100%;\n  background: #F6F6F6; }\n  .container .title {\n    width: 100%;\n    -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#fcfdfe), to(#f8f9fa));\n    background-image: linear-gradient(180deg, #fcfdfe, #f8f9fa);\n    text-align: center;\n    margin: 0;\n    position: relative; }\n  .container .title span:nth-of-type(2) {\n      display: inline-block;\n      width: 300px; }\n  .container .title span:nth-of-type(3) {\n      margin-right: 15px; }\n  .container .title a {\n      display: inline-block; }\n  .container form {\n    margin: 30px 19px;\n    margin-bottom: 0;\n    width: 338px;\n    height: 206px; }\n  .container form input {\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      width: 337px;\n      height: 42px;\n      border: 1px solid #ddd;\n      padding: 8px;\n      font-size: 12px;\n      color: #444;\n      line-height: 42px;\n      margin: 0; }\n  .container form button {\n      width: 338px;\n      height: 45px;\n      background-color: #ff0056;\n      text-align: center;\n      line-height: 45px;\n      color: #fff;\n      font-size: 14px;\n      border-radius: 3px;\n      outline: none;\n      text-shadow: 0 -1px rgba(0, 0, 0, 0.25);\n      margin-top: 50px; }\n  .container form a {\n      font-size: 12px;\n      color: #3195cb;\n      margin-right: 5px; }\n  .container form a:nth-of-type(1) {\n      margin-left: 225px; }\n  .container form p {\n      margin-top: 25px;\n      font-size: 12px;\n      color: #444;\n      text-align: center; }\n  .container form p .check {\n        color: #F3B23C;\n        font-size: 12px; }\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_http_service__ = __webpack_require__("./src/app/utils/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        var username = document.getElementsByTagName('input')[0].value;
        var password = document.getElementsByTagName('input')[1].value;
        if (username.trim() == '' || password.trim() == '') {
            alert('用户名或密码不为空');
            console.log(username, password);
        }
        else {
            this.http.post('registerapp', { user: username, psd: password }).then(function (res) {
                var Res = JSON.parse(JSON.stringify(res));
                if (Res.status == '该帐号已注册') {
                    alert('该帐号已注册');
                }
                else {
                    alert('注册成功');
                    _this.router.navigateByUrl("login");
                }
            });
        }
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__utils_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"bar bar-header-secondary\">\r\n  <div class=\"searchbar\">\r\n    <a class=\"searchbar-cancel\">取消</a>\r\n    <div class=\"search-input\">\r\n      <label class=\"icon icon-search\" for=\"search\"></label>\r\n      <input type=\"search\" id='search' placeholder='输入关键字...'/>\r\n    </div>\r\n  </div>\r\n</div>\r\n  \r\n"

/***/ }),

/***/ "./src/app/components/search/search.component.scss":
/***/ (function(module, exports) {

module.exports = ".bar-header-secondary {\n  top: 0; }\n\n.bar {\n  position: relative; }\n\n.bar .searchbar {\n    background: #fff; }\n\n.bar .searchbar .search-input input {\n      background: #F3F3F3;\n      color: #5A5A5A; }\n"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'search',
            template: __webpack_require__("./src/app/components/search/search.component.html"),
            styles: [__webpack_require__("./src/app/components/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/shopping/shopping.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bigbox\">\r\n\t<div class=\"clearfix\">\r\n\t\t<search></search>\r\n\t</div>\r\n\t<div class=\"contain clearfix\" (scroll)='getScroll()'>\r\n\t\t<banner></banner>\r\n\t\t<div id=\"contain\">\r\n\t\t\t<div class=\"classifyItem\">\r\n\t\t\t\t<ul (click)=toList($event)>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<img title=\"保湿\" src=\"http://a2.vimage1.com/upload/merchandise/pdcvis/2017/12/25/124/5f977f3a-fd36-41b0-ba0e-5443c921c13b.jpg\" />\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t保湿\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<img title=\"洁面\" src=\"http://a2.vimage1.com/upload/merchandise/pdcvis/2016/11/09/127/88455dfc-0654-4623-bc6d-c8aed45d1bef.jpg\" />\r\n\t\t\t\t\t\t<p>洁面</p>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<img title=\"彩妆\" src=\"http://a2.vimage1.com/upload/merchandise/pdcvis/2017/09/30/189/98532ee3-8ed0-4d17-9a54-591e5b0794af.jpg\" />\r\n\t\t\t\t\t\t<p>彩妆</p>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<img title=\"面膜\" src=\"http://a2.vimage1.com/upload/merchandise/pdcvis/2017/12/29/148/a9e38982-1b1e-4125-8f08-949f27b80a78.jpg\" />\r\n\t\t\t\t\t\t<p>面膜</p>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<img title=\"洗护\" src=\"http://a2.vimage1.com/upload/merchandise/pdcvis/2016/08/31/26/7ce84757-2e03-455e-8d6b-8c6e4f46eaa1.jpg\" />\r\n\t\t\t\t\t\t<p>洗护</p>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<img title=\"卸妆\" src=\"http://a2.vimage1.com/upload/merchandise/pdcvis/2017/08/31/196/390cb6ca7cd944d38503eac8a1fd6b9f-5.jpg\" />\r\n\t\t\t\t\t\t<p>卸妆</p>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<img title=\"香氛\" src=\"http://a2.vimage1.com/upload/merchandise/pdcvis/2018/01/03/88/dc96ceaab98a4e7ab1bf6a9aa248512f-5.jpg\" />\r\n\t\t\t\t\t\t<p>香氛</p>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<img title=\"防晒\" src=\"http://a2.vimage1.com/upload/merchandise/pdc/125/088/7018297069307088125/6/020714352837-5.jpg\" />\r\n\t\t\t\t\t\t<p>防晒</p>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"classifyItem2\">\r\n\t\t\t\t<div class=\"zbyTitle\">\r\n\r\n\t\t\t\t\t<i></i>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t护肤攻略\r\n\t\t\t\t\t\t<span>SKIN CARE</span>\r\n\t\t\t\t\t</p>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t<ul (click)=toList($event)>\r\n\t\t\t\t\t<li><img src=\"./../../../assets/images/i1.jpg\" title=\"美白亮肤\"/></li>\r\n\t\t\t\t\t<li><img src=\"./../../../assets/images/i2.jpg\" title=\"清爽\"/></li>\r\n\t\t\t\t\t<li><img src=\"./../../../assets/images/i3.jpg\" title=\"防晒\"/></li>\r\n\t\t\t\t\t<li><img src=\"./../../../assets/images/i4.jpg\" title=\"保湿\"/></li>\r\n\t\t\t\t\t<li><img src=\"./../../../assets/images/i5.jpg\" title=\"彩妆\"/></li>\r\n\t\t\t\t\t<li><img src=\"./../../../assets/images/i6.jpg\" title=\"舒缓\"/></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"classifyItem3\">\r\n\t\t\t\t<div class=\"zbyTitle\">\r\n\r\n\t\t\t\t\t<i></i>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t品牌馆\r\n\t\t\t\t\t\t<span>BRAND SHOP</span>\r\n\t\t\t\t\t</p>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t<ul (click)=\"toBrandList($event)\">\r\n\t\t\t\t\t<li><img src=\"./../../../assets/images/i7.jpg\" title=\"自然堂\" /></li>\r\n\t\t\t\t\t<li><img src=\"./../../../assets/images/i8.jpg\" title=\"韩束\"/></li>\r\n\t\t\t\t\t<li><img src=\"./../../../assets/images/i9.jpg\" title=\"欧诗漫\"/></li>\r\n\t\t\t\t\t<li><img src=\"./../../../assets/images/i10.jpg\" title=\"花印\"/></li>\r\n\t\t\t\t\t<li><img src=\"./../../../assets/images/i11.jpg\" title=\"IT°S SKIN\"/></li>\r\n\t\t\t\t\t<li><img src=\"./../../../assets/images/i12.jpg\" title=\"丸美\"/></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"classifyItem4\">\r\n\t\t\t\t<div class=\"zbyTitle\">\r\n\r\n\t\t\t\t\t<i></i>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t人气精华榜\r\n\t\t\t\t\t\t<span>ELITE LIST</span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"uibox\">\r\n\t\t\t\t\t<!--<goodslist></goodslist>-->\r\n\t\t\t\t\t<div class=\"buttons-tab typeNav\" (click)=\"selectType($event)\">\r\n\t\t\t\t\t\t<a href=\"#tab1\" class=\"tab-link active button\">保湿</a>\r\n\t\t\t\t\t\t<a href=\"#tab2\" class=\"tab-link button\">洗护</a>\r\n\t\t\t\t\t\t<a href=\"#tab3\" class=\"tab-link button\">防晒</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"content-block\">\r\n\t\t\t\t\t\t<div class=\"tabs\">\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div id=\"tab1\" class=\"tab active\">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<goodslist [type]=\"'保湿'\"></goodslist>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div id=\"tab2\" class=\"tab\">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<goodslist [type]=\"'洗护'\"></goodslist>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div id=\"tab3\" class=\"tab\">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<goodslist [type]=\"'防晒'\"></goodslist>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<!-- <a routerLink=\"/goodslist\">跳转到列表页</a>  -->\r\n\t\t</div>\r\n\t</div>\r\n\t<footnav></footnav>\r\n\t\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/shopping/shopping.component.scss":
/***/ (function(module, exports) {

module.exports = "#contain {\n  position: relative;\n  top: -1.4rem;\n  height: 100%;\n  background: #f5f5f5; }\n  #contain .classifyItem {\n    background: #fff;\n    margin-bottom: 0.466667rem; }\n  #contain .classifyItem ul {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap; }\n  #contain .classifyItem li {\n      width: 25%;\n      text-align: center;\n      padding: 0.466667rem; }\n  #contain .classifyItem li img {\n        width: 1.853333rem; }\n  #contain .classifyItem li p {\n        font-size: 0.526667rem;\n        font-weight: bold; }\n  #contain .classifyItem2 {\n    background: #fff;\n    margin-bottom: 0.466667rem; }\n  #contain .classifyItem2 ul {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap; }\n  #contain .classifyItem2 ul li {\n        width: 50%;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between; }\n  #contain .classifyItem2 ul li img {\n          width: 9.033333rem; }\n  .zbyTitle {\n  position: relative;\n  font-size: 0.813333rem;\n  text-align: center;\n  padding-top: 0.366667rem;\n  height: 2.866667rem; }\n  .zbyTitle i {\n    position: absolute;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    display: block;\n    border: 1px solid #A0A0A0;\n    width: 5.8rem;\n    height: 2.1rem; }\n  .zbyTitle p {\n    height: 2.5rem;\n    background: #fff;\n    color: #DB7897;\n    position: absolute;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    top: 0.233333rem;\n    padding: 0 0.533333rem; }\n  .zbyTitle span {\n    display: block;\n    color: #979797;\n    font-size: 0.226667rem; }\n  .classifyItem3 {\n  background: #fff;\n  border-bottom: 0.466667rem solid  #f5f5f5; }\n  .classifyItem3 ul {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n  .classifyItem3 ul li {\n      width: 33%; }\n  .classifyItem3 ul li img {\n        width: 100%; }\n  .classifyItem4 {\n  background: #fff; }\n  .buttons-tab {\n  border-top: 1px solid #A0A0A0; }\n  .buttons-tab .button.active {\n    color: #ED5D8E;\n    border-color: #D21555; }\n  .content-block {\n  margin: 0; }\n"

/***/ }),

/***/ "./src/app/components/shopping/shopping.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_http_service__ = __webpack_require__("./src/app/utils/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_common_service__ = __webpack_require__("./src/app/utils/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//依赖组件模块引用



var ShoppingComponent = /** @class */ (function () {
    function ShoppingComponent(http, common, router) {
        this.http = http;
        this.common = common;
        this.router = router;
    }
    ShoppingComponent.prototype.ngOnInit = function () {
    };
    ShoppingComponent.prototype.selectType = function (e) {
        this.common.type = e.target.innerText;
    };
    ShoppingComponent.prototype.toList = function (e) {
        if (e.target.tagName == "P") {
            this.common.brandStoreName = '';
            this.common.type = e.target.innerText;
            this.router.navigate(['/goodslist']);
        }
        if (e.target.tagName == "IMG") {
            this.common.brandStoreName = '';
            this.common.type = e.target.title;
            this.router.navigate(['/goodslist']);
        }
    };
    ShoppingComponent.prototype.getScroll = function () {
        if (__WEBPACK_IMPORTED_MODULE_4_jquery__('.contain').scrollTop() < 1000) {
            __WEBPACK_IMPORTED_MODULE_4_jquery__('.typeNav').removeAttr("style");
        }
        else {
            __WEBPACK_IMPORTED_MODULE_4_jquery__('.typeNav').css({ 'position': 'fixed', 'top': 44, 'z-index': '2', 'width': '100%' });
        }
    };
    ShoppingComponent.prototype.toBrandList = function (e) {
        if (e.target.tagName == "IMG") {
            this.common.type = '';
            this.common.brandStoreName = e.target.title;
            this.router.navigate(['/brand']);
        }
    };
    ShoppingComponent.prototype.tocar = function () {
        this.router.navigate(['/car']);
    };
    ShoppingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-shopping',
            template: __webpack_require__("./src/app/components/shopping/shopping.component.html"),
            styles: [__webpack_require__("./src/app/components/shopping/shopping.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__utils_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_3__utils_common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], ShoppingComponent);
    return ShoppingComponent;
}());



/***/ }),

/***/ "./src/app/components/super-sell/super-sell.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bigbox\" >\r\n\t<div class=\"clearfix\">\r\n\t\t<search></search>\r\n\t</div>\r\n\t<div class=\"contain\"  (scroll)='getScroll()'>\r\n\t\t<banner></banner>\r\n\t\t<div id=\"contain\">\r\n\t\t\t<div class=\"article1\">\r\n\t\t\t\t<ul>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<img src='http://b.appsimg.com/upload/maappactadmin/2018/02/24/115/151947268990_214x232_70.png'>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<img src='http://b.appsimg.com/upload/maappactadmin/2018/02/24/97/151947285998_214x232_70.png'>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<img src='http://b.appsimg.com/upload/maappactadmin/2018/02/24/82/151947300377_214x232_70.png'>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<img src='http://b.appsimg.com/upload/maappactadmin/2018/02/24/20/151947466768_214x232_70.png'>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<img src='http://h5rsc.vipstatic.com/lefeng_venue/224/1.gif'>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"article2\">\r\n\t\t\t\t\t<img src=\"//b.appsimg.com/upload/mst/2018/01/31/136/7f1980225726c610de52d06f48a3f7f5.jpg\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"article3 clearfix\">\r\n\t\t\t\t\t<img src=\"//b.appsimg.com/upload/mst/2018/03/02/108/e2cf93ebd13a0a184f7bac0591006b87.gif\" class=\"function2\">\r\n\t\t\t\t\t<img src=\"//b.appsimg.com/upload/mst/2018/03/02/15/split_008317550a57161930855734a6dfd5527.jpg\">\r\n\t\t\t\t\t<img src=\"//b.appsimg.com/upload/mst/2018/03/02/112/split_108317550a57161930855734a6dfd5527.jpg\">\r\n\t\t\t\t\t<img src=\"//b.appsimg.com/upload/mst/2018/03/02/5/3fff997303f8cca7ac2cd87e43c8b41b.gif\" >\r\n\t\t\t\t\t<img src=\"//b.appsimg.com/upload/mst/2018/03/05/38/69bca8843ab0ea6a80a10fbd23c85187.jpg\" >\r\n\t\t\t\t\t<img src=\"//b.appsimg.com/upload/mst/2018/03/05/55/13736f6b05bf5854fec2f706abeaa816.gif\">\r\n\t\t\t\t\t<img src=\"//b.appsimg.com/upload/mst/2018/03/02/168/0a2b96b326a106a4101964eb831d0d11.gif\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"article4 clearfix\">\r\n\t\t\t\t\t\t<div class=\"buttons-tab\">\r\n\t\t\t\t\t\t<a href=\"#tab1\" class=\"tab-link active button title\" (click)='getA()'>促销专场</a>\r\n\t\t\t\t\t\t<a href=\"#tab2\" class=\"tab-link button title\" (click)='getB()'>品牌专区</a>\r\n\t\t\t\t\t\t<a href=\"#tab3\" class=\"tab-link button title\" (click)='getC()'>每日精选</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"content-block\">\r\n\t\t\t\t\t\t<div class=\"tabs\">\r\n\t\t\t\t\t\t\t<div id=\"tab1\" class=\"tab active\">\r\n\t\t\t\t\t\t\t<div class=\"content-block\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div id=\"tab2\" class=\"tab\">\r\n\t\t\t\t\t\t\t<div class=\"content-block\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div id=\"tab3\" class=\"tab\">\r\n\t\t\t\t\t\t\t<div class=\"content-block\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- <h1 class=\"\"></h1>\r\n\t\t\t\t\t<h1 class=\"title\"></h1>\r\n\t\t\t\t\t<h1 class=\"title\"></h1> -->\r\n\t\t\t</div>\r\n\t\t\t<!--<div class=\"article5\">\r\n\t\t\t\t<img src=\"http://b.appsimg.com/upload/maappactadmin/2018/03/02/86/151998031095_710x260_70.jpg\">\r\n\t\t\t\t<img src=\"http://b.appsimg.com/upload/maappactadmin/2018/03/02/182/15199804794_710x260_70.jpg\">\r\n\t\t\t\t<img src=\"http://b.appsimg.com/upload/maappactadmin/2018/03/02/62/151998059726_710x260_70.jpg\">\r\n\t\t\t\t<img src=\"http://b.appsimg.com/upload/maappactadmin/2018/03/02/153/151998074321_710x260_70.jpg\">\r\n\t\t\t\t<img src=\"http://b.appsimg.com/upload/maappactadmin/2018/03/02/90/151998088280_710x260_70.jpg\">\r\n\t\t\t\t<img src=\"http://b.appsimg.com/upload/maappactadmin/2018/02/28/36/151978389937_710x260_70.jpg\">\r\n\t\t\t</div>-->\r\n\t\t\t<ul class=\"article6\">\r\n\t\t\t\t<li *ngFor='let obj of Brand'>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<img src={{obj.brandImage}} (click)='getType(obj.name)'>\r\n\t\t\t\t\t\t<span>{{obj.pms}}</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<p>{{obj.name}}</p>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t\t<ul class=\"article7 clearfix\">\r\n\t\t\t\t<li *ngFor='let obj of Discount'>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<img src={{obj.verticalImage}} >\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"tag-warp\"></div>\r\n\t\t\t\t\t<p><strong>{{obj.brandStoreName}}&nbsp;</strong>{{obj.name}}</p>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<span><i>￥</i>{{obj.vipshopPrice}}</span>\r\n\t\t\t\t\t\t<span>￥{{obj.totalCount}}</span>\r\n\t\t\t\t\t\t<span class=\"icon icon-cart\" ></span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n\t\r\n\t<footnav></footnav>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/super-sell/super-sell.component.scss":
/***/ (function(module, exports) {

module.exports = ".selected {\n  border-bottom: 3px solid #ccc; }\n\n#contain {\n  position: relative;\n  top: -1.4rem;\n  height: 100%;\n  background: #f5f5f5; }\n\n#contain .article1 {\n    margin-bottom: 0.466667rem;\n    background: #fff; }\n\n#contain .article1 ul {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap; }\n\n#contain .article1 li {\n      width: 20%;\n      background: #fff; }\n\n#contain .article1 li img {\n        width: 80px;\n        height: 100px; }\n\n#contain .article1 li p {\n        font-size: .4rem;\n        color: #444; }\n\n#contain .article2 {\n    background: #fff;\n    height: 182px; }\n\n#contain .article2 img {\n      width: 100%; }\n\n#contain .article3 {\n    background: #fff; }\n\n#contain .article3 img {\n      width: 100%;\n      height: 111px;\n      float: left; }\n\n#contain .article3 img:nth-of-type(1) {\n      width: 100%;\n      height: 258px;\n      float: left; }\n\n#contain .article3 img:nth-of-type(4) {\n      height: 70px; }\n\n#contain .article3 img:nth-of-type(5) {\n      height: 76px; }\n\n#contain .article3 img:nth-of-type(6) {\n      height: 229px; }\n\n#contain .article3 img:nth-of-type(7) {\n      height: 422px; }\n\n#contain .article4 {\n    background: #fff; }\n\n#contain .article4 .content-block {\n      margin: 0 !important; }\n\n#contain .article4 .title {\n      width: 125px !important;\n      position: relative !important;\n      float: left;\n      font-size: 14px;\n      color: #444;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box; }\n\n#contain .article5 {\n    padding: 10px; }\n\n#contain .article5 img {\n      width: 355px;\n      height: 130px;\n      margin-top: 3px; }\n\n#contain .article6 li {\n    position: relative; }\n\n#contain .article6 li img {\n      width: 375px;\n      height: 165px; }\n\n#contain .article6 li span {\n      position: absolute;\n      bottom: 27px;\n      background: #000;\n      opacity: 0.5;\n      color: #fff;\n      text-align: left;\n      font-size: 14px;\n      padding: 0 10px;\n      width: 100%; }\n\n#contain .article6 li p {\n      padding: 0 10px;\n      font-size: 14px;\n      color: #444; }\n\n#contain .article7 li {\n    width: 187px;\n    height: 283px;\n    padding: 10px;\n    float: left; }\n\n#contain .article7 li div img {\n      width: 155px;\n      height: 186px; }\n\n#contain .article7 li p {\n      font-size: 12px;\n      width: 168px;\n      height: 25px;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      overflow: hidden; }\n\n#contain .article7 li .tag-warp {\n      width: 168px;\n      height: 20px; }\n\n#contain .article7 li span:nth-of-type(2) {\n      color: #ccc;\n      font-size: 12px;\n      text-decoration: line-through; }\n\n#contain .article7 li span:nth-of-type(1) {\n      color: #444;\n      font-size: 20px; }\n\n#contain .article7 li span:nth-of-type(1) i {\n        font-size: 12px; }\n\n#contain .article7 li span:nth-of-type(3) {\n      color: pink;\n      width: 30px;\n      height: 30px;\n      float: right; }\n"

/***/ }),

/***/ "./src/app/components/super-sell/super-sell.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperSellComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_http_service__ = __webpack_require__("./src/app/utils/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_common_service__ = __webpack_require__("./src/app/utils/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SuperSellComponent = /** @class */ (function () {
    function SuperSellComponent(http, common, router) {
        this.http = http;
        this.common = common;
        this.router = router;
        this.type = null;
    }
    SuperSellComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('selectBrand').then(function (res) {
            var data = JSON.parse(JSON.stringify(res));
            _this.Brand = data;
        });
        this.http.get('getgoods').then(function (res) {
            var dataB = JSON.parse(JSON.stringify(res));
            _this.Discount = dataB;
        });
    };
    SuperSellComponent.prototype.getType = function (_type) {
        this.common.type = _type;
        this.router.navigateByUrl("goodslist");
    };
    SuperSellComponent.prototype.getScroll = function () {
        if (__WEBPACK_IMPORTED_MODULE_2_jquery__('.contain').scrollTop() < 1731) {
            __WEBPACK_IMPORTED_MODULE_2_jquery__('.article4').removeAttr("style");
        }
        else {
            __WEBPACK_IMPORTED_MODULE_2_jquery__('.article4').css({ 'position': 'fixed', 'top': 44, 'z-index': '2' });
        }
    };
    SuperSellComponent.prototype.getKeys = function (_obj) {
        return Object.keys(_obj);
    };
    SuperSellComponent.prototype.getA = function () {
    };
    SuperSellComponent.prototype.getB = function () {
    };
    SuperSellComponent.prototype.getC = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SuperSellComponent.prototype, "type", void 0);
    SuperSellComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-super-sell',
            template: __webpack_require__("./src/app/components/super-sell/super-sell.component.html"),
            styles: [__webpack_require__("./src/app/components/super-sell/super-sell.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__utils_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_4__utils_common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], SuperSellComponent);
    return SuperSellComponent;
}());



/***/ }),

/***/ "./src/app/router/router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_car_car_component__ = __webpack_require__("./src/app/components/car/car.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_my_my_component__ = __webpack_require__("./src/app/components/my/my.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_list_list_component__ = __webpack_require__("./src/app/components/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_classify_classify_component__ = __webpack_require__("./src/app/components/classify/classify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_shopping_shopping_component__ = __webpack_require__("./src/app/components/shopping/shopping.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_super_sell_super_sell_component__ = __webpack_require__("./src/app/components/super-sell/super-sell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_pinpai_pinpai_component__ = __webpack_require__("./src/app/components/pinpai/pinpai.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_order_order_component__ = __webpack_require__("./src/app/components/order/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_details_details_component__ = __webpack_require__("./src/app/components/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_brand_list_brand_list_component__ = __webpack_require__("./src/app/components/brand-list/brand-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_order_form_order_form_component__ = __webpack_require__("./src/app/components/order-form/order-form.component.ts");














var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_6__components_super_sell_super_sell_component__["a" /* SuperSellComponent */],
    },
    { path: 'shopping', component: __WEBPACK_IMPORTED_MODULE_5__components_shopping_shopping_component__["a" /* ShoppingComponent */] },
    { path: 'car', component: __WEBPACK_IMPORTED_MODULE_1__components_car_car_component__["a" /* CarComponent */] },
    { path: 'classify', component: __WEBPACK_IMPORTED_MODULE_4__components_classify_classify_component__["a" /* ClassifyComponent */] },
    { path: 'my', component: __WEBPACK_IMPORTED_MODULE_2__components_my_my_component__["a" /* MyComponent */] },
    { path: 'super', component: __WEBPACK_IMPORTED_MODULE_6__components_super_sell_super_sell_component__["a" /* SuperSellComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'goodslist', component: __WEBPACK_IMPORTED_MODULE_3__components_list_list_component__["a" /* ListComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'pinpai', component: __WEBPACK_IMPORTED_MODULE_9__components_pinpai_pinpai_component__["a" /* PinpaiComponent */] },
    { path: 'order', component: __WEBPACK_IMPORTED_MODULE_10__components_order_order_component__["a" /* OrderComponent */] },
    { path: 'details', component: __WEBPACK_IMPORTED_MODULE_11__components_details_details_component__["a" /* DetailsComponent */] },
    { path: 'brand', component: __WEBPACK_IMPORTED_MODULE_12__components_brand_list_brand_list_component__["a" /* BrandListComponent */] },
    { path: 'orderform', component: __WEBPACK_IMPORTED_MODULE_13__components_order_form_order_form_component__["a" /* OrderFormComponent */] }
];
var RootRouter = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: false });


/***/ }),

/***/ "./src/app/utils/common.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CommonService = /** @class */ (function () {
    function CommonService() {
        this.type = '保湿';
        this.gid = '';
        this.brandStoreName = '';
        //  constructor(private http: Http){
        //      http.get('http://localhost:88/config1707/dictionary.txt').subscribe((dicRes) => {
        //          this.publicDic = dicRes.json();
        //      })
        //  }
    }
    CommonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/utils/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//解决传参问题

var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.baseUrl = 'http://10.3.132.91:3000/';
    }
    // private baseUrl = 'http://10.3.132.88:3000/';
    HttpService.prototype.getUrl = function (_url) {
        if (_url.startsWith('http')) {
            return _url;
        }
        return this.baseUrl + _url;
    };
    HttpService.prototype.get = function (api, params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        return new Promise(function (resolve, reject) {
            //添加随机数，每次请求的url问题，解决浏览器缓存问题
            params['_'] = Math.random();
            var ops = Object.assign({}, { params: params });
            _this.http.get(_this.getUrl(api), ops).toPromise().then(function (res) {
                resolve(res.json());
            });
        });
    };
    HttpService.prototype.post = function (api, params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        return new Promise(function (resolve, reject) {
            //拼接请求参数
            var urlSearchParams = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* URLSearchParams */]();
            for (var key in params) {
                urlSearchParams.append(key, params[key]);
            }
            //把参数先转成字符串
            var param = urlSearchParams.toString();
            //请求头
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' });
            _this.http.post(_this.getUrl(api), param, { headers: headers }).toPromise().then(function (res) {
                resolve(res.json());
            });
        });
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map