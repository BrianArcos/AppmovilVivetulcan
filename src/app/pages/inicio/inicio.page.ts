import { Component, OnInit,  } from '@angular/core';

import { NavController,   } from '@ionic/angular';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
    
  darkMode: boolean = true;

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
  };
  

slides: { img: string, img1: string, titulo: string, subt: string, id:string }[] = [
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

  

  constructor( private navCtrl :NavController ) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = prefersDark.matches;
   }

  ngOnInit() {
    
  }
  cambio(){
    // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
      document.body.classList.toggle('dark');
    
  }
  

  dirigir(id:string){
    this.navCtrl.navigateForward(id);
  }

}

