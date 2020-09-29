import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MapComponent } from './map/map.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';




@NgModule({
  entryComponents: [
    MapComponent
  ],
  declarations: [
    HeaderComponent,
    MapComponent,
    UbicacionComponent
  ],
  exports:[
    HeaderComponent,
    MapComponent,
    UbicacionComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
