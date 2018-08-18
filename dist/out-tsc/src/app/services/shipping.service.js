"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_const_1 = require("../constants/app-const");
var http_1 = require("@angular/http");
var ShippingService = (function () {
    function ShippingService(http) {
        this.http = http;
        this.serverPath = app_const_1.AppConst.serverPath;
    }
    ShippingService.prototype.newShipping = function (shipping) {
        var url = this.serverPath + "/shipping/add";
        var tokenHeader = new http_1.Headers({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.post(url, JSON.stringify(shipping), { headers: tokenHeader });
    };
    ShippingService.prototype.getUserShippingList = function () {
        var url = this.serverPath + "/shipping/getUserShippingList";
        var tokenHeader = new http_1.Headers({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.get(url, { headers: tokenHeader });
    };
    ShippingService.prototype.removeShipping = function (id) {
        var url = this.serverPath + "/shipping/remove";
        var tokenHeader = new http_1.Headers({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.post(url, id, { headers: tokenHeader });
    };
    ShippingService.prototype.setDefaultShipping = function (id) {
        var url = this.serverPath + "/shipping/setDefault";
        var tokenHeader = new http_1.Headers({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.post(url, id, { headers: tokenHeader });
    };
    return ShippingService;
}());
ShippingService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ShippingService);
exports.ShippingService = ShippingService;
//# sourceMappingURL=shipping.service.js.map