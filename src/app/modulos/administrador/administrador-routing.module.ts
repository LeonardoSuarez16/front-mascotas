import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarMascotaComponent } from './mascota/buscar-mascota/buscar-mascota.component';
import { CrearMascotaComponent } from './mascota/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascota/editar-mascota/editar-mascota.component';
import { EliminarMascotaComponent } from './mascota/eliminar-mascota/eliminar-mascota.component';
import { BuscarPlanComponent } from './plan/buscar-plan/buscar-plan.component';
import { CrearPlanComponent } from './plan/crear-plan/crear-plan.component';
import { EditarPlanComponent } from './plan/editar-plan/editar-plan.component';
import { EliminarPlanComponent } from './plan/eliminar-plan/eliminar-plan.component';
import { BuscarProductoComponent } from './producto/buscar-producto/buscar-producto.component';
import { CrearProductoComponent } from './producto/crear-producto/crear-producto.component';
import { EliminarProductoComponent } from './producto/eliminar-producto/eliminar-producto.component';
import { BuscarSucursalComponent } from './sucursal/buscar-sucursal/buscar-sucursal.component';
import { CrearSucursalComponent } from './sucursal/crear-sucursal/crear-sucursal.component';
import { EditarSucursalComponent } from './sucursal/editar-sucursal/editar-sucursal.component';
import { EliminarSucursalComponent } from './sucursal/eliminar-sucursal/eliminar-sucursal.component';
import { BuscarUsuarioComponent } from './usuario/buscar-usuario/buscar-usuario.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';

const routes: Routes = [
  {
    path: 'crear-usuario',
    component:CrearUsuarioComponent
  },
  {
    path: 'editar-usuario',
    component:EditarUsuarioComponent
  },
  {
    path: 'buscar-usuario',
    component:BuscarUsuarioComponent
  },
  {
    path: 'eliminar-usuario',
    component:EliminarUsuarioComponent
  },
  {
    path: "listar-productos",
    component: BuscarProductoComponent
  },
  {
    path: 'crear-mascota',
    component:CrearMascotaComponent
  },
  {
    path: 'editar-mascota',
    component:EditarMascotaComponent
  },
  {
    path: 'buscar-mascota',
    component:BuscarMascotaComponent
  },
  {
    path: 'eliminar-mascota',
    component:EliminarMascotaComponent
  },
  {
    path: 'crear-producto',
    component:CrearProductoComponent
  },
  {
    path: 'editar-producto/:id',
    component:BuscarProductoComponent
  },
  {
    path: 'buscar-producto',
    component:BuscarProductoComponent
  },
  {
    path: 'eliminar-producto',
    component:EliminarProductoComponent
  },
  {
    path: 'crear-plan',
    component:CrearPlanComponent
  },
  {
    path: 'editar-plan',
    component:EditarPlanComponent
  },
  {
    path: 'buscar-plan',
    component:BuscarPlanComponent
  },
  {
    path: 'eliminar-plan',
    component:EliminarPlanComponent
  },
  {
    path: 'crear-sucursal',
    component:CrearSucursalComponent
  },
  {
    path: 'editar-sucursal',
    component:EditarSucursalComponent
  },
  {
    path: 'buscar-sucursal',
    component:BuscarSucursalComponent
  },
  {
    path: 'eliminar-sucursal',
    component:EliminarSucursalComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
