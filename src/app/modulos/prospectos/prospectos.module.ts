import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProspectosRoutingModule } from './prospectos-routing.module';
import { SolicitarInformacionComponent } from './solicitar-informacion/solicitar-informacion.component';
import { RecibirInformacionComponent } from './recibir-informacion/recibir-informacion.component';


@NgModule({
  declarations: [
    SolicitarInformacionComponent,
    RecibirInformacionComponent
  ],
  imports: [
    CommonModule,
    ProspectosRoutingModule
  ]
})
export class ProspectosModule { }
