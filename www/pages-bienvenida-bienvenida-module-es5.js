function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-bienvenida-bienvenida-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bienvenida/bienvenida.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bienvenida/bienvenida.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesBienvenidaBienvenidaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<ion-content>\r\n\r\n  <ion-slides pager=\"true\" class=\"slideOpts\">\r\n    \r\n      <ion-slide *ngFor=\"let slide of slides\">\r\n\r\n        <ion-card mode=\"ios\">\r\n          <img [src]=\"slide.img\">\r\n\r\n          <ion-card-header>\r\n            <ion-card-title>{{slide.titulo}}</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n             {{slide.desc}}\r\n          </ion-card-content>\r\n\r\n\r\n        </ion-card>\r\n      </ion-slide>  \r\n\r\n          <ion-slide>\r\n            <ion-button expand=\"full\"\r\n                        color=\"primary\"\r\n                        fill=\"clear\"\r\n                        (click)=\"onClick ()\">\r\n\r\n                        Continuar!!\r\n\r\n            </ion-button>\r\n          </ion-slide>\r\n      \r\n  </ion-slides>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/bienvenida/bienvenida-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/bienvenida/bienvenida-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: BienvenidaPageRoutingModule */

  /***/
  function srcAppPagesBienvenidaBienvenidaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BienvenidaPageRoutingModule", function () {
      return BienvenidaPageRoutingModule;
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


    var _bienvenida_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bienvenida.page */
    "./src/app/pages/bienvenida/bienvenida.page.ts");

    var routes = [{
      path: '',
      component: _bienvenida_page__WEBPACK_IMPORTED_MODULE_3__["BienvenidaPage"]
    }];

    var BienvenidaPageRoutingModule = function BienvenidaPageRoutingModule() {
      _classCallCheck(this, BienvenidaPageRoutingModule);
    };

    BienvenidaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BienvenidaPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/bienvenida/bienvenida.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/bienvenida/bienvenida.module.ts ***!
    \*******************************************************/

  /*! exports provided: BienvenidaPageModule */

  /***/
  function srcAppPagesBienvenidaBienvenidaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BienvenidaPageModule", function () {
      return BienvenidaPageModule;
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


    var _bienvenida_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./bienvenida-routing.module */
    "./src/app/pages/bienvenida/bienvenida-routing.module.ts");
    /* harmony import */


    var _bienvenida_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./bienvenida.page */
    "./src/app/pages/bienvenida/bienvenida.page.ts");

    var BienvenidaPageModule = function BienvenidaPageModule() {
      _classCallCheck(this, BienvenidaPageModule);
    };

    BienvenidaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _bienvenida_routing_module__WEBPACK_IMPORTED_MODULE_5__["BienvenidaPageRoutingModule"]],
      declarations: [_bienvenida_page__WEBPACK_IMPORTED_MODULE_6__["BienvenidaPage"]]
    })], BienvenidaPageModule);
    /***/
  },

  /***/
  "./src/app/pages/bienvenida/bienvenida.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/bienvenida/bienvenida.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesBienvenidaBienvenidaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-slides {\n  height: 100% !important;\n}\n\nion-card {\n  overflow: unset !important;\n}\n\nion-card {\n  height: 200px;\n  width: 300px;\n}\n\n.slide-image {\n  width: 200px;\n  text-align: center;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  top: -50px;\n}\n\nion-card-header {\n  position: relative;\n  top: -50px;\n}\n\nion-card-content {\n  position: relative;\n  top: -50px;\n}\n\n.avatar {\n  width: 50px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmllbnZlbmlkYS9DOlxcSU9OSUM1XFxWaXZlVHVsY2FuXFxWaXZlVHVsY2FuL3NyY1xcYXBwXFxwYWdlc1xcYmllbnZlbmlkYVxcYmllbnZlbmlkYS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2JpZW52ZW5pZGEvYmllbnZlbmlkYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtBQ0RKOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FDREo7O0FESUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUNESjs7QURJQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYmllbnZlbmlkYS9iaWVudmVuaWRhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXMge1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIG92ZXJmbG93OiB1bnNldCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG59ICAgXHJcblxyXG4uc2xpZGUtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtNTBweDtcclxufVxyXG5cclxuaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTUwcHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtNTBweDtcclxufVxyXG5cclxuLmF2YXRhciB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn0iLCJpb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkIHtcbiAgb3ZlcmZsb3c6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4uc2xpZGUtaW1hZ2Uge1xuICB3aWR0aDogMjAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNTBweDtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC01MHB4O1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC01MHB4O1xufVxuXG4uYXZhdGFyIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/bienvenida/bienvenida.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/bienvenida/bienvenida.page.ts ***!
    \*****************************************************/

  /*! exports provided: BienvenidaPage */

  /***/
  function srcAppPagesBienvenidaBienvenidaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BienvenidaPage", function () {
      return BienvenidaPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var BienvenidaPage = /*#__PURE__*/function () {
      function BienvenidaPage(navCtrl) {
        _classCallCheck(this, BienvenidaPage);

        this.navCtrl = navCtrl;
        this.slides = [{
          img: '/assets/slides/photos.svg',
          titulo: 'Comparte Fotos',
          desc: 'Mira y comparte increíbles fotos de todo el mundo'
        }, {
          img: '/assets/slides/music-player-2.svg',
          titulo: 'Escucha Música',
          desc: 'Toda tu música favorita está aquí'
        }, {
          img: '/assets/slides/calendar.svg',
          titulo: 'Nunca olvides nada',
          desc: 'El mejor calendario del mundo a tu disposición'
        }, {
          img: '/assets/slides/placeholder-1.svg',
          titulo: 'Tu ubicación',
          desc: 'Siempre sabremos donde estás!'
        }];
      }

      _createClass(BienvenidaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClick",
        value: function onClick() {
          this.navCtrl.navigateBack('inicio');
        }
      }]);

      return BienvenidaPage;
    }();

    BienvenidaPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    BienvenidaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bienvenida',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bienvenida.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bienvenida/bienvenida.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bienvenida.page.scss */
      "./src/app/pages/bienvenida/bienvenida.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], BienvenidaPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-bienvenida-bienvenida-module-es5.js.map