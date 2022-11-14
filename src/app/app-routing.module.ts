import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';

const routes: Routes = [
  {
    path: "inicio",
    component:InicioComponent
  },
  {
    path: "",
    pathMatch: 'full',
    redirectTo:'/inicio'
  },
  
  {
    path: 'seguridad',
    loadChildren: () => import("./modulos/seguridad/seguridad.module").then(x => x.SeguridadModule)
  },

  {
    path: 'administrador',
    loadChildren: () => import("./modulos/administrador/administrador.module").then(x => x.AdministradorModule)
  },
  {
    path: 'prospectos',
    loadChildren: () => import("./modulos/prospectos/prospectos.module").then(x => x.ProspectosModule)
  },
  {
    path: '**',
    component:ErrorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
