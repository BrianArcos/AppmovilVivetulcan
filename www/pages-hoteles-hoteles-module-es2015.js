(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-hoteles-hoteles-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hoteles/hoteles.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hoteles/hoteles.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<app-header translucent align=\"end\" titulo=\"Hoteles\"> </app-header>\r\n\r\n<ion-content fullscreen >\r\n  \r\n  <ion-grid fixed >\r\n    <ion-row >\r\n\r\n      <ion-col  class=\"col\" size=\"12\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\" size-xs=\"12\"\r\n              *ngFor=\"let listahoteles of listahoteles\">\r\n         <!-- <ion-slides [options]=\"slideOpts\"> -->\r\n           <!-- <ion-slide  -->\r\n            \r\n              <ion-card class=\"card\" (click)=\"irADetalle(listahoteles)\">\r\n                \r\n\r\n                <img class=\"img\" src={{listahoteles.foto_portada}}>    \r\n                    <!-- <img [src]=\"listahoteles.foto_portada | imagen\"> -->\r\n                    <ion-card-header  class=\"ion-no-padding\">      \r\n                      <hr><ion-card-title class=\"title\">  {{listahoteles.nom_estable}}</ion-card-title>\r\n                    </ion-card-header>\r\n                       <ion-segment>\r\n                         <ion-segment>\r\n                            \r\n                            <ion-icon color=\"email\" class=\"icon_h\" name=\"alarm\"></ion-icon>\r\n                            <ion-label class=\"horario\"> {{listahoteles.horario}}</ion-label> \r\n                           \r\n                         </ion-segment>\r\n                         <ion-segment >\r\n                           \r\n                            <ion-icon color=\"call\" class=\"icon_p\" name=\"logo-usd\"></ion-icon>\r\n                            <ion-label class=\"precio\"> {{listahoteles.rango_precio}}</ion-label> \r\n                           \r\n                         </ion-segment>\r\n                       </ion-segment>\r\n\r\n                      <ion-card-subtitle > \r\n                        <ion-icon color=\"location\" class=\"icon_d\" name=\"pin\"></ion-icon>\r\n                      <ion-label class=\"direccion\">{{listahoteles.direccion}}</ion-label> \r\n                    </ion-card-subtitle>\r\n\r\n                    <ion-item>\r\n                      <ion-button color=\"header\"> Saber Más</ion-button>\r\n                    </ion-item>\r\n              </ion-card>\r\n              \r\n             \r\n           <!-- </ion-slide> -->\r\n          <!-- </ion-slides> -->\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/hoteles/hoteles-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/hoteles/hoteles-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: HotelesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelesPageRoutingModule", function() { return HotelesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _hoteles_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hoteles.page */ "./src/app/pages/hoteles/hoteles.page.ts");




const routes = [
    {
        path: '',
        component: _hoteles_page__WEBPACK_IMPORTED_MODULE_3__["HotelesPage"]
    }
];
let HotelesPageRoutingModule = class HotelesPageRoutingModule {
};
HotelesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HotelesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/hoteles/hoteles.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/hoteles/hoteles.module.ts ***!
  \*************************************************/
/*! exports provided: HotelesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelesPageModule", function() { return HotelesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _hoteles_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hoteles-routing.module */ "./src/app/pages/hoteles/hoteles-routing.module.ts");
/* harmony import */ var _hoteles_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hoteles.page */ "./src/app/pages/hoteles/hoteles.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");









let HotelesPageModule = class HotelesPageModule {
};
HotelesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _hoteles_routing_module__WEBPACK_IMPORTED_MODULE_5__["HotelesPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]
        ],
        declarations: [_hoteles_page__WEBPACK_IMPORTED_MODULE_6__["HotelesPage"]]
    })
], HotelesPageModule);



/***/ }),

