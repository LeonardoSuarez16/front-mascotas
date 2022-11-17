import { Component, OnInit } from '@angular/core';
import { ModeloProductos } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.css']
})
export class BuscarProductoComponent implements OnInit {

  listadoRegistros: ModeloProductos[] = []; 

  constructor(private productoServicio: ProductoService) { }

  ngOnInit(): void {
    this.obtenerListadoProductos()
  }

  obtenerListadoProductos() {
    this.productoServicio.obtenerRegistros().subscribe((datos: ModeloProductos[]) => {
      this.listadoRegistros = datos;
    })
  }

}
