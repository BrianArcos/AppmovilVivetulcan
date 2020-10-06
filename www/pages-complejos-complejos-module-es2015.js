(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-complejos-complejos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/complejos/complejos.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/complejos/complejos.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("    \r\n<app-header align=\"end\" titulo=\"Complejos Turísticos\"> </app-header>\r\n\r\n<ion-content >\r\n   \r\n  <ion-grid fixed >\r\n    <ion-row >\r\n\r\n      <ion-col size=\"12\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\" size-xs=\"12\"\r\n              *ngFor=\"let lista_A of lista_A\">\r\n         <!-- <ion-slides [options]=\"slideOpts\"> -->\r\n           <!-- <ion-slide  -->\r\n                      \r\n\r\n              <ion-card (click)=\"irADetalle(lista_A)\">\r\n                <img class=\"img\" src={{lista_A.foto_portada}}>    \r\n                <!-- <img [src]=\"listahoteles.foto_portada | imagen\"> -->\r\n                <ion-card-header  class=\"ion-no-padding\">      \r\n                  <hr><ion-card-title class=\"title\">  {{lista_A.nom_estable}}</ion-card-title>\r\n                </ion-card-header>\r\n                   <ion-segment>\r\n                     <ion-segment>\r\n                        \r\n                        <ion-icon color=\"email\" class=\"icon_h\" name=\"alarm\"></ion-icon>\r\n                        <ion-label class=\"horario\"> {{lista_A.horario}}</ion-label> \r\n                       \r\n                     </ion-segment>\r\n                     <ion-segment >\r\n                       \r\n                        <ion-icon color=\"call\" class=\"icon_p\" name=\"logo-usd\"></ion-icon>\r\n                        <ion-label class=\"precio\"> {{lista_A.rango_precio}}</ion-label> \r\n                       \r\n                     </ion-segment>\r\n                   </ion-segment>\r\n\r\n                  <ion-card-subtitle > \r\n                    <ion-icon class=\"icon_d\" name=\"pin\"></ion-icon>\r\n                  <ion-label class=\"direccion\">{{lista_A.direccion}}</ion-label> \r\n                </ion-card-subtitle>\r\n\r\n                <ion-item>\r\n                  <ion-button color=\"header\"> Saber Más</ion-button>\r\n                </ion-item>\r\n              </ion-card>\r\n           <!-- </ion-slide> -->\r\n          <!-- </ion-slides> -->\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/complejos/complejos-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/complejos/complejos-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ComplejosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplejosPageRoutingModule", function() { return ComplejosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _complejos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./complejos.page */ "./src/app/pages/complejos/complejos.page.ts");




const routes = [
    {
        path: '',
        component: _complejos_page__WEBPACK_IMPORTED_MODULE_3__["ComplejosPage"]
    }
];
let ComplejosPageRoutingModule = class ComplejosPageRoutingModule {
};
ComplejosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComplejosPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/complejos/complejos.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/complejos/complejos.module.ts ***!
  \*****************************************************/
/*! exports provided: ComplejosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplejosPageModule", function() { return ComplejosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _complejos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./complejos-routing.module */ "./src/app/pages/complejos/complejos-routing.module.ts");
/* harmony import */ var _complejos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./complejos.page */ "./src/app/pages/complejos/complejos.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let ComplejosPageModule = class ComplejosPageModule {
};
ComplejosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _complejos_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComplejosPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_complejos_page__WEBPACK_IMPORTED_MODULE_6__["ComplejosPage"]]
    })
], ComplejosPageModule);



/***/ }),

/***/ "./src/app/pages/complejos/complejos.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/complejos/complejos.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".icon_p {\n  color: forestgreen;\n  font-size: 19px !important;\n}\n\n.icon_h {\n  color: #f1bd13;\n  font-size: 19px !important;\n}\n\n.icon_d {\n  color: #f80808;\n  font-size: 19px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcGxlam9zL0M6XFxJT05JQzVcXFZpdmVUdWxjYW5cXFZpdmVUdWxjYW4vc3JjXFxhcHBcXHBhZ2VzXFxjb21wbGVqb3NcXGNvbXBsZWpvcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvbXBsZWpvcy9jb21wbGVqb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSwwQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLDBCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBsZWpvcy9jb21wbGVqb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb25fcHtcclxuICAgIGNvbG9yOiBmb3Jlc3RncmVlbjtcclxuICAgIGZvbnQtc2l6ZTogMTlweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaWNvbl9oe1xyXG4gICAgY29sb3I6IHJnYigyNDEsIDE4OSwgMTkpO1xyXG4gICAgZm9udC1zaXplOiAxOXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pY29uX2R7XHJcbiAgICBjb2xvcjogcmdiKDI0OCwgOCwgOCk7XHJcbiAgICBmb250LXNpemU6IDE5cHggIWltcG9ydGFudDtcclxufSIsIi5pY29uX3Age1xuICBjb2xvcjogZm9yZXN0Z3JlZW47XG4gIGZvbnQtc2l6ZTogMTlweCAhaW1wb3J0YW50O1xufVxuXG4uaWNvbl9oIHtcbiAgY29sb3I6ICNmMWJkMTM7XG4gIGZvbnQtc2l6ZTogMTlweCAhaW1wb3J0YW50O1xufVxuXG4uaWNvbl9kIHtcbiAgY29sb3I6ICNmODA4MDg7XG4gIGZvbnQtc2l6ZTogMTlweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/complejos/complejos.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/complejos/complejos.page.ts ***!
  \***************************************************/
/*! exports provided: ComplejosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplejosPage", function() { return ComplejosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_establecimientos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/establecimientos.service */ "./src/app/services/establecimientos.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");





let ComplejosPage = class ComplejosPage {
    constructor(complejosService, modalCtrl, route) {
        this.complejosService = complejosService;
        this.modalCtrl = modalCtrl;
        this.route = route;
    }
    ngOnInit() {
        this.complejosService.getcomplejos()
            .subscribe(resp => {
            // console.log('Resp',resp );
            this.lista_A = resp;
        });
    }
    irADetalle(listado) {
        this.route.navigate(['detalle-atractivo', { datos: JSON.stringify(listado) }]);
    }
};
ComplejosPage.ctorParameters = () => [
    { type: _services_establecimientos_service__WEBPACK_IMPORTED_MODULE_3__["EstablecimientosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ComplejosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-complejos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./complejos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/complejos/complejos.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./complejos.page.scss */ "./src/app/pages/complejos/complejos.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_establecimientos_service__WEBPACK_IMPORTED_MODULE_3__["EstablecimientosService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ComplejosPage);



/***/ })

}]);
//# sourceMappingURL=pages-complejos-complejos-module-es2015.js.map