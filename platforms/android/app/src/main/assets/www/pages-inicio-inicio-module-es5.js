function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inicio-inicio-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInicioInicioPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header  translucent>\r\n  <ion-toolbar color=\"header\" >\r\n     \r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button class=\"size\" menu=\"main-menu\"></ion-menu-button>\r\n      <ion-title slot=\"start\" class=\"ion-no-margin\" class=\"ion-no-border\" class=\"ion-no-padding\">Inicio</ion-title>\r\n      <div class=\"formHeader\" color=\"talkColor\">  \r\n        <div class=\"tituloTab\" align=\"center\"><ion-img  class=\"logo\"  src=\"/assets/header/logovivet.png\" ></ion-img></div>\r\n        </div>\r\n    </ion-buttons>\r\n    \r\n    \r\n      <!-- <ion-img  class=\"logo\" src=\"/assets/header/logotipo.png\" ></ion-img> -->\r\n      <ion-button slot=\"end\" color=\"header\" class=\"ion-no-border\" class=\"ion-no-margin\" class=\"ion-no-padding\" (click)=\"call911(911,'_system')\">\r\n        <ion-icon slot=\"icon-only\" class=\"call\"  src=\"/assets/header/telapp.svg\" ></ion-icon>\r\n      </ion-button>\r\n     \r\n      \r\n      <!-- <ion-icon  slot=\"end\" name=\"moon\"> </ion-icon> -->\r\n      <ion-toggle slot=\"end\"\r\n                      [ngModel]=\"darkMode\" \r\n                      (ionChange)=\"cambio()\"></ion-toggle>\r\n  </ion-toolbar>\r\n  \r\n  \r\n</ion-header>\r\n\r\n\r\n<ion-content fullscreen \r\n            class=\"ion-no-border\"\r\n             class=\"ion-no-margin\"\r\n             class=\"ion-no-padding\" \r\n             class=\"card-background-page\">\r\n\r\n<!-- <ion-list>\r\n  <ion-item>\r\n    <ion-icon slot=\"start\" name=\"moon\"> </ion-icon>\r\n    <ion-label>Modo Oscuro</ion-label>\r\n    <ion-toggle slot=\"end\"\r\n                [ngModel]=\"darkMode\" \r\n                (ionChange)=\"cambio()\"></ion-toggle>\r\n  </ion-item>\r\n</ion-list> -->\r\n\r\n             <ion-slides pager=\"true\" [options]=\"slideOpts\">\r\n              <ion-slide>\r\n                <ion-img src=\"/assets/banner/Cementerio.png\"></ion-img>\r\n              </ion-slide>\r\n            \r\n              <ion-slide>\r\n                <ion-img src=\"/assets/banner/Lagunasverdes.png\"></ion-img>\r\n              </ion-slide>\r\n\r\n              <ion-slide>\r\n                <ion-img src=\"/assets/banner/Obelisco.jpg\"></ion-img>\r\n              </ion-slide>\r\n            \r\n              <ion-slide>\r\n                <ion-img src=\"/assets/banner/Tulcan.png\"></ion-img>\r\n              </ion-slide>     \r\n              \r\n            </ion-slides>\r\n \r\n           <ion-item-divider>\r\n            \r\n           </ion-item-divider>\r\n  <ion-grid class=\"ion-no-padding\"\r\n            class=\"ion-no-border\">\r\n\r\n    <ion-row >\r\n\r\n      <ion-col *ngFor=\"let slide of slides \" [routerLink]=\"[slide.id]\" \r\n              size=\"12\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\" size-xs=\"12\">\r\n              <ion-card class=\"ion-no-border\"\r\n                        class=\"ion-no-padding\"\r\n                        class=\"ion-no-margin\" mode=\"ios\">\r\n                \r\n                <img  [src]=\"slide.img\">\r\n                <div class=\"card-title\" >{{slide.titulo}}</div>\r\n                <div class=\"card-subtitle\">{{slide.subt}}</div>\r\n                \r\n              </ion-card>\r\n\r\n      </ion-col>\r\n\r\n\r\n\r\n\r\n\r\n\r\n           <!--<ion-col size=\"12\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\" size-xs=\"12\">                                 \r\n                    <ion-card [routerLink]=\"['/alojamiento']\">               \r\n                      <img src=\"https://www.elgurudeviajes.com/wp-content/uploads/2017/04/cuarto.jpg\" />   \r\n                        <div class=\"card-title\">Alojamiento</div>\r\n                        <div class=\"card-subtitle\">41 Listings</div>\r\n                    </ion-card>\r\n           </ion-col>               \r\n\r\n           <ion-col size=\"12\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\" size-xs=\"12\" >\r\n                    <ion-card [routerLink]=\"['/alimentacion']\">\r\n                      <img src=\"https://cdni.rt.com/actualidad/public_images/2018.03/thumbnail/5abe177908f3d9112f8b4569.jpg\"/>\r\n                        <div class=\"card-title\">Alimentación</div>\r\n                        <div class=\"card-subtitle\">64 Listings</div>\r\n                    </ion-card>\r\n           </ion-col>\r\n           <ion-col size=\"12\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\" size-xs=\"12\">\r\n                    <ion-card [routerLink]=\"['/espar']\">\r\n                      <img src=\"https://media.metrolatam.com/2020/03/12/discotecassuspen-d601b0f4620be1ada0b6fa7e5bc77f38-800x400.jpg\"/>\r\n                        <div class=\"card-title\">Esparcimiento</div>\r\n                        <div class=\"card-subtitle\">72 Listings</div>\r\n                    </ion-card>\r\n           </ion-col>\r\n\r\n            <ion-col size=\"12\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\" size-xs=\"12\">\r\n                    <ion-card [routerLink]=\"['/turismo']\">\r\n                       <img src=\"https://chipviajero.com/wp-content/uploads/2018/10/Como-Llegar-Al-Santuario-De-Las-Lajas-En-Ipiales-Colombia-Chip-Viajero-7.jpg\"/>\r\n                        <div class=\"card-title\">Sitios Turísticos</div>\r\n                        <div class=\"card-subtitle\">28 Listings</div>\r\n                    </ion-card>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\" size-xs=\"12\">\r\n                    <ion-card [routerLink]=\"['/operadores']\">\r\n                       <img src=\"https://www.ceupe.com/images/easyblog_articles/1407/b2ap3_large_concepto-operador-turistico.jpg\"/>\r\n                        <div class=\"card-title\">Operadores Turísticos</div>\r\n                        <div class=\"card-subtitle\">28 Listings</div>\r\n                    </ion-card>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\" size-xs=\"12\">\r\n                     <ion-card [routerLink]=\"['/transporte']\">\r\n                       <img src=\"https://scontent.fuio17-1.fna.fbcdn.net/v/t1.0-9/s960x960/51496098_820931451576621_6614822047606374400_o.jpg?_nc_cat=111&_nc_sid=0be424&_nc_ohc=a1wnF2fhvGYAX_98ESb&_nc_ht=scontent.fuio17-1.fna&_nc_tp=7&oh=c18bf6ff759b7c32196d45b390397fdd&oe=5EBD0040\"/>\r\n                         <div class=\"card-title\">Trasporte</div>\r\n                         <div class=\"card-subtitle\">28 Listings</div>\r\n                     </ion-card>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\" size-xs=\"12\">\r\n                      <ion-card [routerLink]=\"['/bienvenida']\">\r\n                       <img src=\"https://www.eluniverso.com/sites/default/files/styles/powgallery_1280/public/fotos/2019/12/-_whatsapp_image_2019-10-15_at_12.12.13_pm_33098732.jpg?itok=8aPgcUbD\"/>\r\n                         <div class=\"card-title\">Sitios de interes</div>\r\n                         <div class=\"card-subtitle\">28 Listings</div>\r\n                      </ion-card>\r\n            </ion-col>-->\r\n \r\n     </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n  \r\n\r\n</ion-content >\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/pages/inicio/inicio-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/inicio/inicio-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: InicioPageRoutingModule */

  /***/
  function srcAppPagesInicioInicioRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioPageRoutingModule", function () {
      return InicioPageRoutingModule;
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


    var _inicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./inicio.page */
    "./src/app/pages/inicio/inicio.page.ts");

    var routes = [{
      path: '',
      component: _inicio_page__WEBPACK_IMPORTED_MODULE_3__["InicioPage"]
    }];

    var InicioPageRoutingModule = function InicioPageRoutingModule() {
      _classCallCheck(this, InicioPageRoutingModule);
    };

    InicioPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], InicioPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/inicio/inicio.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/inicio/inicio.module.ts ***!
    \***********************************************/

  /*! exports provided: InicioPageModule */

  /***/
  function srcAppPagesInicioInicioModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioPageModule", function () {
      return InicioPageModule;
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


    var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./inicio-routing.module */
    "./src/app/pages/inicio/inicio-routing.module.ts");
    /* harmony import */


    var _inicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./inicio.page */
    "./src/app/pages/inicio/inicio.page.ts");

    var InicioPageModule = function InicioPageModule() {
      _classCallCheck(this, InicioPageModule);
    };

    InicioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["InicioPageRoutingModule"]],
      declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_6__["InicioPage"]]
    })], InicioPageModule);
    /***/
  },

  /***/
  "./src/app/pages/inicio/inicio.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/inicio/inicio.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesInicioInicioPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".img1::after {\n  display: flex;\n  float: left;\n  position: absolute;\n  height: 300%;\n  width: 300%;\n}\n\nion-card {\n  height: 170px;\n}\n\n.card-background-page ion-card {\n  position: relative;\n  text-align: center;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));\n}\n\n.card-background-page img {\n  height: 100%;\n  position: relative;\n  max-height: 100%;\n  max-width: 100%;\n  min-height: 100%;\n  min-width: 100%;\n  width: 100%;\n}\n\n.card-background-page img {\n  opacity: 0.35;\n}\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: white;\n}\n\n.card-background-page .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n\n.logo {\n  width: 135px;\n  height: 85px;\n  margin-left: 10%;\n}\n\n.call {\n  width: 30px;\n  height: 30px;\n}\n\n.menu {\n  margin-right: 10%;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5pY2lvL0M6XFxJT05JQzVcXFZpdmVUdWxjYW5cXFZpdmVUdWxjYW4vc3JjXFxhcHBcXHBhZ2VzXFxpbmljaW9cXGluaWNpby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2luaWNpby9pbmljaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDZEY7O0FEbUJBO0VBQ0UsYUFBQTtBQ2hCRjs7QURzQkU7RUFDQSxrQkFBQTtFQUNFLGtCQUFBO0VBQ0EseUVBQUE7QUNuQko7O0FEc0JJO0VBRUUsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ3JCTjs7QUR5Qkk7RUFDRSxhQUFBO0FDdkJOOztBRDRCSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDMUJOOztBRDZCSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQzNCTjs7QURpQ0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDOUJGOztBRGtDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDL0JGOztBRG9DQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNqQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbmljaW8vaW5pY2lvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1jYXJkIHtcclxuLy8gICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4vLyAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBjZW50ZXI7XHJcbi8vICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxuLy8gICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwcztcclxuLy8gfVxyXG5cclxuLy8gLmltZyB7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBtYXJnaW46IDAgYXV0bztcclxuLy8gICBoZWlnaHQ6IDIwMHB4O1xyXG4vLyAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4vLyB9XHJcblxyXG4uaW1nMTo6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMzAwJTtcclxuICB3aWR0aDogMzAwJTtcclxuICBcclxufVxyXG5cclxuXHJcbmlvbi1jYXJkIHtcclxuICBoZWlnaHQ6IDE3MHB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi5jYXJkLWJhY2tncm91bmQtcGFnZSB7XHJcblxyXG4gIGlvbi1jYXJkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC44KSxyZ2JhKDAsMCwwLDAuOCkpO1xyXG4gIH1cclxuXHJcbiAgICBpbWd7XHJcbiAgICAgIFxyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBvcGFjaXR5OiAwLjM1O1xyXG4gICAgICBcclxuICB9XHJcbiAgICBcclxuICBcclxuICAgIC5jYXJkLXRpdGxlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDM2JTtcclxuICAgICAgZm9udC1zaXplOiAyLjBlbTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNhcmQtc3VidGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDEuMGVtO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNTIlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgICBcclxuICBcclxuICB9XHJcblxyXG4ubG9nb3tcclxuICB3aWR0aDogMTM1cHg7XHJcbiAgaGVpZ2h0OiA4NXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgXHJcbn1cclxuXHJcbi5jYWxse1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICAvLyBtYXJnaW4tbGVmdDogNTAlO1xyXG4gIC8vIG1hcmdpbi1yaWdodDogMCU7XHJcbn1cclxuXHJcbi5tZW51e1xyXG4gIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4vLyAuZm9ybUhlYWRlciB7XHJcbi8vICAgaGVpZ2h0OiA1MHB4O1xyXG4vLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTEsIDUxLCAxOTQpO1xyXG4vLyB3aWR0aDogMTAwJTtcclxuLy8gICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzU1NTtcclxuXHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4vLyB9XHJcblxyXG4vLyAubmF2QXJyb3cyIHtcclxuLy8gY29sb3I6IHdoaXRlO1xyXG4vLyAgIHdpZHRoOiAxMCU7XHJcbi8vICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC50aXR1bG9UYWIge1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gd2lkdGg6IDgwJTtcclxuLy8gcGFkZGluZy10b3A6IDE1cHg7XHJcblxyXG4vLyB9XHJcbi8vIC50aXR1bG9UYWIgYXtcclxuLy8gY29sb3I6I2ZmZjtcclxuLy8gdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbi8vIH0iLCIuaW1nMTo6YWZ0ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDMwMCU7XG4gIHdpZHRoOiAzMDAlO1xufVxuXG5pb24tY2FyZCB7XG4gIGhlaWdodDogMTcwcHg7XG59XG5cbi5jYXJkLWJhY2tncm91bmQtcGFnZSBpb24tY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjgpLCByZ2JhKDAsIDAsIDAsIDAuOCkpO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgaW1nIHtcbiAgb3BhY2l0eTogMC4zNTtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuY2FyZC10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNiU7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuY2FyZC1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTIlO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDEzNXB4O1xuICBoZWlnaHQ6IDg1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG5cbi5jYWxsIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLm1lbnUge1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/inicio/inicio.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/inicio/inicio.page.ts ***!
    \*********************************************/

  /*! exports provided: InicioPage */

  /***/
  function srcAppPagesInicioInicioPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioPage", function () {
      return InicioPage;
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
    /* harmony import */


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/ngx/index.js");

    var InicioPage = /*#__PURE__*/function () {
      function InicioPage(navCtrl, call) {
        _classCallCheck(this, InicioPage);

        this.navCtrl = navCtrl;
        this.call = call;
        this.darkMode = true;
        this.slideOpts = {
          initialSlide: 0,
          slidesPerView: 1,
          autoplay: true
        };
        this.slides = [{
          img: '/assets/inicio/Hoteles.png',
          img1: '/assets/inicio/2.png',
          titulo: 'Alojamiento',
          subt: '',
          id: '/alojamiento'
        }, {
          img: '/assets/inicio/Restaurantes.png',
          img1: '/assets/inicio/2.png',
          titulo: 'Alimentación',
          subt: '',
          id: '/alimentacion'
        }, {
          img: '/assets/inicio/turismo.jpg',
          img1: '/assets/inicio/2.png',
          titulo: 'Sitios Turísticos',
          subt: '',
          id: '/turismo'
        }, {
          img: '/assets/inicio/Operadores.png',
          img1: '/assets/inicio/2.png',
          titulo: 'Operadores Turísticos',
          subt: '',
          id: '/operadores'
        }, {
          img: '/assets/inicio/Esparcimiento.png',
          img1: '/assets/inicio/2.png',
          titulo: 'Esparcimiento',
          subt: '',
          id: '/espar'
        }, {
          img: '/assets/inicio/transporte.jpg',
          img1: '/assets/inicio/1.png',
          titulo: 'Transporte',
          subt: '',
          id: '/transporte'
        }, {
          img: '/assets/inicio/relevancia.png',
          img1: '/assets/inicio/2.png',
          titulo: 'Relevancia Histórica',
          subt: '',
          id: '/relevancia'
        }, {
          img: '/assets/inicio/OtrosServicios.png',
          img1: '/assets/inicio/2.png',
          titulo: 'Servicios Generales',
          subt: '',
          id: '/otros'
        }];
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        this.darkMode = prefersDark.matches;
      }

      _createClass(InicioPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "cambio",
        value: function cambio() {
          // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
          document.body.classList.toggle('dark');
        }
      }, {
        key: "dirigir",
        value: function dirigir(id) {
          this.navCtrl.navigateForward(id);
        }
      }, {
        key: "call911",
        value: function call911() {
          this.call.callNumber("911", true).then(function (res) {
            return console.log('Launched dialer!', res);
          })["catch"](function (err) {
            return console.log('Error launching dialer', err);
          });
        }
      }]);

      return InicioPage;
    }();

    InicioPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__["CallNumber"]
      }];
    };

    InicioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inicio',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./inicio.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./inicio.page.scss */
      "./src/app/pages/inicio/inicio.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__["CallNumber"]])], InicioPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-inicio-inicio-module-es5.js.map