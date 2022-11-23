import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloProductos } from 'src/app/modelos/producto.modelo'; 
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-producto.component.html',
  styleUrls: ['./eliminar-producto.component.css']
})
export class EliminarProductoComponent implements OnInit {
  id: string = '';
  nombre: string = '';

  constructor(
    private servicioProducto: ProductoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarUsuario();
  }

  BuscarUsuario() {    
    this.servicioProducto.obtenerRegistrosPorId(this.id).subscribe((datos: ModeloProductos) => {
      
      if (datos.id && datos.nombre) {
        this.id = datos.id;
        this.nombre = datos.nombre;
      }
    })
  }

  EliminarProducto(){

    this.servicioProducto.EliminarProducto(this.id).subscribe((datos: any) => {
      alert("producto eliminado correctamente LD");
      this.router.navigate(["/administrador/listar-productos"]);
    }, (error: any) => {
      alert("Error al eliminar LD")
    })
  }
}

