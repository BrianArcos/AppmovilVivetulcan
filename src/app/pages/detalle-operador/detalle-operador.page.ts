import { Component, OnInit } from '@angular/core';
import { RespOperadores } from '../../interfaces/interfaces';
import { EstablecimientosService } from '../../services/establecimientos.service';
import { ActivatedRoute } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ModalController } from '@ionic/angular';
import { MapComponent } from 'src/app/components/map/map.component';

@Component({
  selector: 'app-detalle-operador',
  templateUrl: './detalle-operador.page.html',
  styleUrls: ['./detalle-operador.page.scss'],
})
export class DetalleOperadorPage implements OnInit {

  listaopera: RespOperadores;
  oculto= 120;
  constructor( private operaService:EstablecimientosService,
              private state:ActivatedRoute,
              private navegador:InAppBrowser,
              private call: CallNumber,
              private modalController: ModalController) { }

  ngOnInit() {
    this.listaopera = JSON.parse(this.state.snapshot.params.datos)
  }
  openWeb(listaopera:string, target:string){
    const link = listaopera
    this.navegador.create(link, target)
    // this.navegador.create('https://www.google.com','_self')

  }

  openFb(listaopera:string, target:string){
    const id = listaopera
    this.navegador.create(id, target)

  }

  openwhat(listaopera:string):void{
    window.open('https://api.whatsapp.com/send?phone='+listaopera, '_system');
  }


  calln(listaopera:string){
    this.call.callNumber (listaopera, true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }

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
