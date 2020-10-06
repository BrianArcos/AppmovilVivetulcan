(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inicio-inicio-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header  translucent>\r\n  <ion-toolbar color=\"header\" >\r\n     \r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button class=\"size\" menu=\"main-menu\"></ion-menu-button>\r\n      <ion-title slot=\"start\" class=\"ion-no-margin\" class=\"ion-no-border\" class=\"ion-no-padding\">Inicio</ion-title>\r\n      <div class=\"formHeader\" color=\"talkColor\">  \r\n        <div class=\"tituloTab\" align=\"center\"><ion-img  class=\"logo\" src=\"/assets/header/logovivet.png\" ></ion-img></div>\r\n        </div>\r\n    </ion-buttons>\r\n    \r\n    \r\n      <!-- <ion-img  class=\"logo\" src=\"/assets/header/logotipo.png\" ></ion-img> -->\r\n       \r\n      <ion-img class=\"size\" class=\"call\" src=\"/assets/header/telapp.svg\"></ion-img>\r\n      <!-- <ion-icon  slot=\"end\" name=\"moon\"> </ion-icon> -->\r\n      <ion-toggle slot=\"end\"\r\n                      [ngModel]=\"darkMode\" \r\n                      (ionChange)=\"cambio()\"></ion-toggle>\r\n  </ion-toolbar>\r\n  \r\n  \r\n</ion-header>\r\n\r\n\r\n<ion-content fullscreen \r\n            class=\"ion-no-border\"\r\n             class=\"ion-no-margin\"\r\n             class=\"ion-no-padding\" \r\n             class=\"card-background-page\">\r\n\r\n<!-- <ion-list>\r\n  <ion-item>\r\n    <ion-icon slot=\"start\" name=\"moon\"> </ion-icon>\r\n    <ion-label>Modo Oscuro</ion-label>\r\n    <ion-toggle slot=\"end\"\r\n                [ngModel]=\"darkMode\" \r\n                (ionChange)=\"cambio()\"></ion-toggle>\r\n  </ion-item>\r\n</ion-list> -->\r\n\r\n             <ion-slides pager=\"true\" [options]=\"slideOpts\">\r\n              <ion-slide>\r\n                <ion-img src=\"/assets/banner/Cementerio.png\"></ion-img>\r\n              </ion-slide>\r\n            \r\n              <ion-slide>\r\n                <ion-img src=\"/assets/banner/Lagunasverdes.png\"></ion-img>\r\n              </ion-slide>\r\n\r\n              <ion-slide>\r\n                <ion-img src=\"/assets/banner/Obelisco.jpg\"></ion-img>\r\n              </ion-slide>\r\n            \r\n              <ion-slide>\r\n                <ion-img src=\"/assets/banner/Tulcan.png\"></ion-img>\r\n              </ion-slide>\r\n            \r\n              \r\n            </ion-slides>\r\n \r\n           <ion-item-divider>\r\n            \r\n           </ion-item-divider>\r\n  <ion-grid class=\"ion-no-padding\"\r\n            class=\"ion-no-border\">\r\n\r\n    <ion-row >\r\n\r\n      <ion-col *ngFor=\"let slide of slides \" [routerLink]=\"[slide.id]\" \r\n              size=\"12\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\" size-xs=\"12\">\r\n              <ion-card class=\"ion-no-border\"\r\n                        class=\"ion-no-padding\"\r\n                        class=\"ion-no-margin\" mode=\"ios\">\r\n                \r\n                <img  [src]=\"slide.img\">\r\n                <div class=\"card-title\" >{{slide.titulo}}</div>\r\n                <div class=\"card-subtitle\">{{slide.subt}}</div>\r\n                \r\n              </ion-card>\r\n\r\n      </ion-col>\r\n\r\n\r\n\r\n\r\n\r\n\r\n           <!--<ion-col size=\"12\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\" size-xs=\"12\">                                 \r\n                    <ion-card [routerLink]=\"['/alojamiento']\">               \r\n                      <img src=\"https://www.elgurudeviajes.com/wp-content/uploads/2017/04/cuarto.jpg\" />   \r\n                        <div class=\"card-title\">Alojamiento</div>\r\n                        <div class=\"card-subtitle\">41 Listings</div>\r\n                    </ion-card>\r\n           </ion-col>               \r\n\r\n           <ion-col size=\"12\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\" size-xs=\"12\" >\r\n                    <ion-card [routerLink]=\"['/alimentacion']\">\r\n                      <img src=\"https://cdni.rt.com/actualidad/public_images/2018.03/thumbnail/5abe177908f3d9112f8b4569.jpg\"/>\r\n                        <div class=\"card-title\">Alimentación</div>\r\n                        <div class=\"card-subtitle\">64 Listings</div>\r\n                    </ion-card>\r\n           </ion-col>\r\n           <ion-col size=\"12\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\" size-xs=\"12\">\r\n                    <ion-card [routerLink]=\"['/espar']\">\r\n                      <img src=\"https://media.metrolatam.com/2020/03/12/discotecassuspen-d601b0f4620be1ada0b6fa7e5bc77f38-800x400.jpg\"/>\r\n                        <div class=\"card-title\">Esparcimiento</div>\r\n                        <div class=\"card-subtitle\">72 Listings</div>\r\n                    </ion-card>\r\n           </ion-col>\r\n\r\n            <ion-col size=\"12\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\" size-xs=\"12\">\r\n                    <ion-card [routerLink]=\"['/turismo']\">\r\n                       <img src=\"https://chipviajero.com/wp-content/uploads/2018/10/Como-Llegar-Al-Santuario-De-Las-Lajas-En-Ipiales-Colombia-Chip-Viajero-7.jpg\"/>\r\n                        <div class=\"card-title\">Sitios Turísticos</div>\r\n                        <div class=\"card-subtitle\">28 Listings</div>\r\n                    </ion-card>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\" size-xs=\"12\">\r\n                    <ion-card [routerLink]=\"['/operadores']\">\r\n                       <img src=\"https://www.ceupe.com/images/easyblog_articles/1407/b2ap3_large_concepto-operador-turistico.jpg\"/>\r\n                        <div class=\"card-title\">Operadores Turísticos</div>\r\n                        <div class=\"card-subtitle\">28 Listings</div>\r\n                    </ion-card>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\" size-xs=\"12\">\r\n                     <ion-card [routerLink]=\"['/transporte']\">\r\n                       <img src=\"https://scontent.fuio17-1.fna.fbcdn.net/v/t1.0-9/s960x960/51496098_820931451576621_6614822047606374400_o.jpg?_nc_cat=111&_nc_sid=0be424&_nc_ohc=a1wnF2fhvGYAX_98ESb&_nc_ht=scontent.fuio17-1.fna&_nc_tp=7&oh=c18bf6ff759b7c32196d45b390397fdd&oe=5EBD0040\"/>\r\n                         <div class=\"card-title\">Trasporte</div>\r\n                         <div class=\"card-subtitle\">28 Listings</div>\r\n                     </ion-card>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\" size-xs=\"12\">\r\n                      <ion-card [routerLink]=\"['/bienvenida']\">\r\n                       <img src=\"https://www.eluniverso.com/sites/default/files/styles/powgallery_1280/public/fotos/2019/12/-_whatsapp_image_2019-10-15_at_12.12.13_pm_33098732.jpg?itok=8aPgcUbD\"/>\r\n                         <div class=\"card-title\">Sitios de interes</div>\r\n                         <div class=\"card-subtitle\">28 Listings</div>\r\n                      </ion-card>\r\n            </ion-col>-->\r\n \r\n     </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n  \r\n\r\n</ion-content >\r\n\r\n");

