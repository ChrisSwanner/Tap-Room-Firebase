webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-title\">\n    <h3>Add New Keg</h3>\n  </div>\n  <div class=\"card-body\">\n    <div>\n      <div>\n        <label>Name:</label>\n        <br>\n        <input #newName>\n      </div>\n\n      <div>\n        <label>Alcohol Content</label>\n        <br>\n        <input type=\"number\" #newAlcoholContent>\n      </div>\n\n      <div>\n        <label>Price:</label>\n        <br>\n        <input type=\"number\" #newPrice>\n      </div>\n\n      <div>\n        <label>Style:</label>\n        <br>\n        <select #newStyle>\n                  <option value=\"IPA\">IPA</option>\n                  <option value=\"APA\">APA</option>\n                  <option value=\"Red Ale\">Red Ale</option>\n                  <option value=\"Pilsner\">Pilsner</option>\n                  <option value=\"Brown Ale\">Brown Ale</option>\n                  <option value=\"Kolsch\">Kolsch</option>\n                  <option value=\"Belgian\">Belgian</option>\n                  <option value=\"Hefeweizen\">Hefeweizen</option>\n                  <option value=\"Sour\">Sour</option>\n                  <option value=\"Lager\">Lager</option>\n                  <option value=\"Stout\">Stout</option>\n                </select>\n      </div>\n        <button class=\"btn btn-dark\"(click)=\"submitForm(newName.value, newAlcoholContent.value, newPrice.value, newStyle.value); newName.value=''; newAlcoholContent.value=''; newPrice.value=''; newStyle.value=''\">Add</button>\n    </div>\n  </div>\n</div>\n\n<div>\n  <app-beer-tap></app-beer-tap>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keg_service__ = __webpack_require__("../../../../../src/app/keg.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keg_model__ = __webpack_require__("../../../../../src/app/keg.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = /** @class */ (function () {
    function AdminComponent(kegService) {
        this.kegService = kegService;
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.submitForm = function (name, alcoholContent, price, style) {
        var newKeg = new __WEBPACK_IMPORTED_MODULE_2__keg_model__["a" /* Keg */](name, alcoholContent, price, style);
        this.kegService.addKeg(newKeg);
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin',
            template: __webpack_require__("../../../../../src/app/admin/admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__keg_service__["a" /* KegService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__keg_service__["a" /* KegService */]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/api-keys.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyAfWCewxdnGXIcsoZjEQkhvb-13ii_teWY",
    authDomain: "keglist-847ae.firebaseapp.com",
    databaseURL: "https://keglist-847ae.firebaseio.com",
    projectId: "keglist-847ae",
    storageBucket: "keglist-847ae.appspot.com",
    messagingSenderId: "534935074152"
};


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar bg-dark\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand abs\" routerLink=\"\">The Salty Sea Dog</a>\n    </div>\n    <ul class=\"navbar-nav mr-auto\">\n      <!-- <li class=\"nav-item\" ><a class=\"nav-link\"  routerLink=\"about\">About</a></li> -->\n      <li class=\"nav-item\" ><a class=\"nav-link\" routerLink=\"beer-tap\">Beers On Tap</a></li>\n      <li class=\"nav-item\" ><a id=\"adminLink\" class=\"nav-link\" routerLink=\"admin\">Admin</a></li>\n    </ul>\n  </div>\n</nav>\n\n<div style=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'The Salty Sea Dog';
        this.isHappyHour = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var interval = setInterval(function () {
            var currentTime = new Date();
            if (currentTime.getHours() === 17) {
                _this.isHappyHour = true;
            }
            else if (currentTime.getHours() === 21) {
                _this.isHappyHour = false;
            }
        }, 1000);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fireConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__welcome_welcome_component__ = __webpack_require__("../../../../../src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__beer_tap_beer_tap_component__ = __webpack_require__("../../../../../src/app/beer-tap/beer-tap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__edit_keg_edit_keg_component__ = __webpack_require__("../../../../../src/app/edit-keg/edit-keg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__api_keys__ = __webpack_require__("../../../../../src/app/api-keys.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var fireConfig = {
    apiKey: __WEBPACK_IMPORTED_MODULE_11__api_keys__["a" /* firebaseConfig */].apiKey,
    authDomain: __WEBPACK_IMPORTED_MODULE_11__api_keys__["a" /* firebaseConfig */].authDomain,
    databaseURL: __WEBPACK_IMPORTED_MODULE_11__api_keys__["a" /* firebaseConfig */].databaseURL,
    storageBucket: __WEBPACK_IMPORTED_MODULE_11__api_keys__["a" /* firebaseConfig */].storageBucket
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__welcome_welcome_component__["a" /* WelcomeComponent */],
                // AboutComponent,
                // beerTapComponent,
                // AdminComponent,
                // EditBeerComponent,
                __WEBPACK_IMPORTED_MODULE_8__beer_tap_beer_tap_component__["a" /* BeerTapComponent */],
                __WEBPACK_IMPORTED_MODULE_9__admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_10__edit_keg_edit_keg_component__["a" /* EditKegComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_11__api_keys__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__welcome_welcome_component__ = __webpack_require__("../../../../../src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__beer_tap_beer_tap_component__ = __webpack_require__("../../../../../src/app/beer-tap/beer-tap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");



// import { AboutComponent }   from './about/about.component';

var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__welcome_welcome_component__["a" /* WelcomeComponent */]
    },
    // {
    //   path: 'about',
    //   component: AboutComponent
    // },
    {
        path: 'beer-tap',
        component: __WEBPACK_IMPORTED_MODULE_2__beer_tap_beer_tap_component__["a" /* BeerTapComponent */]
    },
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_3__admin_admin_component__["a" /* AdminComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/beer-tap/beer-tap.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\n  padding: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/beer-tap/beer-tap.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <br>\n    <ul>\n      <li id=\"kegList\" [class]=\"alcoholContentColor(currentKeg)\"  *ngFor=\"let currentKeg of kegs | async\">\n        <h2>{{currentKeg.name}}</h2>\n        <p>${{currentKeg.price}} |\n        Style: {{currentKeg.style}} |\n        Pints Left: {{currentKeg.pintsLeft}} |\n        Alcohol Content: 0.{{currentKeg.alcoholContent}} ABV</p>\n      <div *ngIf=\"currentKeg.salePrice > 0\">\n        <h4>Sale Price: ${{currentKeg.salePrice}}</h4>\n      </div>\n      <div *ngIf=\"currentRoute === '/admin'\">\n      <button class=\"btn btn-dark\" (click)=\"sellPint(currentKeg)\">Sell Pint</button>\n      <button class=\"btn btn-dark\" (click)=\"sellGrowler(currentKeg)\">Sell 32oz Growler</button>\n      <button class=\"btn btn-dark\" (click)=\"sellBigGrowler(currentKeg)\">Sell 64oz Growler</button>\n      <input [(ngModel)]=\"percentage\" placeholder=\"Sale Percentage\" type=\"number\" name=\"sale\">\n      <button class=\"btn btn-dark\" (click)=\"sale(currentKeg, percentage)\">Put on Sale</button>\n      <button class=\"btn btn-dark\" (click)=\"resetSale(currentKeg)\">End Sale</button>\n      <app-edit-keg [selectedKeg]=\"currentKeg\"></app-edit-keg>\n      </div>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"card\">\n    <div class=\"card-title\">\n      <h2>Filter Kegs</h2>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"form-group\">\n        <label for=\"style\">Select Style</label>\n        <select class=\"form-control\" name=\"style\" [(ngModel)]=\"filterStyle\">\n          <option value=\"IPA\">IPA</option>\n          <option value=\"APA\">APA</option>\n          <option value=\"Red Ale\">Red Ale</option>\n          <option value=\"Pilsner\">Pilsner</option>\n          <option value=\"Brown Ale\">Brown Ale</option>\n          <option value=\"Kolsch\">Kolsch</option>\n          <option value=\"Belgian\">Belgian</option>\n          <option value=\"Hefeweizen\">Hefeweizen</option>\n          <option value=\"Sour\">Sour</option>\n          <option value=\"Lager\">Lager</option>\n          <option value=\"Stout\">Stout</option>\n        </select>\n      </div>\n      <button (click)=\"filterKegs(filterStyle)\">Filter</button>\n      <br>\n      <div *ngIf=\"kegFilter\">\n        <ul>\n          <li id=\"kegList\" [class]=\"alcoholContentColor(keg)\" *ngFor=\"let keg of filteredKegs\">  <h2>{{keg.name}}</h2>\n            ${{keg.price}},\n            Style: {{keg.style}},\n            Pints Left: {{keg.pintsLeft}} ,\n            Alcohol Content: 0.{{keg.alcoholContent}}ABV</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n\n  <div *ngIf=\"addingKeg\">\n    <div class=\"card\">\n      <div class=\"card-title\">\n        <h1>Add New Keg</h1>\n      </div>\n      <div class=\"card-body\">\n            <div>\n              <label>Beer Name</label>\n              <br>\n              <input #newName>\n            </div>\n\n            <div>\n              <label>Alcohol Content</label>\n              <input #newAlcoholContent>\n            </div>\n\n            <div>\n              <label>Price per Pint</label>\n              <input #newPrice>\n            </div>\n\n            <div>\n              <label for=\"style\">Select Style</label>\n              <select #newStyle>\n                <option value=\"IPA\">IPA</option>\n                <option value=\"APA\">APA</option>\n                <option value=\"Red Ale\">Red Ale</option>\n                <option value=\"Pilsner\">Pilsner</option>\n                <option value=\"Brown Ale\">Brown Ale</option>\n                <option value=\"Kolsch\">Kolsch</option>\n                <option value=\"Belgian\">Belgian</option>\n                <option value=\"Hefeweizen\">Hefeweizen</option>\n                <option value=\"Sour\">Sour</option>\n                <option value=\"Lager\">Lager</option>\n                <option value=\"Stout\">Stout</option>\n              </select>\n            </div>\n            <button class=\"btn btn-dark\"(click)=\"submitForm(newName.value, newAlcoholContent.value, newPrice.value); newStyle.value='';\">Add</button>\n          </div>\n      </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/beer-tap/beer-tap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeerTapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keg_service__ = __webpack_require__("../../../../../src/app/keg.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeerTapComponent = /** @class */ (function () {
    function BeerTapComponent(router, kegService) {
        this.router = router;
        this.kegService = kegService;
        this.currentRoute = this.router.url;
        this.isHappyHour = false;
        this.addingKeg = false;
        this.kegFilter = false;
        this.filteredKegs = [];
    }
    BeerTapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.kegService.getKegs().subscribe(function (dataLastEmittedFromObserver) {
            _this.kegDisplay = dataLastEmittedFromObserver;
        });
        var interval = setInterval(function () {
            var currentTime = new Date();
            if (currentTime.getHours() === 17) {
                _this.isHappyHour = true;
                for (var i = 0; i < _this.kegDisplay.length; i++) {
                    var number = (_this.kegDisplay[i].price - (0.25 * _this.kegDisplay[i].price));
                    _this.kegDisplay[i].salePrice = Math.round(number * 1e2) / 1e2;
                    _this.kegService.updateSalePrice(_this.kegDisplay[i]);
                }
            }
            else if ((currentTime.getHours() >= 21) || (currentTime.getHours() < 17)) {
                _this.isHappyHour = false;
                for (var i = 0; i < _this.kegDisplay.length; i++) {
                    if (_this.kegDisplay[i].onSale = false) {
                        _this.kegDisplay[i].salePrice = 0;
                        _this.kegService.updateSalePrice(_this.kegDisplay[i]);
                    }
                }
            }
        }, 1000);
        this.kegs = this.kegService.getKegs();
    };
    BeerTapComponent.prototype.addNewKeg = function () {
        this.addingKeg = true;
    };
    BeerTapComponent.prototype.alcoholContentColor = function (currentKeg) {
        if (currentKeg.empty === true) {
            return "doneEditing";
        }
        if (currentKeg.pintsLeft <= 10) {
            return "lowPints";
        }
        else if (currentKeg.price <= 5) {
            return "bg-info";
        }
        else if (currentKeg.price <= 9) {
            return "bg-warning";
        }
        else if (currentKeg.price <= 13) {
            return "bg-danger";
        }
        else if (currentKeg.price > 13) {
            return "bg-success";
        }
    };
    BeerTapComponent.prototype.beginUpdatingKeg = function (kegToUpdate) {
        this.kegService.updateKeg(kegToUpdate);
    };
    BeerTapComponent.prototype.sellPint = function (currentKeg) {
        this.kegService.updatePintsLeft(currentKeg);
        if (currentKeg.pintsLeft > 0) {
            currentKeg.pintsLeft -= 1;
        }
        else if (currentKeg.pintsLeft === 0) {
            alert("All out");
        }
    };
    BeerTapComponent.prototype.sellGrowler = function (currentKeg) {
        this.kegService.updatePintsLeft(currentKeg);
        if (currentKeg.pintsLeft > 2) {
            currentKeg.pintsLeft -= 2;
        }
        else if ((currentKeg.pintsLeft < 2) && (currentKeg.pintsLeft > 0)) {
            alert("Not Enough Beer");
        }
        else if (currentKeg.pintsLeft === 0) {
            alert("All out");
        }
    };
    BeerTapComponent.prototype.sellBigGrowler = function (currentKeg) {
        this.kegService.updatePintsLeft(currentKeg);
        if (currentKeg.pintsLeft > 4) {
            currentKeg.pintsLeft -= 4;
        }
        else if ((currentKeg.pintsLeft < 4) && (currentKeg.pintsLeft > 0)) {
            alert("GET A SMALLER GROWLER");
        }
        else if (currentKeg.pintsLeft === 0) {
            alert("All out");
        }
    };
    BeerTapComponent.prototype.sale = function (currentKeg, percentage) {
        var number = (currentKeg.price - (percentage * 0.01 * currentKeg.price));
        currentKeg.salePrice = Math.round(number * 1e2) / 1e2;
        currentKeg.onSale = true;
        this.kegService.updateSalePrice(currentKeg);
    };
    BeerTapComponent.prototype.resetSale = function (currentKeg) {
        currentKeg.salePrice = 0;
        currentKeg.onSale = false;
        this.kegService.updateSalePrice(currentKeg);
    };
    BeerTapComponent.prototype.filterKegs = function (style) {
        this.filteredKegs = [];
        this.kegFilter = true;
        for (var i = 0; i < this.kegDisplay.length; i++) {
            if (this.kegDisplay[i].style === style) {
                this.filteredKegs.push(this.kegDisplay[i]);
            }
        }
    };
    BeerTapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-beer-tap',
            template: __webpack_require__("../../../../../src/app/beer-tap/beer-tap.component.html"),
            styles: [__webpack_require__("../../../../../src/app/beer-tap/beer-tap.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__keg_service__["a" /* KegService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__keg_service__["a" /* KegService */]])
    ], BeerTapComponent);
    return BeerTapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/edit-keg/edit-keg.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-keg/edit-keg.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Edit {{selectedKeg.name}}</h4>\n\n<label>New Keg Name</label>\n<input [(ngModel)]=\"selectedKeg.name\">\n<br>\n<label>New Alcohol Content</label>\n<input [(ngModel)]=\"selectedKeg.alcoholContent\">\n<br>\n<label>New Price</label>\n<input [(ngModel)]=\"selectedKeg.price\">\n<br>\n<label>New Style</label>\n<select [(ngModel)]=\"selectedKeg.style\">\n          <option value=\"IPA\">IPA</option>\n          <option value=\"APA\">APA</option>\n          <option value=\"Red Ale\">Red Ale</option>\n          <option value=\"Pilsner\">Pilsner</option>\n          <option value=\"Brown Ale\">Brown Ale</option>\n          <option value=\"Kolsch\">Kolsch</option>\n          <option value=\"Belgian\">Belgian</option>\n          <option value=\"Hefeweizen\">Hefeweizen</option>\n          <option value=\"Sour\">Sour</option>\n          <option value=\"Lager\">Lager</option>\n          <option value=\"Stout\">Stout</option>\n        </select>\n<br>\n\n<button class=\"btn btn-dark\"(click)=\"beginUpdatingKeg(selectedKeg)\">Update</button>\n<hr>\n<button (click)=\"beginDeletingKeg(selectedKeg)\">Delete</button>\n"

/***/ }),

/***/ "../../../../../src/app/edit-keg/edit-keg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditKegComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keg_service__ = __webpack_require__("../../../../../src/app/keg.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditKegComponent = /** @class */ (function () {
    function EditKegComponent(kegService) {
        this.kegService = kegService;
    }
    EditKegComponent.prototype.ngOnInit = function () {
    };
    EditKegComponent.prototype.beginUpdatingKeg = function (kegToUpdate) {
        this.kegService.updateKeg(kegToUpdate);
    };
    EditKegComponent.prototype.beginDeletingKeg = function (kegToDelete) {
        if (confirm("Are you sure you want to delete this keg?")) {
            this.kegService.deleteKeg(kegToDelete);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], EditKegComponent.prototype, "selectedKeg", void 0);
    EditKegComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-keg',
            template: __webpack_require__("../../../../../src/app/edit-keg/edit-keg.component.html"),
            styles: [__webpack_require__("../../../../../src/app/edit-keg/edit-keg.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__keg_service__["a" /* KegService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__keg_service__["a" /* KegService */]])
    ], EditKegComponent);
    return EditKegComponent;
}());



/***/ }),

/***/ "../../../../../src/app/keg.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Keg; });
var Keg = /** @class */ (function () {
    function Keg(name, alcoholContent, price, style) {
        this.name = name;
        this.alcoholContent = alcoholContent;
        this.price = price;
        this.style = style;
        this.empty = false;
        this.onSale = false;
        this.pintsLeft = 124;
        this.salePrice = 0;
    }
    return Keg;
}());



/***/ }),

/***/ "../../../../../src/app/keg.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KegService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KegService = /** @class */ (function () {
    function KegService(database) {
        this.database = database;
        this.kegs = database.list('kegs');
    }
    KegService.prototype.getKegs = function () {
        return this.kegs;
    };
    KegService.prototype.addKeg = function (newKeg) {
        this.kegs.push(newKeg);
    };
    KegService.prototype.getKegById = function (kegId) {
        return this.database.object('kegs/' + kegId);
    };
    KegService.prototype.updatePintsLeft = function (localUpdatedKeg) {
        var kegEntryInFirebase = this.getKegById(localUpdatedKeg.$key);
        kegEntryInFirebase.update({ pintsLeft: localUpdatedKeg.pintsLeft, });
    };
    KegService.prototype.updateSalePrice = function (localUpdatedKeg) {
        var kegEntryInFirebase = this.getKegById(localUpdatedKeg.$key);
        kegEntryInFirebase.update({ salePrice: localUpdatedKeg.salePrice,
            onSale: localUpdatedKeg.onSale });
    };
    KegService.prototype.updateKeg = function (localUpdatedKeg) {
        var kegEntryInFirebase = this.getKegById(localUpdatedKeg.$key);
        kegEntryInFirebase.update({ name: localUpdatedKeg.name,
            alcoholContent: localUpdatedKeg.alcoholContent,
            price: localUpdatedKeg.price,
            style: localUpdatedKeg.style });
    };
    KegService.prototype.deleteKeg = function (localKegToDelete) {
        var kegEntryInFirebase = this.getKegById(localKegToDelete.$key);
        kegEntryInFirebase.remove();
    };
    KegService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], KegService);
    return KegService;
}());



/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Drink Our Beer</h1>\n<h2>The Children Have Scurvy</h2>\n<h3>Every Second You Are Not Drunk Is Another Second Of Pain</h3>\n<h4>Think About The Children</h4>\n<h5>Their Blood Will Be On Your Hands</h5>\n<h6>Thanks for visiting!</h6>\n"

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-welcome',
            template: __webpack_require__("../../../../../src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__("../../../../../src/app/welcome/welcome.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map