(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-transporte-transporte-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/transporte/transporte.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/transporte/transporte.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<app-header align=\"end\" titulo=\"Transporte\"> </app-header>\r\n\r\n<ion-content >\r\n  \r\n  <ion-grid fixed >\r\n    <ion-row >\r\n\r\n      <ion-col size=\"12\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\" size-xs=\"12\"\r\n              *ngFor=\"let listatransporte of listatransporte\">\r\n         <!-- <ion-slides [options]=\"slideOpts\"> -->\r\n           <!-- <ion-slide  -->\r\n                       \r\n            <ion-list>\r\n              <ion-card>\r\n                <img class=\"img\" src={{listatransporte.foto_portada}}>    \r\n                <!-- <img [src]=\"listahoteles.foto_portada | imagen\"> -->   \r\n                <ion-card-header  class=\"ion-no-padding\">      \r\n                  <hr><ion-card-title class=\"title\">  {{listatransporte.nom_coop}}</ion-card-title>\r\n                </ion-card-header>\r\n              \r\n              <p> <h2 class=\"title_desc\"> Descripción</h2> \r\n                <div class=\"ion-text-justify\" ><h5>{{listatransporte.descripcion|slice:0: oculto}}... </h5></div>\r\n                <ion-label color=\"primary\"\r\n                (click)=\"oculto = 5000\"\r\n                *ngIf=\"oculto !==5000\">Leer más! </ion-label>\r\n              \r\n              \r\n                <ion-item>\r\n                  <ion-label ><ion-icon  color=\"location\" class=\"icon_d\" name=\"location-outline\"></ion-icon> {{listatransporte.direccion_oficina}} </ion-label>\r\n                  \r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label ><ion-icon  color=\"call\" class=\"telef\" name=\"call-outline\"></ion-icon> {{listatransporte.telef_celular}}</ion-label>\r\n                  \r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label ><ion-icon  color=\"call\" class=\"telef\" name=\"call-outline\"></ion-icon> {{listatransporte.telef_fijo}}</ion-label>\r\n                  \r\n                </ion-item>\r\n              </ion-card>\r\n            </ion-list>      \r\n           <!-- </ion-slide> -->\r\n          <!-- </ion-slides> -->\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/transporte/transporte-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/transporte/transporte-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: TransportePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportePageRoutingModule", function() { return TransportePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _transporte_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transporte.page */ "./src/app/pages/transporte/transporte.page.ts");




const routes = [
    {
        path: '',
        component: _transporte_page__WEBPACK_IMPORTED_MODULE_3__["TransportePage"]
    }
];
let TransportePageRoutingModule = class TransportePageRoutingModule {
};
TransportePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TransportePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/transporte/transporte.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/transporte/transporte.module.ts ***!
  \*******************************************************/
/*! exports provided: TransportePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportePageModule", function() { return TransportePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _transporte_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transporte-routing.module */ "./src/app/pages/transporte/transporte-routing.module.ts");
/* harmony import */ var _transporte_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transporte.page */ "./src/app/pages/transporte/transporte.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let TransportePageModule = class TransportePageModule {
};
TransportePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _transporte_routing_module__WEBPACK_IMPORTED_MODULE_5__["TransportePageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_transporte_page__WEBPACK_IMPORTED_MODULE_6__["TransportePage"]]
    })
], TransportePageModule);



/***/ }),