/***/ }),

/***/ "./src/app/pages/inicio/inicio-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/inicio/inicio-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: InicioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageRoutingModule", function() { return InicioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inicio.page */ "./src/app/pages/inicio/inicio.page.ts");




const routes = [
    {
        path: '',
        component: _inicio_page__WEBPACK_IMPORTED_MODULE_3__["InicioPage"]
    }
];
let InicioPageRoutingModule = class InicioPageRoutingModule {
};
InicioPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InicioPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/inicio/inicio.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/inicio/inicio.module.ts ***!
  \***********************************************/
/*! exports provided: InicioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageModule", function() { return InicioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inicio-routing.module */ "./src/app/pages/inicio/inicio-routing.module.ts");
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inicio.page */ "./src/app/pages/inicio/inicio.page.ts");







let InicioPageModule = class InicioPageModule {
};
InicioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["InicioPageRoutingModule"]
        ],
        declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_6__["InicioPage"]]
    })
], InicioPageModule);



/***/ }),

/***/ "./src/app/pages/inicio/inicio.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/inicio/inicio.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img1::after {\n  display: flex;\n  float: left;\n  position: absolute;\n  height: 300%;\n  width: 300%;\n}\n\nion-card {\n  height: 170px;\n}\n\n.card-background-page ion-card {\n  position: relative;\n  text-align: center;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));\n}\n\n.card-background-page img {\n  height: 100%;\n  position: relative;\n  max-height: 100%;\n  max-width: 100%;\n  min-height: 100%;\n  min-width: 100%;\n  width: 100%;\n}\n\n.card-background-page img {\n  opacity: 0.35;\n}\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: white;\n}\n\n.card-background-page .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n\n.logo {\n  width: 145px;\n  height: 95px;\n  margin-left: 15%;\n}\n\n.call {\n  width: 40px;\n  height: 40px;\n  margin-left: 50%;\n  margin-right: 0%;\n}\n\n.menu {\n  margin-right: 10%;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5pY2lvL0M6XFxJT05JQzVcXFZpdmVUdWxjYW5cXFZpdmVUdWxjYW4vc3JjXFxhcHBcXHBhZ2VzXFxpbmljaW9cXGluaWNpby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2luaWNpby9pbmljaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDZEY7O0FEbUJBO0VBQ0UsYUFBQTtBQ2hCRjs7QURzQkU7RUFDQSxrQkFBQTtFQUNFLGtCQUFBO0VBQ0EseUVBQUE7QUNuQko7O0FEc0JJO0VBRUUsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ3JCTjs7QUR5Qkk7RUFDRSxhQUFBO0FDdkJOOztBRDRCSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDMUJOOztBRDZCSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQzNCTjs7QURpQ0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDOUJGOztBRGlDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQzlCRjs7QURpQ0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDOUJGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5pY2lvL2luaWNpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24tY2FyZCB7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuLy8gICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgY2VudGVyO1xyXG4vLyAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbi8vICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMHM7XHJcbi8vIH1cclxuXHJcbi8vIC5pbWcge1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgbWFyZ2luOiAwIGF1dG87XHJcbi8vICAgaGVpZ2h0OiAyMDBweDtcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gICBvYmplY3QtZml0OiBjb3ZlcjtcclxuLy8gfVxyXG5cclxuLmltZzE6OmFmdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDMwMCU7XHJcbiAgd2lkdGg6IDMwMCU7XHJcbiAgXHJcbn1cclxuXHJcblxyXG5pb24tY2FyZCB7XHJcbiAgaGVpZ2h0OiAxNzBweDtcclxuICAgIFxyXG59XHJcblxyXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xyXG5cclxuICBpb24tY2FyZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuOCkscmdiYSgwLDAsMCwwLjgpKTtcclxuICB9XHJcblxyXG4gICAgaW1ne1xyXG4gICAgICBcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgb3BhY2l0eTogMC4zNTtcclxuICAgICAgXHJcbiAgfVxyXG4gICAgXHJcbiAgXHJcbiAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAzNiU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi4wZW07XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIH1cclxuICBcclxuICAgIC5jYXJkLXN1YnRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAxLjBlbTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDUyJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgXHJcbiAgfVxyXG5cclxuLmxvZ297XHJcbiAgd2lkdGg6IDE0NXB4O1xyXG4gIGhlaWdodDogOTVweDtcclxuICBtYXJnaW4tbGVmdDogMTUlO1xyXG59XHJcblxyXG4uY2FsbHtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDAlO1xyXG59XHJcblxyXG4ubWVudXtcclxuICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLy8gLmZvcm1IZWFkZXIge1xyXG4vLyAgIGhlaWdodDogNTBweDtcclxuLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCA1MSwgMTk0KTtcclxuLy8gd2lkdGg6IDEwMCU7XHJcbi8vICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1NTU7XHJcblxyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuLy8gfVxyXG5cclxuLy8gLm5hdkFycm93MiB7XHJcbi8vIGNvbG9yOiB3aGl0ZTtcclxuLy8gICB3aWR0aDogMTAlO1xyXG4vLyAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4vLyB9XHJcblxyXG4vLyAudGl0dWxvVGFiIHtcclxuLy8gICBjb2xvcjogd2hpdGU7XHJcbi8vIHdpZHRoOiA4MCU7XHJcbi8vIHBhZGRpbmctdG9wOiAxNXB4O1xyXG5cclxuLy8gfVxyXG4vLyAudGl0dWxvVGFiIGF7XHJcbi8vIGNvbG9yOiNmZmY7XHJcbi8vIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4vLyB9IiwiLmltZzE6OmFmdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAzMDAlO1xuICB3aWR0aDogMzAwJTtcbn1cblxuaW9uLWNhcmQge1xuICBoZWlnaHQ6IDE3MHB4O1xufVxuXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgaW9uLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC44KSwgcmdiYSgwLCAwLCAwLCAwLjgpKTtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIGltZyB7XG4gIG9wYWNpdHk6IDAuMzU7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmNhcmQtdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzYlO1xuICBmb250LXNpemU6IDJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmNhcmQtc3VidGl0bGUge1xuICBmb250LXNpemU6IDFlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUyJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubG9nbyB7XG4gIHdpZHRoOiAxNDVweDtcbiAgaGVpZ2h0OiA5NXB4O1xuICBtYXJnaW4tbGVmdDogMTUlO1xufVxuXG4uY2FsbCB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMCU7XG59XG5cbi5tZW51IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/inicio/inicio.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/inicio/inicio.page.ts ***!
  \*********************************************/
