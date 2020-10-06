(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-detalle-atractivo-detalle-atractivo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle-atractivo/detalle-atractivo.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle-atractivo/detalle-atractivo.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n    \r\n    <app-header> </app-header>\r\n  \r\n    \r\n  \r\n\r\n    <ion-content>\r\n      \r\n       \r\n      <ion-col  >\r\n      <ion-card class=\"card\">\r\n      <ion-label>\r\n        <img  src={{lista_A.foto_portada}}>  \r\n      </ion-label>\r\n      \r\n    </ion-card>\r\n      \r\n    </ion-col>\r\n      \r\n      <!-- <ion-icon class=\"item\" name=\"logo-facebook\" (click)=\"openWeb(lista.facebook,'_system')\">Pagina web</ion-icon> -->\r\n     \r\n          \r\n          <ion-list>\r\n            <ion-card>\r\n              <p> <h2 class=\"title_desc\"> Descripción</h2> \r\n                <div class=\"ion-text-justify\" ><h5>{{lista_A.descripcion|slice:0: oculto}}...</h5> </div>\r\n                <ion-label color=\"header\"\r\n                (click)=\"oculto = 5000\"\r\n                *ngIf=\"oculto !==5000\">Leer más! </ion-label>\r\n    \r\n              <ion-item>\r\n                <ion-label >\r\n                  <ion-icon class=\"icon_d\" class=\"title\" color=\"location\" name=\"location-outline\"></ion-icon> \r\n                  {{lista_A.direccion}} \r\n                </ion-label>\r\n\r\n                <ion-button (click)=\"mostrarUbicacion(lista_A.lat, lista_A.lng)\" fill=\"clear\" >\r\n                  <ion-icon class=\"size\" slot=\"end\" name=\"navigate-outline\"></ion-icon>\r\n                </ion-button>\r\n                \r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label ><ion-icon color=\"email\" class=\"icon_h\" name=\"alarm\"></ion-icon> {{lista_A.horario}} </ion-label>\r\n                \r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label ><ion-icon class=\"icon_p\" color=\"location\" name=\"logo-usd\"></ion-icon> {{lista_A.rango_precio}} </ion-label>\r\n                \r\n              </ion-item>\r\n              \r\n              \r\n              \r\n              \r\n               <!-- <p> <h2>Descripción</h2> \r\n                <ion-label class=\"descripcion\" >{{lista.descripcion}} </ion-label> -->\r\n              \r\n              \r\n            </ion-card>\r\n            \r\n          </ion-list>\r\n          \r\n    \r\n    </ion-content>\r\n     ");

/***/ }),

/***/ "./src/app/pages/detalle-atractivo/detalle-atractivo-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/detalle-atractivo/detalle-atractivo-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: DetalleAtractivoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleAtractivoPageRoutingModule", function() { return DetalleAtractivoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _detalle_atractivo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detalle-atractivo.page */ "./src/app/pages/detalle-atractivo/detalle-atractivo.page.ts");




const routes = [
    {
        path: '',
        component: _detalle_atractivo_page__WEBPACK_IMPORTED_MODULE_3__["DetalleAtractivoPage"]
    }
];
let DetalleAtractivoPageRoutingModule = class DetalleAtractivoPageRoutingModule {
};
DetalleAtractivoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetalleAtractivoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/detalle-atractivo/detalle-atractivo.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/detalle-atractivo/detalle-atractivo.module.ts ***!
  \*********************************************************************/
/*! exports provided: DetalleAtractivoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleAtractivoPageModule", function() { return DetalleAtractivoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _detalle_atractivo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detalle-atractivo-routing.module */ "./src/app/pages/detalle-atractivo/detalle-atractivo-routing.module.ts");
/* harmony import */ var _detalle_atractivo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalle-atractivo.page */ "./src/app/pages/detalle-atractivo/detalle-atractivo.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let DetalleAtractivoPageModule = class DetalleAtractivoPageModule {
};
DetalleAtractivoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detalle_atractivo_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetalleAtractivoPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_detalle_atractivo_page__WEBPACK_IMPORTED_MODULE_6__["DetalleAtractivoPage"]]
    })
], DetalleAtractivoPageModule);



