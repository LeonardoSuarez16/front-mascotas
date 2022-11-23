import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
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
import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';
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
    component: CrearUsuarioComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path: 'editar-usuario/:id',
    component: EditarUsuarioComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path: 'buscar-usuario',
    component: BuscarUsuarioComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path: 'eliminar-usuario/:id',
    component: EliminarUsuarioComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path: "listar-mascotas",
    component: BuscarMascotaComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path: "listar-productos",
    component: BuscarProductoComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path: "listar-usuario",
    component: BuscarUsuarioComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path: "listar-plan",
    component: BuscarPlanComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path: "listar-sucursal",
    component: BuscarSucursalComponent,
    canActivate:[ValidadorSesionGuard]
  },
  
  {
    path: 'crear-mascota',
    component: CrearMascotaComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path: 'editar-mascota/:id',
    component: EditarMascotaComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path: 'buscar-mascota',
    component: BuscarMascotaComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path: 'eliminar-mascota/:id',
    component: EliminarMascotaComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path: 'crear-producto',
    component: CrearProductoComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path: 'editar-producto/:id',
    component: EditarProductoComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path: 'buscar-producto',
    component: BuscarProductoComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path: 'eliminar-producto/:id',
    component: EliminarProductoComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path: 'crear-plan',
    component: CrearPlanComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path: 'editar-plan/:id',
    component: EditarPlanComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path: 'buscar-plan',
    component: BuscarPlanComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path: 'eliminar-plan/:id',
    component: EliminarPlanComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path: 'crear-sucursal',
    component: CrearSucursalComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path: 'editar-sucursal/:id',
    component: EditarSucursalComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path: 'buscar-sucursal',
    component: BuscarSucursalComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path: 'eliminar-sucursal/:id',
    component: EliminarSucursalComponent,
    canActivate:[ValidadorSesionGuard]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
