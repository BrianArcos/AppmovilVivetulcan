(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-operadores-operadores-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operadores/operadores.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operadores/operadores.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<app-header align=\"end\" titulo=\"Operadores Turísticos\"> </app-header>\r\n\r\n<ion-content >\r\n  \r\n  <ion-grid fixed >\r\n    <ion-row >\r\n\r\n      <ion-col size=\"12\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\" size-xs=\"12\"\r\n              *ngFor=\"let listaopera of listaopera\">\r\n         <!-- <ion-slides [options]=\"slideOpts\"> -->\r\n           <!-- <ion-slide  -->\r\n                       \r\n\r\n              <ion-card (click)=\"irADetalle(listaopera)\">\r\n                <img class=\"img\" src={{listaopera.foto_portada}}>    \r\n                  <!-- <img [src]=\"listahoteles.foto_portada | imagen\"> -->\r\n                  <ion-card-header  class=\"ion-no-padding\">      \r\n                    <hr><ion-card-title class=\"title\">  {{listaopera.nombre}}</ion-card-title>\r\n                  </ion-card-header>\r\n                     <ion-segment>\r\n            \r\n                     </ion-segment>\r\n\r\n                    <ion-card-subtitle > \r\n                      <ion-icon color=\"location\" class=\"icon_d\" name=\"pin\"></ion-icon>\r\n                    <ion-label class=\"direccion\">{{listaopera.direccion}}</ion-label> \r\n                  </ion-card-subtitle>\r\n\r\n                  <ion-item>\r\n                    <ion-button color=\"header\"> Saber Más</ion-button>\r\n                  </ion-item>\r\n                </ion-card>\r\n           <!-- </ion-slide> -->\r\n          <!-- </ion-slides> -->\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ "./src/app/pages/operadores/operadores-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/operadores/operadores-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: OperadoresPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperadoresPageRoutingModule", function() { return OperadoresPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _operadores_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operadores.page */ "./src/app/pages/operadores/operadores.page.ts");




const routes = [
    {
        path: '',
        component: _operadores_page__WEBPACK_IMPORTED_MODULE_3__["OperadoresPage"]
    }
];
let OperadoresPageRoutingModule = class OperadoresPageRoutingModule {
};
OperadoresPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OperadoresPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/operadores/operadores.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/operadores/operadores.module.ts ***!
  \*******************************************************/
/*! exports provided: OperadoresPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperadoresPageModule", function() { return OperadoresPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _operadores_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./operadores-routing.module */ "./src/app/pages/operadores/operadores-routing.module.ts");
/* harmony import */ var _operadores_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./operadores.page */ "./src/app/pages/operadores/operadores.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let OperadoresPageModule = class OperadoresPageModule {
};
OperadoresPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _operadores_routing_module__WEBPACK_IMPORTED_MODULE_5__["OperadoresPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_operadores_page__WEBPACK_IMPORTED_MODULE_6__["OperadoresPage"]]
    })
], OperadoresPageModule);



/***/ }),