/***/ "./src/app/pages/transporte/transporte.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/transporte/transporte.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fb {\n  width: 30px;\n  height: 30px;\n  background-color: white;\n  font-family: Gill Sans;\n}\n\n.what {\n  width: 30px;\n  height: 30px;\n  font-family: Gill Sans;\n}\n\n.Web {\n  width: 30px;\n  height: 30px;\n  color: #f7f7f8;\n  font-family: Gill Sans;\n}\n\n.call {\n  width: 30px;\n  height: 30px;\n  color: white;\n}\n\n.text {\n  font-size: small;\n  font-family: Gill Sans;\n}\n\n.title_desc {\n  font-family: Arial;\n  font-size: 23px !important;\n  font-family: cursive;\n}\n\n.descripcion {\n  font-family: Arial;\n  font-size: 17px !important;\n}\n\n.title {\n  text-align: center;\n  font-family: Arial;\n  font-size: 23px !important;\n}\n\n.telef {\n  color: forestgreen;\n  font-size: 19px !important;\n}\n\n.icon_t {\n  color: #f1bd13;\n  font-size: 19px !important;\n}\n\n.icon_d {\n  color: #f80808;\n  font-size: 19px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHJhbnNwb3J0ZS9DOlxcSU9OSUM1XFxWaXZlVHVsY2FuXFxWaXZlVHVsY2FuL3NyY1xcYXBwXFxwYWdlc1xcdHJhbnNwb3J0ZVxcdHJhbnNwb3J0ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RyYW5zcG9ydGUvdHJhbnNwb3J0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBRUEsc0JBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNBSjs7QURJQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLFlBQUE7QUNGSjs7QURJQTtFQUNJLGdCQUFBO0VBRUEsc0JBQUE7QUNGSjs7QURJQTtFQUdJLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtBQ0hKOztBREtBO0VBR0ksa0JBQUE7RUFDQSwwQkFBQTtBQ0pKOztBRFVBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FDUEo7O0FEU0E7RUFDSSxrQkFBQTtFQUNBLDBCQUFBO0FDTko7O0FEU0E7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7QUNOSjs7QURTQTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtBQ05KIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHJhbnNwb3J0ZS90cmFuc3BvcnRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYntcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBcclxuICAgIGZvbnQtZmFtaWx5OkdpbGwgU2FucztcclxufVxyXG5cclxuLndoYXR7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGZvbnQtZmFtaWx5OkdpbGwgU2FucztcclxuICAgICAgICBcclxufVxyXG5cclxuLldlYntcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgY29sb3I6IHJnYigyNDcsIDI0NywgMjQ4KTtcclxuICAgIGZvbnQtZmFtaWx5OkdpbGwgU2FucztcclxufVxyXG5cclxuLmNhbGx7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIFxyXG4gICAgY29sb3I6IHdoaXRlOyAgICBcclxufVxyXG4udGV4dHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAvLyBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtZmFtaWx5OkdpbGwgU2FucztcclxufVxyXG4udGl0bGVfZGVzY3tcclxuICAgIFxyXG4gICAgLy8gY29sb3I6ICMwMDA7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgICBmb250LXNpemU6MjNweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbn1cclxuLmRlc2NyaXBjaW9ue1xyXG4gICAgLy8gZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICAvLyBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICAgIGZvbnQtc2l6ZToxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG5cclxuLnRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgZm9udC1zaXplOjIzcHggIWltcG9ydGFudDtcclxufVxyXG4udGVsZWZ7XHJcbiAgICBjb2xvcjogZm9yZXN0Z3JlZW47XHJcbiAgICBmb250LXNpemU6IDE5cHggIWltcG9ydGFudDtcclxufVxyXG4gIFxyXG4uaWNvbl90e1xyXG4gICAgY29sb3I6IHJnYigyNDEsIDE4OSwgMTkpO1xyXG4gICAgZm9udC1zaXplOiAxOXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuICAgIFxyXG4uaWNvbl9ke1xyXG4gICAgY29sb3I6IHJnYigyNDgsIDgsIDgpO1xyXG4gICAgZm9udC1zaXplOiAxOXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuICAiLCIuZmIge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IEdpbGwgU2Fucztcbn1cblxuLndoYXQge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBmb250LWZhbWlseTogR2lsbCBTYW5zO1xufVxuXG4uV2ViIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgY29sb3I6ICNmN2Y3Zjg7XG4gIGZvbnQtZmFtaWx5OiBHaWxsIFNhbnM7XG59XG5cbi5jYWxsIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udGV4dCB7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGZvbnQtZmFtaWx5OiBHaWxsIFNhbnM7XG59XG5cbi50aXRsZV9kZXNjIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBmb250LXNpemU6IDIzcHggIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG59XG5cbi5kZXNjcmlwY2lvbiB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG59XG5cbi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBmb250LXNpemU6IDIzcHggIWltcG9ydGFudDtcbn1cblxuLnRlbGVmIHtcbiAgY29sb3I6IGZvcmVzdGdyZWVuO1xuICBmb250LXNpemU6IDE5cHggIWltcG9ydGFudDtcbn1cblxuLmljb25fdCB7XG4gIGNvbG9yOiAjZjFiZDEzO1xuICBmb250LXNpemU6IDE5cHggIWltcG9ydGFudDtcbn1cblxuLmljb25fZCB7XG4gIGNvbG9yOiAjZjgwODA4O1xuICBmb250LXNpemU6IDE5cHggIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/transporte/transporte.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/transporte/transporte.page.ts ***!
  \*****************************************************/
/*! exports provided: TransportePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportePage", function() { return TransportePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_establecimientos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/establecimientos.service */ "./src/app/services/establecimientos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let TransportePage = class TransportePage {
    constructor(transpService, route) {
        this.transpService = transpService;
        this.route = route;
        this.oculto = 120;
    }
    ngOnInit() {
        this.transpService.gettransporte()
            .subscribe(resp => {
            // console.log('Resp',resp );
            this.listatransporte = resp;
        });
    }
};
TransportePage.ctorParameters = () => [
    { type: _services_establecimientos_service__WEBPACK_IMPORTED_MODULE_2__["EstablecimientosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
TransportePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transporte',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./transporte.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/transporte/transporte.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./transporte.page.scss */ "./src/app/pages/transporte/transporte.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_establecimientos_service__WEBPACK_IMPORTED_MODULE_2__["EstablecimientosService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], TransportePage);



/***/ })

}]);
//# sourceMappingURL=pages-transporte-transporte-module-es2015.js.map