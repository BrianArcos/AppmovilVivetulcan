function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-relevancia-relevancia-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/relevancia/relevancia.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/relevancia/relevancia.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRelevanciaRelevanciaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<app-header align=\"end\" titulo=\"Relevancia Histórica\"></app-header>\r\n\r\n\r\n\r\n<ion-content  class=\"card-background-page\">\r\n\r\n  <ion-item-divider ></ion-item-divider>\r\n  <ion-grid >\r\n\r\n    <ion-row >\r\n\r\n           <ion-col size=\"12\" size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size-xs=\"12\">                                 \r\n                    <ion-card size-lg=\"6\"  [routerLink]=\"['/monumentos']\">               \r\n                      <img src=\"https://firebasestorage.googleapis.com/v0/b/tulcan-be024.appspot.com/o/monumentos%2FLibertad.jpg?alt=media&token=bde6c44a-96ea-4b38-8f07-a5c3e7588741\" />   \r\n                        <div class=\"card-title\">Monumentos</div>\r\n                        <div class=\"card-subtitle\"> </div>\r\n                    </ion-card>\r\n           </ion-col>               \r\n\r\n           <ion-col size=\"12\" size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size-xs=\"12\" >\r\n                    <ion-card size-lg=\"6\" [routerLink]=\"['/iglesias']\">\r\n                      <img src=\"https://firebasestorage.googleapis.com/v0/b/tulcan-be024.appspot.com/o/OtrosServicios%2FPorIglesia-la-Catedral.jpg?alt=media&token=f5b262c5-3db2-4949-98c0-69e6318afb35\"/>\r\n                        <div class=\"card-title\">Iglesias</div>\r\n                        <div class=\"card-subtitle\"></div> \r\n                    </ion-card>\r\n           </ion-col>\r\n\r\n      </ion-row>\r\n  </ion-grid>\r\n  \r\n</ion-content>\r\n  ";
    /***/
  },

  /***/
  "./src/app/pages/relevancia/relevancia-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/relevancia/relevancia-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: RelevanciaPageRoutingModule */

  /***/
  function srcAppPagesRelevanciaRelevanciaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RelevanciaPageRoutingModule", function () {
      return RelevanciaPageRoutingModule;
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


    var _relevancia_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./relevancia.page */
    "./src/app/pages/relevancia/relevancia.page.ts");

    var routes = [{
      path: '',
      component: _relevancia_page__WEBPACK_IMPORTED_MODULE_3__["RelevanciaPage"]
    }];

    var RelevanciaPageRoutingModule = function RelevanciaPageRoutingModule() {
      _classCallCheck(this, RelevanciaPageRoutingModule);
    };

    RelevanciaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RelevanciaPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/relevancia/relevancia.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/relevancia/relevancia.module.ts ***!
    \*******************************************************/

  /*! exports provided: RelevanciaPageModule */

  /***/
  function srcAppPagesRelevanciaRelevanciaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RelevanciaPageModule", function () {
      return RelevanciaPageModule;
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


    var _relevancia_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./relevancia-routing.module */
    "./src/app/pages/relevancia/relevancia-routing.module.ts");
    /* harmony import */


    var _relevancia_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./relevancia.page */
    "./src/app/pages/relevancia/relevancia.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");

    var RelevanciaPageModule = function RelevanciaPageModule() {
      _classCallCheck(this, RelevanciaPageModule);
    };

    RelevanciaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _relevancia_routing_module__WEBPACK_IMPORTED_MODULE_5__["RelevanciaPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_relevancia_page__WEBPACK_IMPORTED_MODULE_6__["RelevanciaPage"]]
    })], RelevanciaPageModule);
    /***/
  },

  /***/
  "./src/app/pages/relevancia/relevancia.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/relevancia/relevancia.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRelevanciaRelevanciaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-background-page ion-card {\n  position: relative;\n  text-align: center;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));\n}\n.card-background-page img {\n  height: 100%;\n  max-height: 100%;\n  max-width: 100%;\n  min-height: 100%;\n  min-width: 100%;\n  width: 100%;\n}\n.card-background-page img {\n  opacity: 0.35;\n}\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2.5em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n.card-background-page .card-subtitle {\n  font-size: 1.5em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVsZXZhbmNpYS9DOlxcSU9OSUM1XFxWaXZlVHVsY2FuXFxWaXZlVHVsY2FuL3NyY1xcYXBwXFxwYWdlc1xccmVsZXZhbmNpYVxccmVsZXZhbmNpYS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3JlbGV2YW5jaWEvcmVsZXZhbmNpYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUVBQUE7QUNETjtBRElJO0VBRUUsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNITjtBRE9JO0VBQ0UsYUFBQTtBQ0xOO0FEVUk7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNSTjtBRFdJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ1ROIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVsZXZhbmNpYS9yZWxldmFuY2lhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWJhY2tncm91bmQtcGFnZSB7XHJcblxyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICBwb3NpdGlvbjpyZWxhdGl2ZTsgXHJcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuOCkscmdiYSgwLDAsMCwwLjgpKTtcclxuICAgIH1cclxuXHJcbiAgICBpbWd7XHJcbiAgICAgIFxyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgb3BhY2l0eTogMC4zNTtcclxuICAgICAgXHJcbiAgfVxyXG4gICAgXHJcbiAgXHJcbiAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAzNiU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA1MiU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIFxyXG4gIFxyXG4gIH0iLCIuY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgaW9uLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC44KSwgcmdiYSgwLCAwLCAwLCAwLjgpKTtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSBpbWcge1xuICBvcGFjaXR5OiAwLjM1O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5jYXJkLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM2JTtcbiAgZm9udC1zaXplOiAyLjVlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuY2FyZC1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MiU7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogI2ZmZjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/relevancia/relevancia.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/relevancia/relevancia.page.ts ***!
    \*****************************************************/

  /*! exports provided: RelevanciaPage */

  /***/
  function srcAppPagesRelevanciaRelevanciaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RelevanciaPage", function () {
      return RelevanciaPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RelevanciaPage = /*#__PURE__*/function () {
      function RelevanciaPage() {
        _classCallCheck(this, RelevanciaPage);
      }

      _createClass(RelevanciaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RelevanciaPage;
    }();

    RelevanciaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-relevancia',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./relevancia.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/relevancia/relevancia.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./relevancia.page.scss */
      "./src/app/pages/relevancia/relevancia.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], RelevanciaPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-relevancia-relevancia-module-es5.js.map