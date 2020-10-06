(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-detalleotros-detalleotros-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalleotros/detalleotros.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalleotros/detalleotros.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n    \r\n    <app-header> </app-header>\r\n  \r\n    \r\n  \r\n\r\n    <ion-content >\r\n      \r\n       \r\n        \r\n      <ion-card class=\"card\">\r\n      \r\n        <img class=\"img\" src={{lista_O.foto_portada}}>  \r\n    \r\n      </ion-card>\r\n      \r\n    \r\n      \r\n      <!-- <ion-icon class=\"item\" name=\"logo-facebook\" (click)=\"openWeb(lista.facebook,'_system')\">Pagina web</ion-icon> -->\r\n     \r\n      \r\n          <ion-list>\r\n            <ion-card >\r\n              <h1 class=\"nombre\">{{lista_O.nombre}}</h1>\r\n              <ion-item>\r\n                <ion-label ><ion-icon  class=\"title\" color=\"location\" class=\"size\" name=\"location-outline\"></ion-icon> {{lista_O.Direccion}} </ion-label>\r\n                \r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label ><ion-icon color=\"email\" class=\"size\" name=\"alarm\"></ion-icon> {{lista_O.horario}} </ion-label>\r\n                \r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label ><ion-icon class=\"size\" color=\"call\" name=\"call-outline\"></ion-icon> {{lista_O.telefono}} </ion-label>\r\n                \r\n              </ion-item>\r\n              \r\n              \r\n              \r\n              \r\n               <!-- <p> <h2>Descripción</h2> \r\n                <ion-label class=\"descripcion\" >{{lista.descripcion}} </ion-label> -->\r\n              \r\n              \r\n            </ion-card>\r\n            \r\n          </ion-list>\r\n          \r\n    \r\n    </ion-content>\r\n     ");

/***/ }),

/***/ "./src/app/pages/detalleotros/detalleotros-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/detalleotros/detalleotros-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: DetalleotrosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleotrosPageRoutingModule", function() { return DetalleotrosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _detalleotros_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detalleotros.page */ "./src/app/pages/detalleotros/detalleotros.page.ts");




const routes = [
    {
        path: '',
        component: _detalleotros_page__WEBPACK_IMPORTED_MODULE_3__["DetalleotrosPage"]
    }
];
let DetalleotrosPageRoutingModule = class DetalleotrosPageRoutingModule {
};
DetalleotrosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetalleotrosPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/detalleotros/detalleotros.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/detalleotros/detalleotros.module.ts ***!
  \***********************************************************/
/*! exports provided: DetalleotrosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleotrosPageModule", function() { return DetalleotrosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _detalleotros_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detalleotros-routing.module */ "./src/app/pages/detalleotros/detalleotros-routing.module.ts");
/* harmony import */ var _detalleotros_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalleotros.page */ "./src/app/pages/detalleotros/detalleotros.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let DetalleotrosPageModule = class DetalleotrosPageModule {
};
DetalleotrosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detalleotros_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetalleotrosPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_detalleotros_page__WEBPACK_IMPORTED_MODULE_6__["DetalleotrosPage"]]
    })
], DetalleotrosPageModule);



/***/ }),

