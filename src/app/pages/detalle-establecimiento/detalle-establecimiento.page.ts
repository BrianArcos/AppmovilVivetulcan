import { Component, OnInit } from '@angular/core';
import { RespEstablecimientos, Imagen } from '../../interfaces/interfaces';
import { EstablecimientosService } from '../../services/establecimientos.service';
import { ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { element } from 'protractor';
import { ModalController } from '@ionic/angular';

import { MapComponent } from 'src/app/components/map/map.component';
import { ImagenesService } from 'src/app/services/imagenes.service';

@Component({
  selector: 'app-detalle-establecimiento',
  templateUrl: './detalle-establecimiento.page.html',
  styleUrls: ['./detalle-establecimiento.page.scss'],
})
export class DetalleEstablecimientoPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
  };

  listadoImagenes : Imagen[] = [];

  lista : RespEstablecimientos;
  oculto= 120;
  
  constructor( private estableService: EstablecimientosService, 
               private state: ActivatedRoute,
               private navegador:InAppBrowser,
               private call: CallNumber,
               private modalController: ModalController,
               private imagenService: ImagenesService) { }
 
  ngOnInit() {
    this.lista = JSON.parse(this.state.snapshot.params.datos);
    this.imagenService.getImagenesEstablecimientos(this.lista.id_establecimiento)
    .subscribe( resp => {
      console.log('Resp',resp );
      this.listadoImagenes = resp;
    });
  }

  openWeb(lista:string, target:string){
  // const link = lista
    this.navegador.create(lista, target)
     //this.navegador.create('https://www.google.com','_self')
  }

  openFb(lista:string, target:string){
    const id = lista
    this.navegador.create(id, target)
  }

  openwhat(lista:string):void{
    window.open('https://api.whatsapp.com/send?phone='+lista, '_system');
  }

  calln(lista:string){
    this.call.callNumber (lista, true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }

  // mostrarUbicacion(lista.lat, lista.lng)

  async mostrarUbicacion(lat: string, lng: string) {
    // console.log(lat);
    // console.log(lng);
    const modal = await this.modalController.create({
    component: MapComponent,
    componentProps: {
      lat,
      lng
    }
    });

    modal.present();

  }
  
    
  
}
  