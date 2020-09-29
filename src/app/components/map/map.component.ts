import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';

declare var mapboxgl: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  
  @Input() lat: string;
  @Input() lng: string;

  @ViewChild('mapa', {static: true}) mapa : any;

  constructor(private modalController : ModalController) { }

  ngOnInit() {
    // console.log(this.lat);
    // console.log(this.lng);

    const lat = Number(this.lat);
    const lng = Number(this.lng);

    mapboxgl.accessToken = 'pk.eyJ1IjoiYnJpYW5ndGkiLCJhIjoiY2tiMzF2OGw5MDJwZjJzcWNwZHJoNXJyZiJ9.lDnbCNeuM2PZ8iWTKr4TzQ';
    const map = new mapboxgl.Map({
      container: this.mapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: 15,
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


    const marker = new mapboxgl.Marker()
      .setLngLat( [lng, lat] )
      .addTo(map);
  }

  cerrarModal() {
    this.modalController.dismiss();
  }

}
