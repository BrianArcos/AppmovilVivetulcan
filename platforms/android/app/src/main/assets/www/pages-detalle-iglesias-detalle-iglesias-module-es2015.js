(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-detalle-iglesias-detalle-iglesias-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle-iglesias/detalle-iglesias.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle-iglesias/detalle-iglesias.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n    \r\n  <app-header></app-header> \r\n  \r\n    \r\n  \r\n\r\n    <ion-content>\r\n      \r\n       \r\n      <ion-col  >\r\n      <ion-card class=\"card\">\r\n      <ion-label>\r\n        <img  src={{lista_I.foto_portada}}>  \r\n      </ion-label>\r\n      \r\n    </ion-card>\r\n      \r\n    </ion-col>\r\n      \r\n      <!-- <ion-icon class=\"item\" name=\"logo-facebook\" (click)=\"openWeb(lista.facebook,'_system')\">Pagina web</ion-icon> -->\r\n     \r\n          \r\n          <ion-list>\r\n            <ion-card>\r\n              <p> <h2 class=\"title_desc\"> Descripción</h2> \r\n                <div class=\"ion-text-justify\" ><h5>{{lista_I.Descripcion|slice:0: oculto}}... </h5></div>\r\n                <ion-label color=\"header\"\r\n                (click)=\"oculto = 5000\"\r\n                *ngIf=\"oculto !==5000\">Leer más! </ion-label>\r\n    \r\n              <ion-item>\r\n                <ion-label ><ion-icon  class=\"title\" color=\"location\" class=\"size\" name=\"location-outline\"></ion-icon> {{lista_I.Direccion}} </ion-label>\r\n                \r\n              </ion-item>\r\n              \r\n              \r\n              \r\n              \r\n              \r\n               <!-- <p> <h2>Descripción</h2> \r\n                <ion-label class=\"descripcion\" >{{lista.descripcion}} </ion-label> -->\r\n              \r\n              \r\n            </ion-card>\r\n            \r\n          </ion-list>\r\n          \r\n    \r\n    </ion-content>\r\n     ");

/***/ }),

/***/ "./src/app/pages/detalle-iglesias/detalle-iglesias-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/detalle-iglesias/detalle-iglesias-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: DetalleIglesiasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleIglesiasPageRoutingModule", function() { return DetalleIglesiasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _detalle_iglesias_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detalle-iglesias.page */ "./src/app/pages/detalle-iglesias/detalle-iglesias.page.ts");




const routes = [
    {
        path: '',
        component: _detalle_iglesias_page__WEBPACK_IMPORTED_MODULE_3__["DetalleIglesiasPage"]
    }
];
let DetalleIglesiasPageRoutingModule = class DetalleIglesiasPageRoutingModule {
};
DetalleIglesiasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetalleIglesiasPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/detalle-iglesias/detalle-iglesias.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/detalle-iglesias/detalle-iglesias.module.ts ***!
  \*******************************************************************/
/*! exports provided: DetalleIglesiasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleIglesiasPageModule", function() { return DetalleIglesiasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _detalle_iglesias_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detalle-iglesias-routing.module */ "./src/app/pages/detalle-iglesias/detalle-iglesias-routing.module.ts");
/* harmony import */ var _detalle_iglesias_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalle-iglesias.page */ "./src/app/pages/detalle-iglesias/detalle-iglesias.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let DetalleIglesiasPageModule = class DetalleIglesiasPageModule {
};
DetalleIglesiasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detalle_iglesias_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetalleIglesiasPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_detalle_iglesias_page__WEBPACK_IMPORTED_MODULE_6__["DetalleIglesiasPage"]]
    })
], DetalleIglesiasPageModule);



/***/ }),

