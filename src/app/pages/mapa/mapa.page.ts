import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { EstablecimientosService } from '../../services/establecimientos.service';
import { RespEstablecimientos, RespAtractivos } from '../../interfaces/interfaces';

declare var mapboxgl: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  listadoLugares : RespEstablecimientos[] = [];
  listadoAtractivos: RespAtractivos[] = [];

  array: [] = [];

  constructor(private establecimientoService : EstablecimientosService) {

  }

    
  ngOnInit() {

    mapboxgl.accessToken = 'pk.eyJ1IjoiYnJpYW5ndGkiLCJhIjoiY2tiMzF2OGw5MDJwZjJzcWNwZHJoNXJyZiJ9.lDnbCNeuM2PZ8iWTKr4TzQ';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-77.72006049593814, 0.8104170982511971],
      zoom: 14,
    });

    map.addControl(
      new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true
      },
      trackUserLocation: true
      })
    );

    map.on('load', () => {
      map.resize();
      map.addControl(new mapboxgl.NavigationControl());
    });

    this.establecimientoService.getEstablecimientos()
    .subscribe( resp => {
        // console.log('Resp',resp );
        this.listadoLugares = resp;

        for (const lugar of this.listadoLugares){
          
          const lat = Number(lugar.lat);
          const lng = Number(lugar.lng);

          // console.log(lat);
          // console.log(lng);
          
          const geojson = {
            type: 'FeatureCollection',
            features: [
              {
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
              }
            ]
          };
          

          geojson.features.forEach(function(marker){

            const icon = document.createElement('div');
            icon.className = 'marker';
            if (lugar.tipo_establecimiento_id_tipo === 1 ) {
              icon.style.backgroundImage = 'url(/assets/pin/hotel.png)';
            }
            if (lugar.tipo_establecimiento_id_tipo === 2 ) {
              icon.style.backgroundImage = 'url(/assets/pin/hostal.png)';
            }
            if (lugar.tipo_establecimiento_id_tipo === 3 ) {
              icon.style.backgroundImage = 'url(/assets/pin/restaurante.png)';
            }
            if (lugar.tipo_establecimiento_id_tipo === 4 ) {
              icon.style.backgroundImage = 'url(/assets/pin/cafeteria.png)';
            }
            if (lugar.tipo_establecimiento_id_tipo === 5 ) {
              icon.style.backgroundImage = 'url(/assets/pin/discoteca.png)';
            }
            if (lugar.tipo_establecimiento_id_tipo === 6 ) {
              icon.style.backgroundImage = 'url(/assets/pin/bar.png)';
            }
            if (lugar.tipo_establecimiento_id_tipo === 7 ) {
              icon.style.backgroundImage = 'url(/assets/pin/complejo.png)';
            }
            
            icon.style.width = marker.properties.iconSize[0] + 'px';
            icon.style.height = marker.properties.iconSize[1] + 'px';
          
            new mapboxgl.Marker(icon).setLngLat(marker.geometry.coordinates)
            .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML('<h4>' + lugar.nom_estable + '</h4>' + '<p><b>Dirección: </b>' + lugar.direccion + '</p>'
            + '<p><b>Horario: </b>' + lugar.horario + '</p>'))
            .addTo(map);
          });

        }
    });

    this.establecimientoService.getatractivos()
    .subscribe(resp => {
      this.listadoAtractivos = resp;
      for (const atractivo of this.listadoAtractivos){
        const lat = Number(atractivo.lat);
        const lng = Number(atractivo.lng);
        
        const geojson = {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              properties: {
              message: 'Foo',
              iconSize: [40, 40],
              },
              geometry: {
              type: 'Point',
              coordinates: [lng, lat]
              }
            }
          ]
        };
        
        geojson.features.forEach(function(marker){
          const icon = document.createElement('div');
          icon.className = 'marker';
          icon.style.backgroundImage = 'url(/assets/pin/atractivo.png)';
          icon.style.width = marker.properties.iconSize[0] + 'px';
          icon.style.height = marker.properties.iconSize[1] + 'px';

          new mapboxgl.Marker(icon).setLngLat(marker.geometry.coordinates)
            .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML('<h4>' + atractivo.nombre + '</h4>' + '<p><b>Dirección: </b>' + atractivo.direccion + '</p>'
            + '<p><b>Horario: </b>' + atractivo.horario + '</p>'))
            .addTo(map);
        });


      }

    });

    

  }

}
