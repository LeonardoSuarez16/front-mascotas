import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { BuscarUsuarioComponent } from './usuario/buscar-usuario/buscar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';
import { CrearMascotaComponent } from './mascota/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascota/editar-mascota/editar-mascota.component';
import { BuscarMascotaComponent } from './mascota/buscar-mascota/buscar-mascota.component';
import { EliminarMascotaComponent } from './mascota/eliminar-mascota/eliminar-mascota.component';
import { EliminarProductoComponent } from './producto/eliminar-producto/eliminar-producto.component';
import { CrearProductoComponent } from './producto/crear-producto/crear-producto.component';
import { BuscarProductoComponent } from './producto/buscar-producto/buscar-producto.component';
import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';
import { CrearPlanComponent } from './plan/crear-plan/crear-plan.component';
import { BuscarPlanComponent } from './plan/buscar-plan/buscar-plan.component';
import { EditarPlanComponent } from './plan/editar-plan/editar-plan.component';
import { EliminarPlanComponent } from './plan/eliminar-plan/eliminar-plan.component';
import { EliminarSucursalComponent } from './sucursal/eliminar-sucursal/eliminar-sucursal.component';
import { CrearSucursalComponent } from './sucursal/crear-sucursal/crear-sucursal.component';
import { BuscarSucursalComponent } from './sucursal/buscar-sucursal/buscar-sucursal.component';
import { EditarSucursalComponent } from './sucursal/editar-sucursal/editar-sucursal.component';


@NgModule({
  declarations: [
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    BuscarUsuarioComponent,
    EliminarUsuarioComponent,
    CrearMascotaComponent,
    EditarMascotaComponent,
    BuscarMascotaComponent,
    EliminarMascotaComponent,
    EliminarProductoComponent,
    CrearProductoComponent,
    BuscarProductoComponent,
    EditarProductoComponent,
    CrearPlanComponent,
    BuscarPlanComponent,
    EditarPlanComponent,
    EliminarPlanComponent,
    EliminarSucursalComponent,
    CrearSucursalComponent,
    BuscarSucursalComponent,
    EditarSucursalComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule
  ]
})
export class AdministradorModule { }
