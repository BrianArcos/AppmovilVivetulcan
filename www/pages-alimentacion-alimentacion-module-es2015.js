(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-alimentacion-alimentacion-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/alimentacion/alimentacion.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/alimentacion/alimentacion.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<app-header align=\"end\" titulo= \"Alimentación\"></app-header> \r\n\r\n<ion-content  class=\"card-background-page\">\r\n  <ion-item-divider ></ion-item-divider>\r\n    <ion-grid >\r\n  \r\n      <ion-row >\r\n  \r\n             <ion-col size=\"12\" size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size-xs=\"12\">                                 \r\n                      <ion-card  [routerLink]=\"['/restaurantes']\">               \r\n                        <img src=\"https://firebasestorage.googleapis.com/v0/b/tulcan-be024.appspot.com/o/Portadas%2FRestaurantes.jpg?alt=media&token=efe8e2bb-6beb-4d62-bbe8-1f4207b92346\" />   \r\n                          <div class=\"card-title\">Restaurantes</div>\r\n                          <div class=\"card-subtitle\"></div>\r\n                      </ion-card>\r\n             </ion-col>               \r\n  \r\n             <ion-col size=\"12\" size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size-xs=\"12\" >\r\n                      <ion-card [routerLink]=\"['/cafeterias']\">\r\n                        <img src=\"https://firebasestorage.googleapis.com/v0/b/tulcan-be024.appspot.com/o/Portadas%2FCafeterias.jpg?alt=media&token=49eeb828-c986-4180-8215-bae1bd1fddd5\"/>\r\n                          <div class=\"card-title\">Cafeterías</div>\r\n                          <div class=\"card-subtitle\"></div>\r\n                      </ion-card>\r\n             </ion-col>\r\n  \r\n        </ion-row>\r\n    </ion-grid>\r\n    \r\n  </ion-content>\r\n  \r\n");

/***/ }),

/***/ "./src/app/pages/alimentacion/alimentacion.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/alimentacion/alimentacion.module.ts ***!
  \***********************************************************/
/*! exports provided: AlimentacionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlimentacionPageModule", function() { return AlimentacionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _alimentacion_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alimentacion.page */ "./src/app/pages/alimentacion/alimentacion.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








const routes = [
    {
        path: '',
        component: _alimentacion_page__WEBPACK_IMPORTED_MODULE_5__["AlimentacionPage"]
    }
];
let AlimentacionPageModule = class AlimentacionPageModule {
};
AlimentacionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_alimentacion_page__WEBPACK_IMPORTED_MODULE_5__["AlimentacionPage"]]
    })
], AlimentacionPageModule);



/***/ }),

/***/ "./src/app/pages/alimentacion/alimentacion.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/alimentacion/alimentacion.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-background-page ion-card {\n  position: relative;\n  text-align: center;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));\n}\n.card-background-page img {\n  height: 100%;\n  max-height: 100%;\n  max-width: 100%;\n  min-height: 100%;\n  min-width: 100%;\n  width: 100%;\n}\n.card-background-page img {\n  opacity: 0.35;\n}\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2.5em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n.card-background-page .card-subtitle {\n  font-size: 1.5em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWxpbWVudGFjaW9uL0M6XFxJT05JQzVcXFZpdmVUdWxjYW5cXFZpdmVUdWxjYW4vc3JjXFxhcHBcXHBhZ2VzXFxhbGltZW50YWNpb25cXGFsaW1lbnRhY2lvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FsaW1lbnRhY2lvbi9hbGltZW50YWNpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlFQUFBO0FDRE47QURJSTtFQUVFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDSE47QURPSTtFQUNFLGFBQUE7QUNMTjtBRFVJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDUk47QURXSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNUTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FsaW1lbnRhY2lvbi9hbGltZW50YWNpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcclxuXHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgIHBvc2l0aW9uOnJlbGF0aXZlOyBcclxuICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC44KSxyZ2JhKDAsMCwwLDAuOCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGltZ3tcclxuICAgICAgXHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBvcGFjaXR5OiAwLjM1O1xyXG4gICAgICBcclxuICB9XHJcbiAgICBcclxuICBcclxuICAgIC5jYXJkLXRpdGxlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDM2JTtcclxuICAgICAgZm9udC1zaXplOiAyLjVlbTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICBcclxuICAgIC5jYXJkLXN1YnRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDUyJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgXHJcbiAgfSIsIi5jYXJkLWJhY2tncm91bmQtcGFnZSBpb24tY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjgpLCByZ2JhKDAsIDAsIDAsIDAuOCkpO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIGltZyB7XG4gIG9wYWNpdHk6IDAuMzU7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmNhcmQtdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzYlO1xuICBmb250LXNpemU6IDIuNWVtO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUyJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/alimentacion/alimentacion.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/alimentacion/alimentacion.page.ts ***!
  \*********************************************************/
/*! exports provided: AlimentacionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlimentacionPage", function() { return AlimentacionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let AlimentacionPage = class AlimentacionPage {
    constructor(alimentacionCtrl) {
        this.alimentacionCtrl = alimentacionCtrl;
    }
    ngOnInit() {
    }
};
AlimentacionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
AlimentacionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alimentacion',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alimentacion.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/alimentacion/alimentacion.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./alimentacion.page.scss */ "./src/app/pages/alimentacion/alimentacion.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], AlimentacionPage);



/***/ })

}]);
//# sourceMappingURL=pages-alimentacion-alimentacion-module-es2015.js.map