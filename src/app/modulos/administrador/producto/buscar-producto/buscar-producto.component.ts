import { Component, OnInit } from '@angular/core';
import { ModeloPructos } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.css']
})
export class BuscarProductoComponent implements OnInit {

  listadoRegistros: ModeloPructos[] = []; 

  constructor(private productoServicio: ProductoService) { }

  ngOnInit(): void {
  }

  obtenerListadoProductos() {
    this.productoServicio.obtenerRegistros().subscribe((datos: ModeloPructos[]) => {
      this.listadoRegistros = datos;
    })
  }

}
