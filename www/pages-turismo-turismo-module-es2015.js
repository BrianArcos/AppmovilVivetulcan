(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-turismo-turismo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/turismo/turismo.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/turismo/turismo.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<app-header align=\"end\" titulo= \"Sitios Turísticos\"></app-header> \r\n\r\n<ion-content  class=\"card-background-page\">\r\n  <ion-item-divider ></ion-item-divider>\r\n    <ion-grid >\r\n  \r\n      <ion-row >\r\n  \r\n             <ion-col size=\"12\" size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size-xs=\"12\">                                 \r\n                      <ion-card  [routerLink]=\"['/atractivos']\">               \r\n                        <img src=\"https://firebasestorage.googleapis.com/v0/b/tulcan-be024.appspot.com/o/Portadas%2Fatractivos.jpg?alt=media&token=edef0130-03c0-48d3-aa63-b6dc08ffd242\" />   \r\n                          <div class=\"card-title_a\">Sitios Naturales y Culturales</div>\r\n                          <div class=\"card-subtitle_a\"></div>\r\n                      </ion-card>\r\n             </ion-col>               \r\n  \r\n             <ion-col size=\"12\" size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size-xs=\"12\" >\r\n                      <ion-card [routerLink]=\"['/complejos']\">\r\n                        <img src=\"https://firebasestorage.googleapis.com/v0/b/tulcan-be024.appspot.com/o/Portadas%2Fcomplejos.jpg?alt=media&token=81deb22a-f77b-4550-88fa-8acfa408c70a\"/>\r\n                          <div class=\"card-title\">Complejos turísticos</div>\r\n                          <div class=\"card-subtitle\"></div>\r\n                      </ion-card>\r\n             </ion-col>\r\n  \r\n        </ion-row>\r\n    </ion-grid>\r\n    \r\n  </ion-content>\r\n  \r\n\r\n\r\n\r\n<!-- <app-header titulo=\"Atractivos Turísticos\"> </app-header>\r\n\r\n<ion-content >\r\n  \r\n  <ion-grid fixed >\r\n    <ion-row >\r\n\r\n      <ion-col size=\"12\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\" size-xs=\"12\"\r\n              *ngFor=\"let lista_A of lista_A\"> -->\r\n         <!-- <ion-slides [options]=\"slideOpts\"> -->\r\n           <!-- <ion-slide  -->\r\n                      \r\n\r\n              <!-- <ion-card (click)=\"irADetalle(lista_A)\">\r\n               <ion-card-header>\r\n                <ion-card-subtitle>{{lista_A.nombre}}</ion-card-subtitle>\r\n                <ion-card-title> {{lista_A.horario}}         </ion-card-title>\r\n               </ion-card-header>\r\n                    <img src={{lista_A.foto_portada}}>    -->\r\n                    <!-- <img [src]=\"listahoteles.foto_portada | imagen\"> -->\r\n              <!-- </ion-card> -->\r\n           <!-- </ion-slide> -->\r\n          <!-- </ion-slides> -->\r\n\r\n      <!-- </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n</ion-content> -->\r\n");

/***/ }),

/***/ "./src/app/pages/turismo/turismo-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/turismo/turismo-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: TurismoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurismoPageRoutingModule", function() { return TurismoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _turismo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./turismo.page */ "./src/app/pages/turismo/turismo.page.ts");




const routes = [
    {
        path: '',
        component: _turismo_page__WEBPACK_IMPORTED_MODULE_3__["TurismoPage"]
    }
];
let TurismoPageRoutingModule = class TurismoPageRoutingModule {
};
TurismoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TurismoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/turismo/turismo.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/turismo/turismo.module.ts ***!
  \*************************************************/
/*! exports provided: TurismoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurismoPageModule", function() { return TurismoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _turismo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./turismo-routing.module */ "./src/app/pages/turismo/turismo-routing.module.ts");
/* harmony import */ var _turismo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./turismo.page */ "./src/app/pages/turismo/turismo.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let TurismoPageModule = class TurismoPageModule {
};
TurismoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _turismo_routing_module__WEBPACK_IMPORTED_MODULE_5__["TurismoPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_turismo_page__WEBPACK_IMPORTED_MODULE_6__["TurismoPage"]]
    })
], TurismoPageModule);



