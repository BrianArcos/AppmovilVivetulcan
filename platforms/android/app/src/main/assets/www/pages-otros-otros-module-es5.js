function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-otros-otros-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/otros/otros.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/otros/otros.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOtrosOtrosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<app-header align=\"end\" titulo=\"Servicios Generales\"> </app-header>\r\n\r\n<ion-content >\r\n  \r\n  \r\n\r\n      <!-- <ion-col  class=\"col\" size=\"12\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\" size-xs=\"12\"\r\n              *ngFor=\"let listaotros of listaotros\"> -->\r\n         <!-- <ion-slides [options]=\"slideOpts\"> -->\r\n           <!-- <ion-slide  -->\r\n              \r\n              <ion-card *ngFor=\"let listaotros of listaotros\"(click)=\"irADetalle(listaotros)\">\r\n                <ion-item>\r\n                  <ion-avatar class=\"img\" slot=\"start\">\r\n                    <img  src={{listaotros.foto_portada}}>\r\n                  </ion-avatar>\r\n                  <ion-label>\r\n                    <h2>{{listaotros.nombre}}</h2>\r\n                    <p>{{listaotros.Direccion}}</p>\r\n                  </ion-label>\r\n                </ion-item>\r\n                \r\n\r\n              </ion-card>\r\n              \r\n    \r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/otros/otros-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/otros/otros-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: OtrosPageRoutingModule */

  /***/
  function srcAppPagesOtrosOtrosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OtrosPageRoutingModule", function () {
      return OtrosPageRoutingModule;
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


    var _otros_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./otros.page */
    "./src/app/pages/otros/otros.page.ts");

    var routes = [{
      path: '',
      component: _otros_page__WEBPACK_IMPORTED_MODULE_3__["OtrosPage"]
    }];

    var OtrosPageRoutingModule = function OtrosPageRoutingModule() {
      _classCallCheck(this, OtrosPageRoutingModule);
    };

    OtrosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OtrosPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/otros/otros.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/otros/otros.module.ts ***!
    \*********************************************/

  /*! exports provided: OtrosPageModule */

  /***/
  function srcAppPagesOtrosOtrosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OtrosPageModule", function () {
      return OtrosPageModule;
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


    var _otros_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./otros-routing.module */
    "./src/app/pages/otros/otros-routing.module.ts");
    /* harmony import */


    var _otros_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./otros.page */
    "./src/app/pages/otros/otros.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");

    var OtrosPageModule = function OtrosPageModule() {
      _classCallCheck(this, OtrosPageModule);
    };

    OtrosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _otros_routing_module__WEBPACK_IMPORTED_MODULE_5__["OtrosPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_otros_page__WEBPACK_IMPORTED_MODULE_6__["OtrosPage"]]
    })], OtrosPageModule);
    /***/
  },

  /***/
  "./src/app/pages/otros/otros.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/otros/otros.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOtrosOtrosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".img {\n  width: 90px;\n  height: 90px;\n}\n\n.col-10, .col-13 {\n  display: flex;\n}\n\n.card {\n  widows: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.title {\n  text-align: center;\n  font-family: Arial;\n  font-size: 23px !important;\n}\n\n.precio {\n  text-align: center;\n  font-size: medium;\n}\n\n.horario {\n  text-align: right;\n  font-size: 19px !important;\n}\n\n.direccion {\n  font-size: 14px !important;\n}\n\n.icon_p {\n  color: forestgreen;\n  font-size: 19px !important;\n}\n\n.icon_h {\n  color: #f1bd13;\n  font-size: 19px !important;\n}\n\n.icon_d {\n  color: #f80808;\n  font-size: 19px !important;\n}\n\n.btn {\n  background: #eb94d0;\n  background-image: linear-gradient(to bottom, #eb94d0, #2079b0);\n  border-radius: 50px;\n  text-shadow: 3px 2px 1px #9daef5;\n  box-shadow: 6px 5px 24px #666666;\n  font-family: Arial;\n  color: #fafafa;\n  font-size: 18px;\n  padding: 1px;\n  text-decoration: none;\n  text-align: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3Ryb3MvQzpcXElPTklDNVxcVml2ZVR1bGNhblxcVml2ZVR1bGNhbi9zcmNcXGFwcFxccGFnZXNcXG90cm9zXFxvdHJvcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL290cm9zL290cm9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEY0E7RUFJSSxhQUFBO0FDWEo7O0FEYUU7RUFDRSxZQUFBO0VBSUEsYUFBQTtFQUtRLHNCQUFBO0FDVlo7O0FEYUU7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUNWTjs7QURZRTtFQUNFLGtCQUFBO0VBRUksaUJBQUE7QUNWUjs7QURhRTtFQUNNLGlCQUFBO0VBQ0EsMEJBQUE7QUNWUjs7QURlQTtFQUNJLDBCQUFBO0FDWko7O0FEaUJBO0VBQ0ksa0JBQUE7RUFDQSwwQkFBQTtBQ2RKOztBRGlCQTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtBQ2RKOztBRGlCQTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtBQ2RKOztBRGdCQTtFQUNJLG1CQUFBO0VBTUYsOERBQUE7RUFLQSxtQkFBQTtFQUNGLGdDQUFBO0VBR0UsZ0NBQUE7RUFDRixrQkFBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBRUEsNkJBQUE7QUNqQkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vdHJvcy9vdHJvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1ne1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbn1cclxuXHJcbi8vICAuaW9uLWNhcntcclxuLy8gICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuLy8gICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4vLyAgICAgIHdpZHRoOiA0MDBweDtcclxuLy8gIH1cclxuXHJcblxyXG4vLyAuaW1ne1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4vLyB9XHJcblxyXG4uY29sLTEwLCAuY29sLTEzIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICAuY2FyZCB7XHJcbiAgICB3aWRvd3M6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC50aXRsZXtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgICAgIGZvbnQtc2l6ZToyM3B4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5wcmVjaW97XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgICAgIC8vIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgfVxyXG4gIC5ob3Jhcmlve1xyXG4gICAgICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbiAgICAgICAgZm9udC1zaXplOjE5cHggIWltcG9ydGFudDtcclxuICAgICAgICAvLyBjb2xvcjogcmdiKDAsIDcsIDIpO1xyXG4gICAgICAgIFxyXG4gICAgXHJcbn1cclxuLmRpcmVjY2lvbntcclxuICAgIGZvbnQtc2l6ZToxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLy8gY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgICAgICBcclxufVxyXG5cclxuLmljb25fcHtcclxuICAgIGNvbG9yOiBmb3Jlc3RncmVlbjtcclxuICAgIGZvbnQtc2l6ZTogMTlweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaWNvbl9oe1xyXG4gICAgY29sb3I6IHJnYigyNDEsIDE4OSwgMTkpO1xyXG4gICAgZm9udC1zaXplOiAxOXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pY29uX2R7XHJcbiAgICBjb2xvcjogcmdiKDI0OCwgOCwgOCk7XHJcbiAgICBmb250LXNpemU6IDE5cHggIWltcG9ydGFudDtcclxufVxyXG4uYnRue1xyXG4gICAgYmFja2dyb3VuZDogI2ViOTRkMDtcclxuICAgIC8vZGVncmFkYWRvc1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZWI5NGQwLCAjMjA3OWIwKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNlYjk0ZDAsICMyMDc5YjApO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAjZWI5NGQwLCAjMjA3OWIwKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAjZWI5NGQwLCAjMjA3OWIwKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZWI5NGQwLCAjMjA3OWIwKTtcclxuXHJcbiAgLy9kYXIgYm9yZGVcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwO1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTA7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxudGV4dC1zaGFkb3c6IDNweCAycHggMXB4ICM5ZGFlZjU7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiA2cHggNXB4IDI0cHggIzY2NjY2NjtcclxuICAtbW96LWJveC1zaGFkb3c6IDZweCA1cHggMjRweCAjNjY2NjY2O1xyXG4gIGJveC1zaGFkb3c6IDZweCA1cHggMjRweCAjNjY2NjY2O1xyXG5mb250LWZhbWlseTogQXJpYWw7XHJcbiAgY29sb3I6ICNmYWZhZmE7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHBhZGRpbmc6IDFweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbn1cclxuXHJcbiIsIi5pbWcge1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xufVxuXG4uY29sLTEwLCAuY29sLTEzIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jYXJkIHtcbiAgd2lkb3dzOiAxMDAlO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBmb250LXNpemU6IDIzcHggIWltcG9ydGFudDtcbn1cblxuLnByZWNpbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiBtZWRpdW07XG59XG5cbi5ob3JhcmlvIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTlweCAhaW1wb3J0YW50O1xufVxuXG4uZGlyZWNjaW9uIHtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pY29uX3Age1xuICBjb2xvcjogZm9yZXN0Z3JlZW47XG4gIGZvbnQtc2l6ZTogMTlweCAhaW1wb3J0YW50O1xufVxuXG4uaWNvbl9oIHtcbiAgY29sb3I6ICNmMWJkMTM7XG4gIGZvbnQtc2l6ZTogMTlweCAhaW1wb3J0YW50O1xufVxuXG4uaWNvbl9kIHtcbiAgY29sb3I6ICNmODA4MDg7XG4gIGZvbnQtc2l6ZTogMTlweCAhaW1wb3J0YW50O1xufVxuXG4uYnRuIHtcbiAgYmFja2dyb3VuZDogI2ViOTRkMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZWI5NGQwLCAjMjA3OWIwKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjZWI5NGQwLCAjMjA3OWIwKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsICNlYjk0ZDAsICMyMDc5YjApO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAjZWI5NGQwLCAjMjA3OWIwKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ViOTRkMCwgIzIwNzliMCk7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTA7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTA7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHRleHQtc2hhZG93OiAzcHggMnB4IDFweCAjOWRhZWY1O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDZweCA1cHggMjRweCAjNjY2NjY2O1xuICAtbW96LWJveC1zaGFkb3c6IDZweCA1cHggMjRweCAjNjY2NjY2O1xuICBib3gtc2hhZG93OiA2cHggNXB4IDI0cHggIzY2NjY2NjtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBjb2xvcjogI2ZhZmFmYTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiAxcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/otros/otros.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/otros/otros.page.ts ***!
    \*******************************************/

  /*! exports provided: OtrosPage */

  /***/
  function srcAppPagesOtrosOtrosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OtrosPage", function () {
      return OtrosPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var OtrosPage = /*#__PURE__*/function () {
      function OtrosPage(otrosservices, modalCtrl, route) {
        _classCallCheck(this, OtrosPage);

        this.otrosservices = otrosservices;
        this.modalCtrl = modalCtrl;
        this.route = route;
        this.listaotros = [];
      }

      _createClass(OtrosPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.otrosservices.getotros().subscribe(function (resp) {
            _this.listaotros = resp;
          });
        }
      }, {
        key: "irADetalle",
        value: function irADetalle(listaotros) {
          this.route.navigate(['detalleotros', {
            datos: JSON.stringify(listaotros)
          }]);
        }
      }]);

      return OtrosPage;
    }();

    OtrosPage.ctorParameters = function () {
      return [{
        type: _services_establecimientos_service__WEBPACK_IMPORTED_MODULE_2__["EstablecimientosService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    OtrosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-otros',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./otros.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/otros/otros.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./otros.page.scss */
      "./src/app/pages/otros/otros.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_establecimientos_service__WEBPACK_IMPORTED_MODULE_2__["EstablecimientosService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], OtrosPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-otros-otros-module-es5.js.map