/***/ }),

/***/ "./src/app/pages/detalle-atractivo/detalle-atractivo.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/detalle-atractivo/detalle-atractivo.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fb {\n  width: 30px;\n  height: 30px;\n  background-color: white;\n  font-family: Gill Sans;\n}\n\n.what {\n  width: 30px;\n  height: 30px;\n  font-family: Gill Sans;\n}\n\n.Web {\n  width: 30px;\n  height: 30px;\n  color: #f7f7f8;\n  font-family: Gill Sans;\n}\n\n.call {\n  width: 30px;\n  height: 30px;\n  color: white;\n}\n\n.text {\n  font-size: small;\n  font-family: Gill Sans;\n}\n\n.title_desc {\n  font-family: Arial;\n  font-size: 23px !important;\n  font-family: cursive;\n}\n\n.descripcion {\n  font-family: Arial;\n  font-size: 17px !important;\n}\n\n.size {\n  width: 25px;\n  height: 25px;\n}\n\n.icon_p {\n  color: forestgreen;\n  font-size: 19px !important;\n}\n\n.icon_h {\n  color: #f1bd13;\n  font-size: 19px !important;\n}\n\n.icon_d {\n  color: #f80808;\n  font-size: 19px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGV0YWxsZS1hdHJhY3Rpdm8vQzpcXElPTklDNVxcVml2ZVR1bGNhblxcVml2ZVR1bGNhbi9zcmNcXGFwcFxccGFnZXNcXGRldGFsbGUtYXRyYWN0aXZvXFxkZXRhbGxlLWF0cmFjdGl2by5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2RldGFsbGUtYXRyYWN0aXZvL2RldGFsbGUtYXRyYWN0aXZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFFQSxzQkFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ0FKOztBRElBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUNESjs7QURJQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBRUEsWUFBQTtBQ0ZKOztBRElBO0VBQ0ksZ0JBQUE7RUFFQSxzQkFBQTtBQ0ZKOztBRElBO0VBR0ksa0JBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0FDSEo7O0FES0E7RUFHSSxrQkFBQTtFQUNBLDBCQUFBO0FDSko7O0FEU0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ05KOztBRFFBO0VBQ0ksa0JBQUE7RUFDQSwwQkFBQTtBQ0xKOztBRFFBO0VBQ0ksY0FBQTtFQUNBLDBCQUFBO0FDTEo7O0FEUUE7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldGFsbGUtYXRyYWN0aXZvL2RldGFsbGUtYXRyYWN0aXZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYntcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBcclxuICAgIGZvbnQtZmFtaWx5OkdpbGwgU2FucztcclxufVxyXG5cclxuLndoYXR7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGZvbnQtZmFtaWx5OkdpbGwgU2FucztcclxuICAgICAgICBcclxufVxyXG5cclxuLldlYntcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgY29sb3I6IHJnYigyNDcsIDI0NywgMjQ4KTtcclxuICAgIGZvbnQtZmFtaWx5OkdpbGwgU2FucztcclxufVxyXG5cclxuLmNhbGx7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIFxyXG4gICAgY29sb3I6IHdoaXRlOyAgICBcclxufVxyXG4udGV4dHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAvLyBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtZmFtaWx5OkdpbGwgU2FucztcclxufVxyXG4udGl0bGVfZGVzY3tcclxuICAgIFxyXG4gICAgLy8gY29sb3I6ICMwMDA7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgICBmb250LXNpemU6MjNweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbn1cclxuLmRlc2NyaXBjaW9ue1xyXG4gICAgLy8gZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICAvLyBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICAgIGZvbnQtc2l6ZToxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG4uc2l6ZXtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcbi5pY29uX3B7XHJcbiAgICBjb2xvcjogZm9yZXN0Z3JlZW47XHJcbiAgICBmb250LXNpemU6IDE5cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmljb25faHtcclxuICAgIGNvbG9yOiByZ2IoMjQxLCAxODksIDE5KTtcclxuICAgIGZvbnQtc2l6ZTogMTlweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaWNvbl9ke1xyXG4gICAgY29sb3I6IHJnYigyNDgsIDgsIDgpO1xyXG4gICAgZm9udC1zaXplOiAxOXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIC5jYXJke1xyXG4gICAvLyAgd2lkdGg6IDYwMHB4O1xyXG4gICAvLyAgaGVpZ2h0OiA0MDBweDtcclxuICAgIFxyXG4gICAvLyAgbWFyZ2luLWxlZnQ6IDI3JTtcclxuICAgLy8gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIC8vIHNpemU6IDEyIDtcclxuICAgIC8vIHNpemU6IGxnIDUwJSA7XHJcbiAgICAvLyBzaXplOiBtZCA1MCUgO1xyXG4gICAgLy8gc2l6ZTogc20gNTAlIDtcclxuICAgIC8vIHNpemU6IHhzIDEyO1xyXG4vLyB9XHJcbiIsIi5mYiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogR2lsbCBTYW5zO1xufVxuXG4ud2hhdCB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBHaWxsIFNhbnM7XG59XG5cbi5XZWIge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogI2Y3ZjdmODtcbiAgZm9udC1mYW1pbHk6IEdpbGwgU2Fucztcbn1cblxuLmNhbGwge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50ZXh0IHtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgZm9udC1mYW1pbHk6IEdpbGwgU2Fucztcbn1cblxuLnRpdGxlX2Rlc2Mge1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIGZvbnQtc2l6ZTogMjNweCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbn1cblxuLmRlc2NyaXBjaW9uIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbn1cblxuLnNpemUge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4uaWNvbl9wIHtcbiAgY29sb3I6IGZvcmVzdGdyZWVuO1xuICBmb250LXNpemU6IDE5cHggIWltcG9ydGFudDtcbn1cblxuLmljb25faCB7XG4gIGNvbG9yOiAjZjFiZDEzO1xuICBmb250LXNpemU6IDE5cHggIWltcG9ydGFudDtcbn1cblxuLmljb25fZCB7XG4gIGNvbG9yOiAjZjgwODA4O1xuICBmb250LXNpemU6IDE5cHggIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/detalle-atractivo/detalle-atractivo.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/detalle-atractivo/detalle-atractivo.page.ts ***!
  \*******************************************************************/