/*! exports provided: InicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPage", function() { return InicioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let InicioPage = class InicioPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.darkMode = true;
        this.slideOpts = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: true
        };
        this.slides = [
            {
                img: '/assets/inicio/Hoteles.png',
                img1: '/assets/inicio/2.png',
                titulo: 'Alojamiento',
                subt: '',
                id: '/alojamiento'
            },
            {
                img: '/assets/inicio/Restaurantes.png',
                img1: '/assets/inicio/2.png',
                titulo: 'Alimentación',
                subt: '',
                id: '/alimentacion'
            },
            {
                img: '/assets/inicio/turismo.jpg',
                img1: '/assets/inicio/2.png',
                titulo: 'Sitios Turísticos',
                subt: '',
                id: '/turismo'
            },
            {
                img: '/assets/inicio/Operadores.png',
                img1: '/assets/inicio/2.png',
                titulo: 'Operadores Turísticos',
                subt: '',
                id: '/operadores'
            },
            {
                img: '/assets/inicio/Esparcimiento.png',
                img1: '/assets/inicio/2.png',
                titulo: 'Esparcimiento',
                subt: '',
                id: '/espar'
            },
            {
                img: '/assets/inicio/transporte.jpg',
                img1: '/assets/inicio/1.png',
                titulo: 'Transporte',
                subt: '',
                id: '/transporte'
            },
            {
                img: '/assets/inicio/relevancia.png',
                img1: '/assets/inicio/2.png',
                titulo: 'Relevancia Histórica',
                subt: '',
                id: '/relevancia'
            },
            {
                img: '/assets/inicio/OtrosServicios.png',
                img1: '/assets/inicio/2.png',
                titulo: 'Servicios Generales',
                subt: '',
                id: '/otros'
            },
        ];
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        this.darkMode = prefersDark.matches;
    }
    ngOnInit() {
    }
    cambio() {
        // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        document.body.classList.toggle('dark');
    }
    dirigir(id) {
        this.navCtrl.navigateForward(id);
    }
};
InicioPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
InicioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inicio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inicio.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inicio.page.scss */ "./src/app/pages/inicio/inicio.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], InicioPage);



/***/ })

}]);
//# sourceMappingURL=pages-inicio-inicio-module-es2015.js.map