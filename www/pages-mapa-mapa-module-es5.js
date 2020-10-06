function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mapa-mapa-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mapa/mapa.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mapa/mapa.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMapaMapaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<app-header align=\"center\" titulo=\"Mapa Tulcán\"> </app-header>\r\n\r\n\r\n\r\n<ion-content class=\"noScroll\">\r\n  \r\n\r\n  <div id='map' ></div>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/mapa/mapa-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/mapa/mapa-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: MapaPageRoutingModule */

  /***/
  function srcAppPagesMapaMapaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapaPageRoutingModule", function () {
      return MapaPageRoutingModule;
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


    var _mapa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mapa.page */
    "./src/app/pages/mapa/mapa.page.ts");

    var routes = [{
      path: '',
      component: _mapa_page__WEBPACK_IMPORTED_MODULE_3__["MapaPage"]
    }];

    var MapaPageRoutingModule = function MapaPageRoutingModule() {
      _classCallCheck(this, MapaPageRoutingModule);
    };

    MapaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MapaPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/mapa/mapa.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/mapa/mapa.module.ts ***!
    \*******************************************/

  /*! exports provided: MapaPageModule */

  /***/
  function srcAppPagesMapaMapaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapaPageModule", function () {
      return MapaPageModule;
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


    var _mapa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./mapa-routing.module */
    "./src/app/pages/mapa/mapa-routing.module.ts");
    /* harmony import */


    var _mapa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./mapa.page */
    "./src/app/pages/mapa/mapa.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");

    var MapaPageModule = function MapaPageModule() {
      _classCallCheck(this, MapaPageModule);
    };

    MapaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _mapa_routing_module__WEBPACK_IMPORTED_MODULE_5__["MapaPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_mapa_page__WEBPACK_IMPORTED_MODULE_6__["MapaPage"]]
    })], MapaPageModule);
    /***/
  },

  /***/
  "./src/app/pages/mapa/mapa.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/mapa/mapa.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMapaMapaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#map {\n  width: 100% !important;\n  height: 100% !important;\n  background-color: #f6f6f4;\n}\n\n.noScroll {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFwYS9DOlxcSU9OSUM1XFxWaXZlVHVsY2FuXFxWaXZlVHVsY2FuL3NyY1xcYXBwXFxwYWdlc1xcbWFwYVxcbWFwYS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21hcGEvbWFwYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYXBhL21hcGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjQ7XHJcbn1cclxuXHJcbi5ub1Njcm9sbCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfSIsIiNtYXAge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNDtcbn1cblxuLm5vU2Nyb2xsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/mapa/mapa.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/mapa/mapa.page.ts ***!
    \*****************************************/

  /*! exports provided: MapaPage */

  /***/
  function srcAppPagesMapaMapaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapaPage", function () {
      return MapaPage;
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

    var MapaPage = /*#__PURE__*/function () {
      function MapaPage(establecimientoService) {
        _classCallCheck(this, MapaPage);

        this.establecimientoService = establecimientoService;
        this.listadoLugares = [];
        this.listadoAtractivos = [];
        this.array = [];
      }

      _createClass(MapaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          mapboxgl.accessToken = 'pk.eyJ1IjoiYnJpYW5ndGkiLCJhIjoiY2tiMzF2OGw5MDJwZjJzcWNwZHJoNXJyZiJ9.lDnbCNeuM2PZ8iWTKr4TzQ';
          var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-77.72006049593814, 0.8104170982511971],
            zoom: 14
          });
          map.addControl(new mapboxgl.GeolocateControl({
            positionOptions: {
              enableHighAccuracy: true
            },
            trackUserLocation: true
          }));
          map.on('load', function () {
            map.resize();
            map.addControl(new mapboxgl.NavigationControl());
          });
          this.establecimientoService.getEstablecimientos().subscribe(function (resp) {
            // console.log('Resp',resp );
            _this.listadoLugares = resp;

            var _iterator = _createForOfIteratorHelper(_this.listadoLugares),
                _step;

            try {
              var _loop = function _loop() {
                var lugar = _step.value;
                var lat = Number(lugar.lat);
                var lng = Number(lugar.lng); // console.log(lat);
                // console.log(lng);

                var geojson = {
                  type: 'FeatureCollection',
                  features: [{
                    type: 'Feature',
                    properties: {
                      message: 'Foo',
                      iconSize: [40, 40],
                      categoria: lugar.tipo_establecimiento_id_tipo
                    },
                    geometry: {
                      type: 'Point',
                      coordinates: [lng, lat]
                    }
                  }]
                };
                geojson.features.forEach(function (marker) {
                  var icon = document.createElement('div');
                  icon.className = 'marker';

                  if (lugar.tipo_establecimiento_id_tipo === 1) {
                    icon.style.backgroundImage = 'url(/assets/pin/hotel.png)';
                  }

                  if (lugar.tipo_establecimiento_id_tipo === 2) {
                    icon.style.backgroundImage = 'url(/assets/pin/hostal.png)';
                  }

                  if (lugar.tipo_establecimiento_id_tipo === 3) {
                    icon.style.backgroundImage = 'url(/assets/pin/restaurante.png)';
                  }

                  if (lugar.tipo_establecimiento_id_tipo === 4) {
                    icon.style.backgroundImage = 'url(/assets/pin/cafeteria.png)';
                  }

                  if (lugar.tipo_establecimiento_id_tipo === 5) {
                    icon.style.backgroundImage = 'url(/assets/pin/discoteca.png)';
                  }

                  if (lugar.tipo_establecimiento_id_tipo === 6) {
                    icon.style.backgroundImage = 'url(/assets/pin/bar.png)';
                  }

                  if (lugar.tipo_establecimiento_id_tipo === 7) {
                    icon.style.backgroundImage = 'url(/assets/pin/complejo.png)';
                  }

                  icon.style.width = marker.properties.iconSize[0] + 'px';
                  icon.style.height = marker.properties.iconSize[1] + 'px';
                  new mapboxgl.Marker(icon).setLngLat(marker.geometry.coordinates).setPopup(new mapboxgl.Popup({
                    offset: 25
                  }) // add popups
                  .setHTML('<h4>' + lugar.nom_estable + '</h4>' + '<p><b>Dirección: </b>' + lugar.direccion + '</p>' + '<p><b>Horario: </b>' + lugar.horario + '</p>')).addTo(map);
                });
              };

              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                _loop();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          });
          this.establecimientoService.getatractivos().subscribe(function (resp) {
            _this.listadoAtractivos = resp;

            var _iterator2 = _createForOfIteratorHelper(_this.listadoAtractivos),
                _step2;

            try {
              var _loop2 = function _loop2() {
                var atractivo = _step2.value;
                var lat = Number(atractivo.lat);
                var lng = Number(atractivo.lng);
                var geojson = {
                  type: 'FeatureCollection',
                  features: [{
                    type: 'Feature',
                    properties: {
                      message: 'Foo',
                      iconSize: [40, 40]
                    },
                    geometry: {
                      type: 'Point',
                      coordinates: [lng, lat]
                    }
                  }]
                };
                geojson.features.forEach(function (marker) {
                  var icon = document.createElement('div');
                  icon.className = 'marker';
                  icon.style.backgroundImage = 'url(/assets/pin/atractivo.png)';
                  icon.style.width = marker.properties.iconSize[0] + 'px';
                  icon.style.height = marker.properties.iconSize[1] + 'px';
                  new mapboxgl.Marker(icon).setLngLat(marker.geometry.coordinates).setPopup(new mapboxgl.Popup({
                    offset: 25
                  }) // add popups
                  .setHTML('<h4>' + atractivo.nombre + '</h4>' + '<p><b>Dirección: </b>' + atractivo.direccion + '</p>' + '<p><b>Horario: </b>' + atractivo.horario + '</p>')).addTo(map);
                });
              };

              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                _loop2();
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          });
        }
      }]);

      return MapaPage;
    }();

    MapaPage.ctorParameters = function () {
      return [{
        type: _services_establecimientos_service__WEBPACK_IMPORTED_MODULE_2__["EstablecimientosService"]
      }];
    };

    MapaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mapa',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mapa.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mapa/mapa.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mapa.page.scss */
      "./src/app/pages/mapa/mapa.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_establecimientos_service__WEBPACK_IMPORTED_MODULE_2__["EstablecimientosService"]])], MapaPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-mapa-mapa-module-es5.js.map