/*! exports provided: DetalleAtractivoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleAtractivoPage", function() { return DetalleAtractivoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_establecimientos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/establecimientos.service */ "./src/app/services/establecimientos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_components_map_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/map/map.component */ "./src/app/components/map/map.component.ts");








let DetalleAtractivoPage = class DetalleAtractivoPage {
    constructor(atractivService, state, navegador, call, modalController) {
        this.atractivService = atractivService;
        this.state = state;
        this.navegador = navegador;
        this.call = call;
        this.modalController = modalController;
        this.oculto = 120;
    }
    ngOnInit() {
        this.lista_A = JSON.parse(this.state.snapshot.params.datos);
    }
    openWeb(lista, target) {
        const link = lista;
        this.navegador.create(link, target);
        // this.navegador.create('https://www.google.com','_self')
    }
    openFb(lista, target) {
        const id = lista;
        this.navegador.create(id, target);
    }
    calln(lista) {
        this.call.callNumber(lista, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
    mostrarUbicacion(lat, lng) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log(lat);
            // console.log(lng);
            const modal = yield this.modalController.create({
                component: src_app_components_map_map_component__WEBPACK_IMPORTED_MODULE_7__["MapComponent"],
                componentProps: {
                    lat,
                    lng
                }
            });
            modal.present();
        });
    }
};
DetalleAtractivoPage.ctorParameters = () => [
    { type: _services_establecimientos_service__WEBPACK_IMPORTED_MODULE_2__["EstablecimientosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__["CallNumber"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
DetalleAtractivoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detalle-atractivo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detalle-atractivo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle-atractivo/detalle-atractivo.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detalle-atractivo.page.scss */ "./src/app/pages/detalle-atractivo/detalle-atractivo.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_establecimientos_service__WEBPACK_IMPORTED_MODULE_2__["EstablecimientosService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"],
        _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__["CallNumber"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])
], DetalleAtractivoPage);



/***/ })

}]);
//# sourceMappingURL=pages-detalle-atractivo-detalle-atractivo-module-es2015.js.map