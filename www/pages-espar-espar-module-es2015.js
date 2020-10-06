(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-espar-espar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/espar/espar.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/espar/espar.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<app-header align=\"end\" titulo=\"Esparcimiento\"> </app-header>\r\n\r\n<ion-content  class=\"card-background-page\">\r\n\r\n  <ion-grid >\r\n\r\n    <ion-row >\r\n\r\n           <ion-col size=\"12\" size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size-xs=\"12\">                                 \r\n                    <ion-card  [routerLink]=\"['/discotecas']\">               \r\n                      <img src=\"https://firebasestorage.googleapis.com/v0/b/tulcan-be024.appspot.com/o/Portadas%2Fdiscotecas.jpg?alt=media&token=fa1b96ab-c6af-43d2-b353-8d89c0a18f2b\" />   \r\n                        <div class=\"card-title\">Discotecas</div>\r\n                        <div class=\"card-subtitle\"></div>\r\n                    </ion-card>\r\n           </ion-col>               \r\n\r\n           <ion-col size=\"12\" size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size-xs=\"12\" >\r\n                    <ion-card [routerLink]=\"['/bares']\">\r\n                      <img src=\"https://firebasestorage.googleapis.com/v0/b/tulcan-be024.appspot.com/o/Portadas%2Fbares.jpg?alt=media&token=ad9e0907-0a7b-4074-a302-506b4177b049\"/>\r\n                        <div class=\"card-title\">Bares</div>\r\n                        <div class=\"card-subtitle\"></div>\r\n                    </ion-card>\r\n           </ion-col>\r\n\r\n      </ion-row>\r\n  </ion-grid>\r\n  \r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/espar/espar.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/espar/espar.module.ts ***!
  \*********************************************/
/*! exports provided: EsparPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsparPageModule", function() { return EsparPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _espar_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./espar.page */ "./src/app/pages/espar/espar.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








const routes = [
    {
        path: '',
        component: _espar_page__WEBPACK_IMPORTED_MODULE_5__["EsparPage"]
    }
];
let EsparPageModule = class EsparPageModule {
};
EsparPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_espar_page__WEBPACK_IMPORTED_MODULE_5__["EsparPage"]]
    })
], EsparPageModule);



/***/ }),

/***/ "./src/app/pages/espar/espar.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/espar/espar.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-background-page ion-card {\n  position: relative;\n  text-align: center;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));\n}\n.card-background-page img {\n  height: 100%;\n  max-height: 100%;\n  max-width: 100%;\n  min-height: 100%;\n  min-width: 100%;\n  width: 100%;\n}\n.card-background-page img {\n  opacity: 0.35;\n}\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2.5em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n.card-background-page .card-subtitle {\n  font-size: 1.5em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXNwYXIvQzpcXElPTklDNVxcVml2ZVR1bGNhblxcVml2ZVR1bGNhbi9zcmNcXGFwcFxccGFnZXNcXGVzcGFyXFxlc3Bhci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2VzcGFyL2VzcGFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5RUFBQTtBQ0ROO0FESUk7RUFFRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0hOO0FET0k7RUFDRSxhQUFBO0FDTE47QURVSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ1JOO0FEV0k7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDVE4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lc3Bhci9lc3Bhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xyXG5cclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgcG9zaXRpb246cmVsYXRpdmU7IFxyXG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjgpLHJnYmEoMCwwLDAsMC44KSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW1ne1xyXG4gICAgICBcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIG9wYWNpdHk6IDAuMzU7XHJcbiAgICAgIFxyXG4gIH1cclxuICAgIFxyXG4gIFxyXG4gICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMzYlO1xyXG4gICAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNhcmQtc3VidGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNTIlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgICBcclxuICBcclxuICB9IiwiLmNhcmQtYmFja2dyb3VuZC1wYWdlIGlvbi1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuOCksIHJnYmEoMCwgMCwgMCwgMC44KSk7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgaW1nIHtcbiAgb3BhY2l0eTogMC4zNTtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuY2FyZC10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNiU7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmY7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmNhcmQtc3VidGl0bGUge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTIlO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/espar/espar.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/espar/espar.page.ts ***!
  \*******************************************/
/*! exports provided: EsparPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsparPage", function() { return EsparPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let EsparPage = class EsparPage {
    constructor(esparCtrl) {
        this.esparCtrl = esparCtrl;
    }
    ngOnInit() {
    }
};
EsparPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
EsparPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-espar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./espar.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/espar/espar.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./espar.page.scss */ "./src/app/pages/espar/espar.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], EsparPage);



/***/ })

}]);
//# sourceMappingURL=pages-espar-espar-module-es2015.js.map