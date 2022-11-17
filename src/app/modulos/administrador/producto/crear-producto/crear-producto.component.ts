import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ModeloProductos } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';
import { of } from 'rxjs';
import {from} from 'rxjs';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'nombre': ['', [Validators.required]],
    'precio': ['', [Validators.required]],
    'descripcion': ['', [Validators.required]],
    'tipo': ['', [Validators.required]]
  });


  constructor(private fb: FormBuilder,
    private servicioProducto: ProductoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  GuardarProducto() {
    let nombre = this.fgValidador.controls["nombre"].value;
    let precio = parseInt(this.fgValidador.controls["precio"].value);
    let descripcion = this.fgValidador.controls["descripcion"].value;
    let tipo = this.fgValidador.controls["tipo"].value;
    
    let p = new ModeloProductos();
    p.nombre = nombre;
    p.precio = precio;
    p.tipo = tipo;
    p.descripcion = descripcion 
    this.servicioProducto.crearProducto(p).subscribe((datos: ModeloProductos) => {      
      alert("producto almacenado correctamente")
      this.router.navigate(["/administrador/listar-productos"]);          
        }, (error: any) => {
          alert("error almacenando el producto")
        }
        )}
  }