/***/ "./src/app/pages/detalleotros/detalleotros.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/detalleotros/detalleotros.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fb {\n  width: 30px;\n  height: 30px;\n  background-color: white;\n  font-family: Gill Sans;\n}\n\n.what {\n  width: 30px;\n  height: 30px;\n  font-family: Gill Sans;\n}\n\n.Web {\n  width: 30px;\n  height: 30px;\n  color: #f7f7f8;\n  font-family: Gill Sans;\n}\n\n.call {\n  width: 30px;\n  height: 30px;\n  color: white;\n}\n\n.text {\n  font-size: small;\n  font-family: Gill Sans;\n}\n\n.title_desc {\n  font-family: Arial;\n  font-size: 23px !important;\n  font-family: cursive;\n}\n\n.descripcion {\n  font-family: Arial;\n  font-size: 17px !important;\n}\n\n.size {\n  width: 25px;\n  height: 25px;\n}\n\n.nombre {\n  font-family: Arial;\n  font-size: 24px !important;\n}\n\n.img {\n  width: 100%;\n  height: 100%;\n}\n\n.card {\n  width: 220px;\n  height: 200px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGV0YWxsZW90cm9zL0M6XFxJT05JQzVcXFZpdmVUdWxjYW5cXFZpdmVUdWxjYW4vc3JjXFxhcHBcXHBhZ2VzXFxkZXRhbGxlb3Ryb3NcXGRldGFsbGVvdHJvcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2RldGFsbGVvdHJvcy9kZXRhbGxlb3Ryb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUVBLHNCQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDQUo7O0FESUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQ0RKOztBRElBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFFQSxZQUFBO0FDRko7O0FESUE7RUFDSSxnQkFBQTtFQUVBLHNCQUFBO0FDRko7O0FESUE7RUFHSSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7QUNISjs7QURLQTtFQUdJLGtCQUFBO0VBQ0EsMEJBQUE7QUNKSjs7QURRQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDTEo7O0FEU0E7RUFDSSxrQkFBQTtFQUNBLDBCQUFBO0FDTko7O0FEVUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ1BKOztBRFNBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDTkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kZXRhbGxlb3Ryb3MvZGV0YWxsZW90cm9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYntcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBcclxuICAgIGZvbnQtZmFtaWx5OkdpbGwgU2FucztcclxufVxyXG5cclxuLndoYXR7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGZvbnQtZmFtaWx5OkdpbGwgU2FucztcclxuICAgICAgICBcclxufVxyXG5cclxuLldlYntcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgY29sb3I6IHJnYigyNDcsIDI0NywgMjQ4KTtcclxuICAgIGZvbnQtZmFtaWx5OkdpbGwgU2FucztcclxufVxyXG5cclxuLmNhbGx7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIFxyXG4gICAgY29sb3I6IHdoaXRlOyAgICBcclxufVxyXG4udGV4dHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAvLyBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtZmFtaWx5OkdpbGwgU2FucztcclxufVxyXG4udGl0bGVfZGVzY3tcclxuICAgIFxyXG4gICAgLy8gY29sb3I6ICMwMDA7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgICBmb250LXNpemU6MjNweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbn1cclxuLmRlc2NyaXBjaW9ue1xyXG4gICAgLy8gZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICAvLyBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICAgIGZvbnQtc2l6ZToxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICAgIFxyXG59XHJcbi5zaXple1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBcclxufVxyXG5cclxuLm5vbWJyZXtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICAgIGZvbnQtc2l6ZToyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBcclxufVxyXG5cclxuLmltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5jYXJke1xyXG4gICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbiIsIi5mYiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogR2lsbCBTYW5zO1xufVxuXG4ud2hhdCB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBHaWxsIFNhbnM7XG59XG5cbi5XZWIge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogI2Y3ZjdmODtcbiAgZm9udC1mYW1pbHk6IEdpbGwgU2Fucztcbn1cblxuLmNhbGwge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50ZXh0IHtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgZm9udC1mYW1pbHk6IEdpbGwgU2Fucztcbn1cblxuLnRpdGxlX2Rlc2Mge1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIGZvbnQtc2l6ZTogMjNweCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbn1cblxuLmRlc2NyaXBjaW9uIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbn1cblxuLnNpemUge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4ubm9tYnJlIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcbn1cblxuLmltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jYXJkIHtcbiAgd2lkdGg6IDIyMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBtYXJnaW46IGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/detalleotros/detalleotros.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/detalleotros/detalleotros.page.ts ***!
  \*********************************************************/
/*! exports provided: DetalleotrosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleotrosPage", function() { return DetalleotrosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_establecimientos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/establecimientos.service */ "./src/app/services/establecimientos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let DetalleotrosPage = class DetalleotrosPage {
    constructor(otrosService, state) {
        this.otrosService = otrosService;
        this.state = state;
    }
    ngOnInit() {
        this.lista_O = JSON.parse(this.state.snapshot.params.datos);
    }
};
DetalleotrosPage.ctorParameters = () => [
    { type: _services_establecimientos_service__WEBPACK_IMPORTED_MODULE_2__["EstablecimientosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
DetalleotrosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detalleotros',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detalleotros.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalleotros/detalleotros.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detalleotros.page.scss */ "./src/app/pages/detalleotros/detalleotros.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_establecimientos_service__WEBPACK_IMPORTED_MODULE_2__["EstablecimientosService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], DetalleotrosPage);



/***/ })

}]);
//# sourceMappingURL=pages-detalleotros-detalleotros-module-es2015.js.map