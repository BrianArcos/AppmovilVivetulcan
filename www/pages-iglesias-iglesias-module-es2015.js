(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-iglesias-iglesias-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/iglesias/iglesias.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/iglesias/iglesias.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<app-header align=\"end\" titulo=\"Iglesias\"> </app-header>\r\n\r\n<ion-content >\r\n  \r\n  <ion-grid fixed >\r\n    <ion-row >\r\n\r\n      <ion-col  class=\"col\" size=\"12\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\" size-xs=\"12\"\r\n              *ngFor=\"let listaiglesias of listaiglesias\">\r\n         <!-- <ion-slides [options]=\"slideOpts\"> -->\r\n           <!-- <ion-slide  -->\r\n            \r\n              <ion-card class=\"card\" (click)=\"irADetalle(listaiglesias)\">\r\n                \r\n\r\n                <img class=\"img\" src={{listaiglesias.foto_portada}}>    \r\n                    <!-- <img [src]=\"listahoteles.foto_portada | imagen\"> -->\r\n                    <ion-card-header  class=\"ion-no-padding\">      \r\n                      <hr><ion-card-title class=\"title\">  {{listaiglesias.nombre}}</ion-card-title>\r\n                    </ion-card-header>\r\n                       <ion-segment>\r\n                         <ion-segment>\r\n                            \r\n                            <ion-icon color=\"location\" class=\"icon_h\" name=\"location-outline\"></ion-icon>\r\n                            <ion-label class=\"horario\"> {{listaiglesias.Direccion}}</ion-label> \r\n                           \r\n                         </ion-segment>\r\n                         \r\n                       </ion-segment>\r\n\r\n                \r\n\r\n                    <ion-item>\r\n                      <ion-button color=\"header\"> Saber Más</ion-button>\r\n                    </ion-item>\r\n              </ion-card>\r\n               \r\n             \r\n           <!-- </ion-slide> -->\r\n          <!-- </ion-slides> -->\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/iglesias/iglesias-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/iglesias/iglesias-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: IglesiasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IglesiasPageRoutingModule", function() { return IglesiasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _iglesias_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iglesias.page */ "./src/app/pages/iglesias/iglesias.page.ts");




const routes = [
    {
        path: '',
        component: _iglesias_page__WEBPACK_IMPORTED_MODULE_3__["IglesiasPage"]
    }
];
let IglesiasPageRoutingModule = class IglesiasPageRoutingModule {
};
IglesiasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IglesiasPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/iglesias/iglesias.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/iglesias/iglesias.module.ts ***!
  \***************************************************/
/*! exports provided: IglesiasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IglesiasPageModule", function() { return IglesiasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _iglesias_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./iglesias-routing.module */ "./src/app/pages/iglesias/iglesias-routing.module.ts");
/* harmony import */ var _iglesias_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./iglesias.page */ "./src/app/pages/iglesias/iglesias.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let IglesiasPageModule = class IglesiasPageModule {
};
IglesiasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _iglesias_routing_module__WEBPACK_IMPORTED_MODULE_5__["IglesiasPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_iglesias_page__WEBPACK_IMPORTED_MODULE_6__["IglesiasPage"]]
    })
], IglesiasPageModule);



/***/ }),

