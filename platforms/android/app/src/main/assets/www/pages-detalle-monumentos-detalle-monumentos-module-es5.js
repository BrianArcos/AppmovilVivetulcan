function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-detalle-monumentos-detalle-monumentos-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle-monumentos/detalle-monumentos.page.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle-monumentos/detalle-monumentos.page.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDetalleMonumentosDetalleMonumentosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n    \r\n    <app-header> </app-header>\r\n  \r\n    \r\n  \r\n\r\n    <ion-content>\r\n      \r\n       \r\n      <ion-col  >\r\n      <ion-card class=\"card\">\r\n      <ion-label>\r\n        <img  src={{lista_M.foto_portada}}>  \r\n      </ion-label>\r\n      \r\n    </ion-card>\r\n      \r\n    </ion-col>\r\n      \r\n      <!-- <ion-icon class=\"item\" name=\"logo-facebook\" (click)=\"openWeb(lista.facebook,'_system')\">Pagina web</ion-icon> -->\r\n     \r\n          \r\n          <ion-list>\r\n            <ion-card>\r\n              <p> <h2 class=\"title_desc\"> Descripción</h2> \r\n                <div class=\"ion-text-justify\" ><h5>{{lista_M.Descripcion|slice:0: oculto}}... </h5></div>\r\n                <ion-label color=\"header\"\r\n                (click)=\"oculto = 5000\"\r\n                *ngIf=\"oculto !==5000\">Leer más! </ion-label>\r\n    \r\n              <ion-item>\r\n                <ion-label ><ion-icon  class=\"title\" color=\"location\" class=\"size\" name=\"location-outline\"></ion-icon> {{lista_M.Direccion}} </ion-label>\r\n                \r\n              </ion-item>\r\n              \r\n              \r\n            </ion-card>\r\n            \r\n          </ion-list>\r\n          \r\n    \r\n    </ion-content>\r\n     ";
    /***/
  },

  /***/
  "./src/app/pages/detalle-monumentos/detalle-monumentos-routing.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/detalle-monumentos/detalle-monumentos-routing.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: DetalleMonumentosPageRoutingModule */

  /***/
  function srcAppPagesDetalleMonumentosDetalleMonumentosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetalleMonumentosPageRoutingModule", function () {
      return DetalleMonumentosPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _detalle_monumentos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./detalle-monumentos.page */
    "./src/app/pages/detalle-monumentos/detalle-monumentos.page.ts");

    var routes = [{
      path: '',
      component: _detalle_monumentos_page__WEBPACK_IMPORTED_MODULE_3__["DetalleMonumentosPage"]
    }];

    var DetalleMonumentosPageRoutingModule = function DetalleMonumentosPageRoutingModule() {
      _classCallCheck(this, DetalleMonumentosPageRoutingModule);
    };

    DetalleMonumentosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DetalleMonumentosPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/detalle-monumentos/detalle-monumentos.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/detalle-monumentos/detalle-monumentos.module.ts ***!
    \***********************************************************************/

  /*! exports provided: DetalleMonumentosPageModule */

  /***/
  function srcAppPagesDetalleMonumentosDetalleMonumentosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetalleMonumentosPageModule", function () {
      return DetalleMonumentosPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _detalle_monumentos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./detalle-monumentos-routing.module */
    "./src/app/pages/detalle-monumentos/detalle-monumentos-routing.module.ts");
    /* harmony import */


    var _detalle_monumentos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./detalle-monumentos.page */
    "./src/app/pages/detalle-monumentos/detalle-monumentos.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");

    var DetalleMonumentosPageModule = function DetalleMonumentosPageModule() {
      _classCallCheck(this, DetalleMonumentosPageModule);
    };

    DetalleMonumentosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _detalle_monumentos_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetalleMonumentosPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_detalle_monumentos_page__WEBPACK_IMPORTED_MODULE_6__["DetalleMonumentosPage"]]
    })], DetalleMonumentosPageModule);
    /***/
  },

  /***/
  "./src/app/pages/detalle-monumentos/detalle-monumentos.page.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/detalle-monumentos/detalle-monumentos.page.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDetalleMonumentosDetalleMonumentosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".fb {\n  width: 30px;\n  height: 30px;\n  background-color: white;\n  font-family: Gill Sans;\n}\n\n.what {\n  width: 30px;\n  height: 30px;\n  font-family: Gill Sans;\n}\n\n.Web {\n  width: 30px;\n  height: 30px;\n  color: #f7f7f8;\n  font-family: Gill Sans;\n}\n\n.call {\n  width: 30px;\n  height: 30px;\n  color: white;\n}\n\n.text {\n  font-size: small;\n  font-family: Gill Sans;\n}\n\n.title_desc {\n  font-family: Arial;\n  font-size: 23px !important;\n  font-family: cursive;\n}\n\n.descripcion {\n  font-family: Arial;\n  font-size: 17px !important;\n}\n\n.portada {\n  width: 500px !important;\n  height: 300px !important;\n}\n\n.size {\n  width: 25px;\n  height: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGV0YWxsZS1tb251bWVudG9zL0M6XFxJT05JQzVcXFZpdmVUdWxjYW5cXFZpdmVUdWxjYW4vc3JjXFxhcHBcXHBhZ2VzXFxkZXRhbGxlLW1vbnVtZW50b3NcXGRldGFsbGUtbW9udW1lbnRvcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2RldGFsbGUtbW9udW1lbnRvcy9kZXRhbGxlLW1vbnVtZW50b3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUVBLHNCQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDQUo7O0FESUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQ0RKOztBRElBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFFQSxZQUFBO0FDRko7O0FESUE7RUFDSSxnQkFBQTtFQUVBLHNCQUFBO0FDRko7O0FESUE7RUFHSSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7QUNISjs7QURLQTtFQUdJLGtCQUFBO0VBQ0EsMEJBQUE7QUNKSjs7QURRQTtFQUNJLHVCQUFBO0VBQ0Esd0JBQUE7QUNMSjs7QURTQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDTkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kZXRhbGxlLW1vbnVtZW50b3MvZGV0YWxsZS1tb251bWVudG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYntcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBcclxuICAgIGZvbnQtZmFtaWx5OkdpbGwgU2FucztcclxufVxyXG5cclxuLndoYXR7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGZvbnQtZmFtaWx5OkdpbGwgU2FucztcclxuICAgICAgICBcclxufVxyXG5cclxuLldlYntcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgY29sb3I6IHJnYigyNDcsIDI0NywgMjQ4KTtcclxuICAgIGZvbnQtZmFtaWx5OkdpbGwgU2FucztcclxufVxyXG5cclxuLmNhbGx7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIFxyXG4gICAgY29sb3I6IHdoaXRlOyAgICBcclxufVxyXG4udGV4dHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAvLyBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtZmFtaWx5OkdpbGwgU2FucztcclxufVxyXG4udGl0bGVfZGVzY3tcclxuICAgIFxyXG4gICAgLy8gY29sb3I6ICMwMDA7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgICBmb250LXNpemU6MjNweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbn1cclxuLmRlc2NyaXBjaW9ue1xyXG4gICAgLy8gZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICAgIGZvbnQtc2l6ZToxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICAgIFxyXG59XHJcbi5wb3J0YWRhe1xyXG4gICAgd2lkdGg6IDUwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uc2l6ZXtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcbi8vIC5jYXJke1xyXG4gICAvLyAgd2lkdGg6IDYwMHB4O1xyXG4gICAvLyAgaGVpZ2h0OiA0MDBweDtcclxuICAgIFxyXG4gICAvLyAgbWFyZ2luLWxlZnQ6IDI3JTtcclxuICAgLy8gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIC8vIHNpemU6IDEyIDtcclxuICAgIC8vIHNpemU6IGxnIDUwJSA7XHJcbiAgICAvLyBzaXplOiBtZCA1MCUgO1xyXG4gICAgLy8gc2l6ZTogc20gNTAlIDtcclxuICAgIC8vIHNpemU6IHhzIDEyO1xyXG4vLyB9XHJcbiIsIi5mYiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogR2lsbCBTYW5zO1xufVxuXG4ud2hhdCB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBHaWxsIFNhbnM7XG59XG5cbi5XZWIge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogI2Y3ZjdmODtcbiAgZm9udC1mYW1pbHk6IEdpbGwgU2Fucztcbn1cblxuLmNhbGwge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50ZXh0IHtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgZm9udC1mYW1pbHk6IEdpbGwgU2Fucztcbn1cblxuLnRpdGxlX2Rlc2Mge1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIGZvbnQtc2l6ZTogMjNweCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbn1cblxuLmRlc2NyaXBjaW9uIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbn1cblxuLnBvcnRhZGEge1xuICB3aWR0aDogNTAwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xufVxuXG4uc2l6ZSB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/detalle-monumentos/detalle-monumentos.page.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/detalle-monumentos/detalle-monumentos.page.ts ***!
    \*********************************************************************/

  /*! exports provided: DetalleMonumentosPage */

  /***/
  function srcAppPagesDetalleMonumentosDetalleMonumentosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetalleMonumentosPage", function () {
      return DetalleMonumentosPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_establecimientos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/establecimientos.service */
    "./src/app/services/establecimientos.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");

    var DetalleMonumentosPage = /*#__PURE__*/function () {
      function DetalleMonumentosPage(monumentosServices, state, navegador) {
        _classCallCheck(this, DetalleMonumentosPage);

        this.monumentosServices = monumentosServices;
        this.state = state;
        this.navegador = navegador;
        this.oculto = 120;
      }

      _createClass(DetalleMonumentosPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.lista_M = JSON.parse(this.state.snapshot.params.datos);
        }
      }]);

      return DetalleMonumentosPage;
    }();

    DetalleMonumentosPage.ctorParameters = function () {
      return [{
        type: _services_establecimientos_service__WEBPACK_IMPORTED_MODULE_2__["EstablecimientosService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"]
      }];
    };

    DetalleMonumentosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-detalle-monumentos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./detalle-monumentos.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle-monumentos/detalle-monumentos.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./detalle-monumentos.page.scss */
      "./src/app/pages/detalle-monumentos/detalle-monumentos.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_establecimientos_service__WEBPACK_IMPORTED_MODULE_2__["EstablecimientosService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"]])], DetalleMonumentosPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-detalle-monumentos-detalle-monumentos-module-es5.js.map