import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloSucursal } from 'src/app/modelos/sucursal.modelo';
import { SucursalService } from 'src/app/servicios/sucursal.service';

@Component({
  selector: 'app-eliminar-sucursal',
  templateUrl: './eliminar-sucursal.component.html',
  styleUrls: ['./eliminar-sucursal.component.css']
})
export class EliminarSucursalComponent implements OnInit {

  id: string = '';
  ciudad: string = '';

  constructor(
    private servicioSucursal: SucursalService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarSucursal();
  }

  BuscarSucursal() {    
    this.servicioSucursal.obtenerRegistrosPorId(this.id).subscribe((datos: ModeloSucursal) => {
      
      if (datos.id && datos.ciudad) {
        this.id = datos.id;
        this.ciudad = datos.ciudad;
      }
    })
  }

  EliminarSucursal(){

    this.servicioSucursal.EliminarSucursal(this.id).subscribe((datos: any) => {
      alert("sucursal eliminado correctamente LD");
      this.router.navigate(["/administrador/listar-sucursal"]);
    }, (error: any) => {
      alert("Error al eliminar LD")
    })
  }
}