/***/ "./src/app/pages/operadores/operadores.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/operadores/operadores.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img {\n  width: 100%;\n  height: 200px;\n}\n\n.col-10, .col-13 {\n  display: flex;\n}\n\n.card {\n  widows: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.title {\n  text-align: center;\n  font-family: Arial;\n  font-size: 20px !important;\n}\n\n.precio {\n  text-align: center;\n  font-size: medium;\n}\n\n.horario {\n  text-align: right;\n  font-size: 19px !important;\n}\n\n.icon_p {\n  color: forestgreen;\n  font-size: 19px !important;\n}\n\n.icon_h {\n  color: #f1bd13;\n  font-size: 19px !important;\n}\n\n.icon_d {\n  color: #f80808;\n  font-size: 19px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3BlcmFkb3Jlcy9DOlxcSU9OSUM1XFxWaXZlVHVsY2FuXFxWaXZlVHVsY2FuL3NyY1xcYXBwXFxwYWdlc1xcb3BlcmFkb3Jlc1xcb3BlcmFkb3Jlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL29wZXJhZG9yZXMvb3BlcmFkb3Jlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ05KOztBRFNBO0VBSUksYUFBQTtBQ05KOztBRFFFO0VBQ0UsWUFBQTtFQUlBLGFBQUE7RUFLUSxzQkFBQTtBQ0xaOztBRFFFO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FDTE47O0FET0U7RUFDRSxrQkFBQTtFQUVJLGlCQUFBO0FDTFI7O0FEUUU7RUFDTSxpQkFBQTtFQUNBLDBCQUFBO0FDTFI7O0FEWUE7RUFDSSxrQkFBQTtFQUNBLDBCQUFBO0FDVEo7O0FEWUE7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7QUNUSjs7QURZQTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtBQ1RKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb3BlcmFkb3Jlcy9vcGVyYWRvcmVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vICAuaW9uLWNhcntcclxuLy8gICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuLy8gICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4vLyAgICAgIHdpZHRoOiA0MDBweDtcclxuLy8gIH1cclxuXHJcblxyXG4uaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4uY29sLTEwLCAuY29sLTEzIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICAuY2FyZCB7XHJcbiAgICB3aWRvd3M6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC50aXRsZXtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgICAgIGZvbnQtc2l6ZToyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5wcmVjaW97XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgICAgIC8vIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgfVxyXG4gIC5ob3Jhcmlve1xyXG4gICAgICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbiAgICAgICAgZm9udC1zaXplOjE5cHggIWltcG9ydGFudDtcclxuICAgICAgICAvLyBjb2xvcjogcmdiKDAsIDcsIDIpO1xyXG4gICAgICAgIFxyXG4gICAgXHJcbn1cclxuXHJcblxyXG4uaWNvbl9we1xyXG4gICAgY29sb3I6IGZvcmVzdGdyZWVuO1xyXG4gICAgZm9udC1zaXplOiAxOXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pY29uX2h7XHJcbiAgICBjb2xvcjogcmdiKDI0MSwgMTg5LCAxOSk7XHJcbiAgICBmb250LXNpemU6IDE5cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmljb25fZHtcclxuICAgIGNvbG9yOiByZ2IoMjQ4LCA4LCA4KTtcclxuICAgIGZvbnQtc2l6ZTogMTlweCAhaW1wb3J0YW50O1xyXG59IiwiLmltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uY29sLTEwLCAuY29sLTEzIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jYXJkIHtcbiAgd2lkb3dzOiAxMDAlO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLnByZWNpbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiBtZWRpdW07XG59XG5cbi5ob3JhcmlvIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTlweCAhaW1wb3J0YW50O1xufVxuXG4uaWNvbl9wIHtcbiAgY29sb3I6IGZvcmVzdGdyZWVuO1xuICBmb250LXNpemU6IDE5cHggIWltcG9ydGFudDtcbn1cblxuLmljb25faCB7XG4gIGNvbG9yOiAjZjFiZDEzO1xuICBmb250LXNpemU6IDE5cHggIWltcG9ydGFudDtcbn1cblxuLmljb25fZCB7XG4gIGNvbG9yOiAjZjgwODA4O1xuICBmb250LXNpemU6IDE5cHggIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/operadores/operadores.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/operadores/operadores.page.ts ***!
  \*****************************************************/
/*! exports provided: OperadoresPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperadoresPage", function() { return OperadoresPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_establecimientos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/establecimientos.service */ "./src/app/services/establecimientos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let OperadoresPage = class OperadoresPage {
    constructor(operaService, route) {
        this.operaService = operaService;
        this.route = route;
    }
    ngOnInit() {
        this.operaService.getoperadores()
            .subscribe(resp => {
            // console.log('Resp',resp );
            this.listaopera = resp;
        });
    }
    irADetalle(listado) {
        this.route.navigate(['detalle-operador', { datos: JSON.stringify(listado) }]);
    }
};
OperadoresPage.ctorParameters = () => [
    { type: _services_establecimientos_service__WEBPACK_IMPORTED_MODULE_2__["EstablecimientosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
OperadoresPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-operadores',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./operadores.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operadores/operadores.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./operadores.page.scss */ "./src/app/pages/operadores/operadores.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_establecimientos_service__WEBPACK_IMPORTED_MODULE_2__["EstablecimientosService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], OperadoresPage);



/***/ })

}]);
//# sourceMappingURL=pages-operadores-operadores-module-es2015.js.map