/***/ "./src/app/pages/iglesias/iglesias.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/iglesias/iglesias.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img {\n  width: 100%;\n  height: 200px;\n}\n\n.col-10, .col-13 {\n  display: flex;\n}\n\n.card {\n  widows: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.title {\n  text-align: center;\n  font-family: Arial;\n  font-size: 19px !important;\n}\n\n.precio {\n  text-align: center;\n  font-size: medium;\n}\n\n.horario {\n  text-align: right;\n  font-size: 15px !important;\n}\n\n.direccion {\n  font-size: 14px !important;\n}\n\n.icon_p {\n  color: forestgreen;\n  font-size: 19px !important;\n}\n\n.icon_h {\n  color: #f1bd13;\n  font-size: 19px !important;\n}\n\n.icon_d {\n  color: #f80808;\n  font-size: 19px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaWdsZXNpYXMvQzpcXElPTklDNVxcVml2ZVR1bGNhblxcVml2ZVR1bGNhbi9zcmNcXGFwcFxccGFnZXNcXGlnbGVzaWFzXFxpZ2xlc2lhcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2lnbGVzaWFzL2lnbGVzaWFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFJSSxhQUFBO0FDQ0o7O0FEQ0U7RUFDRSxZQUFBO0VBSUEsYUFBQTtFQUtRLHNCQUFBO0FDRVo7O0FEQ0U7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUNFTjs7QURBRTtFQUNFLGtCQUFBO0VBRUksaUJBQUE7QUNFUjs7QURDRTtFQUNNLGlCQUFBO0VBQ0EsMEJBQUE7QUNFUjs7QURHQTtFQUNJLDBCQUFBO0FDQUo7O0FES0E7RUFDSSxrQkFBQTtFQUNBLDBCQUFBO0FDRko7O0FES0E7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7QUNGSjs7QURLQTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaWdsZXNpYXMvaWdsZXNpYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLmNvbC0xMCwgLmNvbC0xMyB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgLmNhcmQge1xyXG4gICAgd2lkb3dzOiAxMDAlO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAudGl0bGV7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgICBmb250LXNpemU6MTlweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAucHJlY2lve1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBcclxuICAgICAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgICAgICAvLyBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIH1cclxuICAuaG9yYXJpb3tcclxuICAgICAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLy8gY29sb3I6IHJnYigwLCA3LCAyKTtcclxuICAgICAgICBcclxuICAgIFxyXG59XHJcbi5kaXJlY2Npb257XHJcbiAgICBmb250LXNpemU6MTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC8vIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICAgICAgXHJcbn1cclxuXHJcbi5pY29uX3B7XHJcbiAgICBjb2xvcjogZm9yZXN0Z3JlZW47XHJcbiAgICBmb250LXNpemU6IDE5cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmljb25faHtcclxuICAgIGNvbG9yOiByZ2IoMjQxLCAxODksIDE5KTtcclxuICAgIGZvbnQtc2l6ZTogMTlweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaWNvbl9ke1xyXG4gICAgY29sb3I6IHJnYigyNDgsIDgsIDgpO1xyXG4gICAgZm9udC1zaXplOiAxOXB4ICFpbXBvcnRhbnQ7XHJcbn0iLCIuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5jb2wtMTAsIC5jb2wtMTMge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmNhcmQge1xuICB3aWRvd3M6IDEwMCU7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIGZvbnQtc2l6ZTogMTlweCAhaW1wb3J0YW50O1xufVxuXG4ucHJlY2lvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IG1lZGl1bTtcbn1cblxuLmhvcmFyaW8ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kaXJlY2Npb24ge1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbn1cblxuLmljb25fcCB7XG4gIGNvbG9yOiBmb3Jlc3RncmVlbjtcbiAgZm9udC1zaXplOiAxOXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pY29uX2gge1xuICBjb2xvcjogI2YxYmQxMztcbiAgZm9udC1zaXplOiAxOXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pY29uX2Qge1xuICBjb2xvcjogI2Y4MDgwODtcbiAgZm9udC1zaXplOiAxOXB4ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/iglesias/iglesias.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/iglesias/iglesias.page.ts ***!
  \*************************************************/
/*! exports provided: IglesiasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IglesiasPage", function() { return IglesiasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_establecimientos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/establecimientos.service */ "./src/app/services/establecimientos.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let IglesiasPage = class IglesiasPage {
    constructor(otrosService, modalCtrl, route) {
        this.otrosService = otrosService;
        this.modalCtrl = modalCtrl;
        this.route = route;
        this.listaiglesias = [];
    }
    ngOnInit() {
        this.otrosService.getiglesias()
            .subscribe(resp => {
            this.listaiglesias = resp;
        });
    }
    irADetalle(listado) {
        this.route.navigate(['detalle-iglesias', { datos: JSON.stringify(listado) }]);
    }
};
IglesiasPage.ctorParameters = () => [
    { type: _services_establecimientos_service__WEBPACK_IMPORTED_MODULE_2__["EstablecimientosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
IglesiasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-iglesias',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./iglesias.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/iglesias/iglesias.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./iglesias.page.scss */ "./src/app/pages/iglesias/iglesias.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_establecimientos_service__WEBPACK_IMPORTED_MODULE_2__["EstablecimientosService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], IglesiasPage);



/***/ })

}]);
//# sourceMappingURL=pages-iglesias-iglesias-module-es2015.js.map