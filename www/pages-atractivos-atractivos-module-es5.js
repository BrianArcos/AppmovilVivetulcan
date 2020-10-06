function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-atractivos-atractivos-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/atractivos/atractivos.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/atractivos/atractivos.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAtractivosAtractivosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "    \r\n<app-header align=\"end\" titulo=\"Atractivos Turísticos\"> </app-header>\r\n\r\n<ion-content >\r\n   \r\n  <ion-grid fixed >\r\n    <ion-row >\r\n\r\n      <ion-col size=\"12\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\" size-xs=\"12\"\r\n              *ngFor=\"let lista_A of lista_A\">\r\n         <!-- <ion-slides [options]=\"slideOpts\"> -->\r\n           <!-- <ion-slide  -->\r\n                      \r\n\r\n              <ion-card (click)=\"irADetalle(lista_A)\">\r\n                <img class=\"img\" src={{lista_A.foto_portada}}>    \r\n                <!-- <img [src]=\"listahoteles.foto_portada | imagen\"> -->\r\n                <ion-card-header  class=\"ion-no-padding\">      \r\n                  <hr><ion-card-title class=\"title\">  {{lista_A.nombre}}</ion-card-title>\r\n                </ion-card-header>\r\n                   <ion-segment>\r\n                     <ion-segment>\r\n                        \r\n                        <ion-icon color=\"email\" class=\"icon_h\" name=\"alarm\"></ion-icon>\r\n                        <ion-label class=\"horario\"> {{lista_A.horario}}</ion-label> \r\n                       \r\n                     </ion-segment>\r\n                     <ion-segment >\r\n                       \r\n                        <ion-icon color=\"call\" class=\"icon_p\" name=\"logo-usd\"></ion-icon>\r\n                        <ion-label class=\"precio\"> {{lista_A.rango_precio}}</ion-label> \r\n                       \r\n                     </ion-segment>\r\n                   </ion-segment>\r\n\r\n                  <ion-card-subtitle > \r\n                    <ion-icon class=\"icon_d\" name=\"pin\"></ion-icon>\r\n                  <ion-label class=\"direccion\">{{lista_A.direccion}}</ion-label> \r\n                </ion-card-subtitle>\r\n\r\n                <ion-item>\r\n                  <ion-button color=\"header\"> Saber Más</ion-button>\r\n                </ion-item>\r\n              </ion-card>\r\n           <!-- </ion-slide> -->\r\n          <!-- </ion-slides> -->\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/atractivos/atractivos-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/atractivos/atractivos-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: AtractivosPageRoutingModule */

  /***/
  function srcAppPagesAtractivosAtractivosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AtractivosPageRoutingModule", function () {
      return AtractivosPageRoutingModule;
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


    var _atractivos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./atractivos.page */
    "./src/app/pages/atractivos/atractivos.page.ts");

    var routes = [{
      path: '',
      component: _atractivos_page__WEBPACK_IMPORTED_MODULE_3__["AtractivosPage"]
    }];

    var AtractivosPageRoutingModule = function AtractivosPageRoutingModule() {
      _classCallCheck(this, AtractivosPageRoutingModule);
    };

    AtractivosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AtractivosPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/atractivos/atractivos.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/atractivos/atractivos.module.ts ***!
    \*******************************************************/

  /*! exports provided: AtractivosPageModule */

  /***/
  function srcAppPagesAtractivosAtractivosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AtractivosPageModule", function () {
      return AtractivosPageModule;
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


    var _atractivos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./atractivos-routing.module */
    "./src/app/pages/atractivos/atractivos-routing.module.ts");
    /* harmony import */


    var _atractivos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./atractivos.page */
    "./src/app/pages/atractivos/atractivos.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");

    var AtractivosPageModule = function AtractivosPageModule() {
      _classCallCheck(this, AtractivosPageModule);
    };

    AtractivosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _atractivos_routing_module__WEBPACK_IMPORTED_MODULE_5__["AtractivosPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_atractivos_page__WEBPACK_IMPORTED_MODULE_6__["AtractivosPage"]]
    })], AtractivosPageModule);
    /***/
  },

  /***/
  "./src/app/pages/atractivos/atractivos.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/atractivos/atractivos.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAtractivosAtractivosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".img {\n  width: 100%;\n  height: 200px;\n}\n\n.col-10, .col-13 {\n  display: flex;\n}\n\n.card {\n  widows: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.title {\n  text-align: center;\n  font-family: Arial;\n  font-size: 19px !important;\n}\n\n.precio {\n  text-align: center;\n  font-size: medium;\n}\n\n.horario {\n  text-align: right;\n  font-size: 15px !important;\n}\n\n.direccion {\n  font-size: 14px !important;\n}\n\n.icon_p {\n  color: forestgreen;\n  font-size: 19px !important;\n}\n\n.icon_h {\n  color: #f1bd13;\n  font-size: 19px !important;\n}\n\n.icon_d {\n  color: #f80808;\n  font-size: 19px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXRyYWN0aXZvcy9DOlxcSU9OSUM1XFxWaXZlVHVsY2FuXFxWaXZlVHVsY2FuL3NyY1xcYXBwXFxwYWdlc1xcYXRyYWN0aXZvc1xcYXRyYWN0aXZvcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2F0cmFjdGl2b3MvYXRyYWN0aXZvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBSUksYUFBQTtBQ0NKOztBRENFO0VBQ0UsWUFBQTtFQUlBLGFBQUE7RUFLUSxzQkFBQTtBQ0VaOztBRENFO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FDRU47O0FEQUU7RUFDRSxrQkFBQTtFQUVJLGlCQUFBO0FDRVI7O0FEQ0U7RUFDTSxpQkFBQTtFQUNBLDBCQUFBO0FDRVI7O0FER0E7RUFDSSwwQkFBQTtBQ0FKOztBREtBO0VBQ0ksa0JBQUE7RUFDQSwwQkFBQTtBQ0ZKOztBREtBO0VBQ0ksY0FBQTtFQUNBLDBCQUFBO0FDRko7O0FES0E7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F0cmFjdGl2b3MvYXRyYWN0aXZvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4uY29sLTEwLCAuY29sLTEzIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICAuY2FyZCB7XHJcbiAgICB3aWRvd3M6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC50aXRsZXtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgICAgIGZvbnQtc2l6ZToxOXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5wcmVjaW97XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgICAgIC8vIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgfVxyXG4gIC5ob3Jhcmlve1xyXG4gICAgICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbiAgICAgICAgZm9udC1zaXplOjE1cHggIWltcG9ydGFudDtcclxuICAgICAgICAvLyBjb2xvcjogcmdiKDAsIDcsIDIpO1xyXG4gICAgICAgIFxyXG4gICAgXHJcbn1cclxuLmRpcmVjY2lvbntcclxuICAgIGZvbnQtc2l6ZToxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLy8gY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgICAgICBcclxufVxyXG5cclxuLmljb25fcHtcclxuICAgIGNvbG9yOiBmb3Jlc3RncmVlbjtcclxuICAgIGZvbnQtc2l6ZTogMTlweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaWNvbl9oe1xyXG4gICAgY29sb3I6IHJnYigyNDEsIDE4OSwgMTkpO1xyXG4gICAgZm9udC1zaXplOiAxOXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pY29uX2R7XHJcbiAgICBjb2xvcjogcmdiKDI0OCwgOCwgOCk7XHJcbiAgICBmb250LXNpemU6IDE5cHggIWltcG9ydGFudDtcclxufSIsIi5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmNvbC0xMCwgLmNvbC0xMyB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY2FyZCB7XG4gIHdpZG93czogMTAwJTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgZm9udC1zaXplOiAxOXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wcmVjaW8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xufVxuXG4uaG9yYXJpbyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLmRpcmVjY2lvbiB7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xufVxuXG4uaWNvbl9wIHtcbiAgY29sb3I6IGZvcmVzdGdyZWVuO1xuICBmb250LXNpemU6IDE5cHggIWltcG9ydGFudDtcbn1cblxuLmljb25faCB7XG4gIGNvbG9yOiAjZjFiZDEzO1xuICBmb250LXNpemU6IDE5cHggIWltcG9ydGFudDtcbn1cblxuLmljb25fZCB7XG4gIGNvbG9yOiAjZjgwODA4O1xuICBmb250LXNpemU6IDE5cHggIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/atractivos/atractivos.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/atractivos/atractivos.page.ts ***!
    \*****************************************************/

  /*! exports provided: AtractivosPage */

  /***/
  function srcAppPagesAtractivosAtractivosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AtractivosPage", function () {
      return AtractivosPage;
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


    var _services_establecimientos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/establecimientos.service */
    "./src/app/services/establecimientos.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var AtractivosPage = /*#__PURE__*/function () {
      function AtractivosPage(atractivService, modalCtrl, route) {
        _classCallCheck(this, AtractivosPage);

        this.atractivService = atractivService;
        this.modalCtrl = modalCtrl;
        this.route = route;
      }

      _createClass(AtractivosPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.atractivService.getatractivos().subscribe(function (resp) {
            // console.log('Resp',resp );
            _this.lista_A = resp;
          });
        }
      }, {
        key: "irADetalle",
        value: function irADetalle(listado) {
          this.route.navigate(['detalle-atractivo', {
            datos: JSON.stringify(listado)
          }]);
        }
      }]);

      return AtractivosPage;
    }();

    AtractivosPage.ctorParameters = function () {
      return [{
        type: _services_establecimientos_service__WEBPACK_IMPORTED_MODULE_3__["EstablecimientosService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AtractivosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-atractivos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./atractivos.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/atractivos/atractivos.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./atractivos.page.scss */
      "./src/app/pages/atractivos/atractivos.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_establecimientos_service__WEBPACK_IMPORTED_MODULE_3__["EstablecimientosService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AtractivosPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-atractivos-atractivos-module-es5.js.map