/***/ }),

/***/ "./src/app/pages/turismo/turismo.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/turismo/turismo.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-background-page ion-card {\n  position: relative;\n  text-align: center;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));\n}\n.card-background-page img {\n  height: 100%;\n  max-height: 100%;\n  max-width: 100%;\n  min-height: 100%;\n  min-width: 100%;\n  width: 100%;\n}\n.card-background-page img {\n  opacity: 0.35;\n}\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n.card-background-page .card-subtitle {\n  font-size: 1.5em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n.card-background-page .card-title_a {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n.card-background-page .card-subtitle_a {\n  font-size: 1.5em;\n  position: absolute;\n  top: 64%;\n  width: 100%;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHVyaXNtby9DOlxcSU9OSUM1XFxWaXZlVHVsY2FuXFxWaXZlVHVsY2FuL3NyY1xcYXBwXFxwYWdlc1xcdHVyaXNtb1xcdHVyaXNtby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3R1cmlzbW8vdHVyaXNtby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUVBQUE7QUNETjtBRElJO0VBRUUsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNITjtBRE9JO0VBQ0UsYUFBQTtBQ0xOO0FEVUk7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ1JOO0FEV0k7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDVE47QURXSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDVE47QURXSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNUTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R1cmlzbW8vdHVyaXNtby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xyXG5cclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgcG9zaXRpb246cmVsYXRpdmU7IFxyXG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjgpLHJnYmEoMCwwLDAsMC44KSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW1ne1xyXG4gICAgICBcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIG9wYWNpdHk6IDAuMzU7XHJcbiAgICAgIFxyXG4gIH1cclxuICAgIFxyXG4gIFxyXG4gICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMzYlO1xyXG4gICAgICBmb250LXNpemU6IDIuMGVtO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNhcmQtc3VidGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNTIlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgICAuY2FyZC10aXRsZV9hIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDM2JTtcclxuICAgICAgZm9udC1zaXplOiAyLjBlbTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIC5jYXJkLXN1YnRpdGxlX2Ege1xyXG4gICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNjQlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcblxyXG4gIFxyXG4gIH0iLCIuY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgaW9uLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC44KSwgcmdiYSgwLCAwLCAwLCAwLjgpKTtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSBpbWcge1xuICBvcGFjaXR5OiAwLjM1O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5jYXJkLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM2JTtcbiAgZm9udC1zaXplOiAyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmY7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmNhcmQtc3VidGl0bGUge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTIlO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmNhcmQtdGl0bGVfYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNiU7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5jYXJkLXN1YnRpdGxlX2Ege1xuICBmb250LXNpemU6IDEuNWVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjQlO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/turismo/turismo.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/turismo/turismo.page.ts ***!
  \***********************************************/
/*! exports provided: TurismoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurismoPage", function() { return TurismoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_establecimientos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/establecimientos.service */ "./src/app/services/establecimientos.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let TurismoPage = class TurismoPage {
    constructor(atractivService, modalCtrl, route) {
        this.atractivService = atractivService;
        this.modalCtrl = modalCtrl;
        this.route = route;
    }
    ngOnInit() {
        this.atractivService.getatractivos()
            .subscribe(resp => {
            // console.log('Resp',resp );
            this.lista_A = resp;
        });
    }
    irADetalle(listado) {
        this.route.navigate(['detalle-atractivo', { datos: JSON.stringify(listado) }]);
    }
};
TurismoPage.ctorParameters = () => [
    { type: _services_establecimientos_service__WEBPACK_IMPORTED_MODULE_2__["EstablecimientosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
TurismoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-turismo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./turismo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/turismo/turismo.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./turismo.page.scss */ "./src/app/pages/turismo/turismo.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_establecimientos_service__WEBPACK_IMPORTED_MODULE_2__["EstablecimientosService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], TurismoPage);



/***/ })

}]);
//# sourceMappingURL=pages-turismo-turismo-module-es2015.js.map