import { Component, OnInit } from '@angular/core';
import { ModeloSucursal } from 'src/app/modelos/sucursal.modelo';
import { SucursalService } from 'src/app/servicios/sucursal.service';

@Component({
  selector: 'app-buscar-sucursal',
  templateUrl: './buscar-sucursal.component.html',
  styleUrls: ['./buscar-sucursal.component.css']
})
export class BuscarSucursalComponent implements OnInit {


  listadoRegistros: ModeloSucursal[] = []; 

  constructor(private sucursalServicio: SucursalService) { }

  ngOnInit(): void {
    this.obtenerListadoSucursal();
  }

  obtenerListadoSucursal() {
    this.sucursalServicio.obtenerRegistros().subscribe((datos: ModeloSucursal[]) => {
      this.listadoRegistros = datos;
    })
  }

}