/***/ "./src/app/pages/hoteles/hoteles.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/hoteles/hoteles.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img {\n  width: 100%;\n  height: 200px;\n}\n\n.col-10, .col-13 {\n  display: flex;\n}\n\n.card {\n  widows: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.title {\n  text-align: center;\n  font-family: Arial;\n  font-size: 23px !important;\n}\n\n.precio {\n  text-align: center;\n  font-size: medium;\n}\n\n.horario {\n  text-align: right;\n  font-size: 19px !important;\n}\n\n.direccion {\n  font-size: 14px !important;\n}\n\n.icon_p {\n  color: forestgreen;\n  font-size: 19px !important;\n}\n\n.icon_h {\n  color: #f1bd13;\n  font-size: 19px !important;\n}\n\n.icon_d {\n  color: #f80808;\n  font-size: 19px !important;\n}\n\n.btn {\n  background: #eb94d0;\n  background-image: linear-gradient(to bottom, #eb94d0, #2079b0);\n  border-radius: 50px;\n  text-shadow: 3px 2px 1px #9daef5;\n  box-shadow: 6px 5px 24px #666666;\n  font-family: Arial;\n  color: #fafafa;\n  font-size: 18px;\n  padding: 1px;\n  text-decoration: none;\n  text-align: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG90ZWxlcy9DOlxcSU9OSUM1XFxWaXZlVHVsY2FuXFxWaXZlVHVsY2FuL3NyY1xcYXBwXFxwYWdlc1xcaG90ZWxlc1xcaG90ZWxlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvdGVsZXMvaG90ZWxlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ05KOztBRFNBO0VBSUksYUFBQTtBQ05KOztBRFFFO0VBQ0UsWUFBQTtFQUlBLGFBQUE7RUFLUSxzQkFBQTtBQ0xaOztBRFFFO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FDTE47O0FET0U7RUFDRSxrQkFBQTtFQUVJLGlCQUFBO0FDTFI7O0FEUUU7RUFDTSxpQkFBQTtFQUNBLDBCQUFBO0FDTFI7O0FEVUE7RUFDSSwwQkFBQTtBQ1BKOztBRFlBO0VBQ0ksa0JBQUE7RUFDQSwwQkFBQTtBQ1RKOztBRFlBO0VBQ0ksY0FBQTtFQUNBLDBCQUFBO0FDVEo7O0FEWUE7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7QUNUSjs7QURXQTtFQUNJLG1CQUFBO0VBTUYsOERBQUE7RUFLQSxtQkFBQTtFQUNGLGdDQUFBO0VBR0UsZ0NBQUE7RUFDRixrQkFBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBRUEsNkJBQUE7QUNaRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvdGVsZXMvaG90ZWxlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAgLmlvbi1jYXJ7XHJcbi8vICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbi8vICAgICAgaGVpZ2h0OiA1MDBweDtcclxuLy8gICAgICB3aWR0aDogNDAwcHg7XHJcbi8vICB9XHJcblxyXG5cclxuLmltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLmNvbC0xMCwgLmNvbC0xMyB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgLmNhcmQge1xyXG4gICAgd2lkb3dzOiAxMDAlO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAudGl0bGV7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgICBmb250LXNpemU6MjNweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAucHJlY2lve1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBcclxuICAgICAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgICAgICAvLyBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIH1cclxuICAuaG9yYXJpb3tcclxuICAgICAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG4gICAgICAgIGZvbnQtc2l6ZToxOXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLy8gY29sb3I6IHJnYigwLCA3LCAyKTtcclxuICAgICAgICBcclxuICAgIFxyXG59XHJcbi5kaXJlY2Npb257XHJcbiAgICBmb250LXNpemU6MTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC8vIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICAgICAgXHJcbn1cclxuXHJcbi5pY29uX3B7XHJcbiAgICBjb2xvcjogZm9yZXN0Z3JlZW47XHJcbiAgICBmb250LXNpemU6IDE5cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmljb25faHtcclxuICAgIGNvbG9yOiByZ2IoMjQxLCAxODksIDE5KTtcclxuICAgIGZvbnQtc2l6ZTogMTlweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaWNvbl9ke1xyXG4gICAgY29sb3I6IHJnYigyNDgsIDgsIDgpO1xyXG4gICAgZm9udC1zaXplOiAxOXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJ0bntcclxuICAgIGJhY2tncm91bmQ6ICNlYjk0ZDA7XHJcbiAgICAvL2RlZ3JhZGFkb3NcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2ViOTRkMCwgIzIwNzliMCk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjZWI5NGQwLCAjMjA3OWIwKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgI2ViOTRkMCwgIzIwNzliMCk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgI2ViOTRkMCwgIzIwNzliMCk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ViOTRkMCwgIzIwNzliMCk7XHJcblxyXG4gIC8vZGFyIGJvcmRlXHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbnRleHQtc2hhZG93OiAzcHggMnB4IDFweCAjOWRhZWY1O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogNnB4IDVweCAyNHB4ICM2NjY2NjY7XHJcbiAgLW1vei1ib3gtc2hhZG93OiA2cHggNXB4IDI0cHggIzY2NjY2NjtcclxuICBib3gtc2hhZG93OiA2cHggNXB4IDI0cHggIzY2NjY2NjtcclxuZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gIGNvbG9yOiAjZmFmYWZhO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBwYWRkaW5nOiAxcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIFxyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG59XHJcblxyXG4iLCIuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5jb2wtMTAsIC5jb2wtMTMge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmNhcmQge1xuICB3aWRvd3M6IDEwMCU7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIGZvbnQtc2l6ZTogMjNweCAhaW1wb3J0YW50O1xufVxuXG4ucHJlY2lvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IG1lZGl1bTtcbn1cblxuLmhvcmFyaW8ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxOXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kaXJlY2Npb24ge1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbn1cblxuLmljb25fcCB7XG4gIGNvbG9yOiBmb3Jlc3RncmVlbjtcbiAgZm9udC1zaXplOiAxOXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pY29uX2gge1xuICBjb2xvcjogI2YxYmQxMztcbiAgZm9udC1zaXplOiAxOXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pY29uX2Qge1xuICBjb2xvcjogI2Y4MDgwODtcbiAgZm9udC1zaXplOiAxOXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG4ge1xuICBiYWNrZ3JvdW5kOiAjZWI5NGQwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNlYjk0ZDAsICMyMDc5YjApO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNlYjk0ZDAsICMyMDc5YjApO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgI2ViOTRkMCwgIzIwNzliMCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICNlYjk0ZDAsICMyMDc5YjApO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZWI5NGQwLCAjMjA3OWIwKTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgdGV4dC1zaGFkb3c6IDNweCAycHggMXB4ICM5ZGFlZjU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogNnB4IDVweCAyNHB4ICM2NjY2NjY7XG4gIC1tb3otYm94LXNoYWRvdzogNnB4IDVweCAyNHB4ICM2NjY2NjY7XG4gIGJveC1zaGFkb3c6IDZweCA1cHggMjRweCAjNjY2NjY2O1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIGNvbG9yOiAjZmFmYWZhO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDFweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/hoteles/hoteles.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/hoteles/hoteles.page.ts ***!
  \***********************************************/