/***/ "./src/app/pages/detalle-iglesias/detalle-iglesias.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/detalle-iglesias/detalle-iglesias.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fb {\n  width: 30px;\n  height: 30px;\n  background-color: white;\n  font-family: Gill Sans;\n}\n\n.what {\n  width: 30px;\n  height: 30px;\n  font-family: Gill Sans;\n}\n\n.Web {\n  width: 30px;\n  height: 30px;\n  color: #f7f7f8;\n  font-family: Gill Sans;\n}\n\n.call {\n  width: 30px;\n  height: 30px;\n  color: white;\n}\n\n.text {\n  font-size: small;\n  font-family: Gill Sans;\n}\n\n.title_desc {\n  font-family: Arial;\n  font-size: 23px !important;\n  font-family: cursive;\n}\n\n.descripcion {\n  font-family: Arial;\n  font-size: 17px !important;\n}\n\n.size {\n  width: 25px;\n  height: 25px;\n}\n\n.icon_p {\n  color: forestgreen;\n  font-size: 19px !important;\n}\n\n.icon_h {\n  color: #f1bd13;\n  font-size: 19px !important;\n}\n\n.icon_d {\n  color: #f80808;\n  font-size: 19px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGV0YWxsZS1pZ2xlc2lhcy9DOlxcSU9OSUM1XFxWaXZlVHVsY2FuXFxWaXZlVHVsY2FuL3NyY1xcYXBwXFxwYWdlc1xcZGV0YWxsZS1pZ2xlc2lhc1xcZGV0YWxsZS1pZ2xlc2lhcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2RldGFsbGUtaWdsZXNpYXMvZGV0YWxsZS1pZ2xlc2lhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBRUEsc0JBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNBSjs7QURJQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLFlBQUE7QUNGSjs7QURJQTtFQUNJLGdCQUFBO0VBRUEsc0JBQUE7QUNGSjs7QURJQTtFQUdJLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtBQ0hKOztBREtBO0VBR0ksa0JBQUE7RUFDQSwwQkFBQTtBQ0pKOztBRFNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNOSjs7QURRQTtFQUNJLGtCQUFBO0VBQ0EsMEJBQUE7QUNMSjs7QURRQTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtBQ0xKOztBRFFBO0VBQ0ksY0FBQTtFQUNBLDBCQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kZXRhbGxlLWlnbGVzaWFzL2RldGFsbGUtaWdsZXNpYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZie1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG4gICAgZm9udC1mYW1pbHk6R2lsbCBTYW5zO1xyXG59XHJcblxyXG4ud2hhdHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6R2lsbCBTYW5zO1xyXG4gICAgICAgIFxyXG59XHJcblxyXG4uV2Vie1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBjb2xvcjogcmdiKDI0NywgMjQ3LCAyNDgpO1xyXG4gICAgZm9udC1mYW1pbHk6R2lsbCBTYW5zO1xyXG59XHJcblxyXG4uY2FsbHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgXHJcbiAgICBjb2xvcjogd2hpdGU7ICAgIFxyXG59XHJcbi50ZXh0e1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIC8vIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1mYW1pbHk6R2lsbCBTYW5zO1xyXG59XHJcbi50aXRsZV9kZXNje1xyXG4gICAgXHJcbiAgICAvLyBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICAgIGZvbnQtc2l6ZToyM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxufVxyXG4uZGVzY3JpcGNpb257XHJcbiAgICAvLyBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIC8vIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgZm9udC1zaXplOjE3cHggIWltcG9ydGFudDtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbi5zaXple1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuLmljb25fcHtcclxuICAgIGNvbG9yOiBmb3Jlc3RncmVlbjtcclxuICAgIGZvbnQtc2l6ZTogMTlweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaWNvbl9oe1xyXG4gICAgY29sb3I6IHJnYigyNDEsIDE4OSwgMTkpO1xyXG4gICAgZm9udC1zaXplOiAxOXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pY29uX2R7XHJcbiAgICBjb2xvcjogcmdiKDI0OCwgOCwgOCk7XHJcbiAgICBmb250LXNpemU6IDE5cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8gLmNhcmR7XHJcbiAgIC8vICB3aWR0aDogNjAwcHg7XHJcbiAgIC8vICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgXHJcbiAgIC8vICBtYXJnaW4tbGVmdDogMjclO1xyXG4gICAvLyAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgLy8gc2l6ZTogMTIgO1xyXG4gICAgLy8gc2l6ZTogbGcgNTAlIDtcclxuICAgIC8vIHNpemU6IG1kIDUwJSA7XHJcbiAgICAvLyBzaXplOiBzbSA1MCUgO1xyXG4gICAgLy8gc2l6ZTogeHMgMTI7XHJcbi8vIH1cclxuIiwiLmZiIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBHaWxsIFNhbnM7XG59XG5cbi53aGF0IHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgZm9udC1mYW1pbHk6IEdpbGwgU2Fucztcbn1cblxuLldlYiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAjZjdmN2Y4O1xuICBmb250LWZhbWlseTogR2lsbCBTYW5zO1xufVxuXG4uY2FsbCB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRleHQge1xuICBmb250LXNpemU6IHNtYWxsO1xuICBmb250LWZhbWlseTogR2lsbCBTYW5zO1xufVxuXG4udGl0bGVfZGVzYyB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgZm9udC1zaXplOiAyM3B4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xufVxuXG4uZGVzY3JpcGNpb24ge1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xufVxuXG4uc2l6ZSB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5pY29uX3Age1xuICBjb2xvcjogZm9yZXN0Z3JlZW47XG4gIGZvbnQtc2l6ZTogMTlweCAhaW1wb3J0YW50O1xufVxuXG4uaWNvbl9oIHtcbiAgY29sb3I6ICNmMWJkMTM7XG4gIGZvbnQtc2l6ZTogMTlweCAhaW1wb3J0YW50O1xufVxuXG4uaWNvbl9kIHtcbiAgY29sb3I6ICNmODA4MDg7XG4gIGZvbnQtc2l6ZTogMTlweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/detalle-iglesias/detalle-iglesias.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/detalle-iglesias/detalle-iglesias.page.ts ***!
  \*****************************************************************/
/*! exports provided: DetalleIglesiasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleIglesiasPage", function() { return DetalleIglesiasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_establecimientos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/establecimientos.service */ "./src/app/services/establecimientos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");





let DetalleIglesiasPage = class DetalleIglesiasPage {
    constructor(otrosService, state, navegador) {
        this.otrosService = otrosService;
        this.state = state;
        this.navegador = navegador;
        this.oculto = 120;
    }
    ngOnInit() {
        this.lista_I = JSON.parse(this.state.snapshot.params.datos);
    }
};
DetalleIglesiasPage.ctorParameters = () => [
    { type: _services_establecimientos_service__WEBPACK_IMPORTED_MODULE_2__["EstablecimientosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"] }
];
DetalleIglesiasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detalle-iglesias',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detalle-iglesias.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle-iglesias/detalle-iglesias.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detalle-iglesias.page.scss */ "./src/app/pages/detalle-iglesias/detalle-iglesias.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_establecimientos_service__WEBPACK_IMPORTED_MODULE_2__["EstablecimientosService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"]])
], DetalleIglesiasPage);



/***/ })

}]);
//# sourceMappingURL=pages-detalle-iglesias-detalle-iglesias-module-es2015.js.map