/*! exports provided: HotelesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelesPage", function() { return HotelesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_establecimientos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/establecimientos.service */ "./src/app/services/establecimientos.service.ts");





let HotelesPage = class HotelesPage {
    constructor(estableService, modalCtrl, route) {
        this.estableService = estableService;
        this.modalCtrl = modalCtrl;
        this.route = route;
        this.listahoteles = [];
        this.slideOpts = {
            slidesPerView: 1.3,
            freeMode: true
        };
    }
    ngOnInit() {
        this.estableService.gethoteles()
            .subscribe(resp => {
            // console.log('Resp',resp );
            this.listahoteles = resp;
        });
        //console.log('hoteles',res);
        //this.hoteles= Response;
    }
    irADetalle(listado) {
        this.route.navigate(['detalle-establecimiento', { datos: JSON.stringify(listado) }]);
    }
};
HotelesPage.ctorParameters = () => [
    { type: _services_establecimientos_service__WEBPACK_IMPORTED_MODULE_4__["EstablecimientosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HotelesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hoteles',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hoteles.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hoteles/hoteles.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hoteles.page.scss */ "./src/app/pages/hoteles/hoteles.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_establecimientos_service__WEBPACK_IMPORTED_MODULE_4__["EstablecimientosService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], HotelesPage);



/***/ }),

/***/ "./src/app/pipes/imagen.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/imagen.pipe.ts ***!
  \**************************************/
/*! exports provided: ImagenPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagenPipe", function() { return ImagenPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const URL = 'https://firebasestorage.googleapis.com/v0/b/tulcan-be024.appspot.com/o/';
let ImagenPipe = class ImagenPipe {
    transform(img) {
        if (!img) {
            return;
        }
        const imgUrl = `${URL}/${img}`;
        console.log('URL', imgUrl);
        return imgUrl;
    }
};
ImagenPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'imagen'
    })
], ImagenPipe);



/***/ }),

/***/ "./src/app/pipes/pipes.module.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _imagen_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imagen.pipe */ "./src/app/pipes/imagen.pipe.ts");




let PipesModule = class PipesModule {
};
PipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _imagen_pipe__WEBPACK_IMPORTED_MODULE_3__["ImagenPipe"]
        ],
        exports: [
            _imagen_pipe__WEBPACK_IMPORTED_MODULE_3__["ImagenPipe"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], PipesModule);



/***/ })

}]);
//# sourceMappingURL=pages-hoteles-hoteles-module-es2015.js.map