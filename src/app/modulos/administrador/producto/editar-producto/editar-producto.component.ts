import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ModeloProductos } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {
// creamos el atributo para que pueda funcionar y lo inicialisamos en 0
  
  id: string = '';
  
  // en este lugar copiamos lo que cortamos de muestra de crear y empezamos a importar los pquetes
  // para pode quitar los errores
  fgValidador: FormGroup = this.fb.group({
    // definimos otro control a diferencia del crear que es el de (id)
    'id': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'precio': ['', [Validators.required]],
    'descripcion': ['', [Validators.required]],
    'tipo': ['', [Validators.required]]
  });


  constructor(private fb: FormBuilder,
    private servicioProducto: ProductoService,
    private router: Router,
  // nesecitamos leer este id de la url y para eso lo hacemos de desde este private la url
    private route: ActivatedRoute){}

  ngOnInit(): void {

    //atraves de la linea anterior en el ngonInit podemos decile para luego utilizarlo y para esto 
    //implementamos las dos lineas que siguen 
    this.id = this.route.snapshot.params["id"];
    this.BuscarProducto();
  }
// creamos esta funcion
  BuscarProducto() {
    this, this.servicioProducto.obtenerRegistrosPorId(this.id).subscribe((datos: ModeloProductos) => {
      //creamos esta linea que sige para que nos avilite el boton de editar
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["precio"].setValue(datos.precio);
      this.fgValidador.controls["descripcion"].setValue(datos.descripcion);
      this.fgValidador.controls["tipo"].setValue(datos.tipo);
  })
}

// esta la cambiamos de nombre y le ponemos editar al codigo que trajimos de crear.
  EditarProducto() {
    let nombre = this.fgValidador.controls["nombre"].value;
    let precio = parseInt(this.fgValidador.controls["precio"].value);
    let descripcion = this.fgValidador.controls["descripcion"].value;
    let tipo = this.fgValidador.controls["tipo"].value;
    
    let p = new ModeloProductos();
    p.nombre = nombre;
    p.precio = precio;
    p.tipo = tipo;
    p.descripcion = descripcion 
    // tambien debemos agregar esta linea que sige que es el identificador
    p.id = this.id;

    // debemos enbocar es a actualizar productos
    this.servicioProducto.ActualizarProducto(p).subscribe((datos: ModeloProductos) => {      
      alert("producto actualizado correctamente")
      this.router.navigate(["/administrador/listar-productos"]);          
        }, (error: any) => {
          alert("error actualizando el producto")
        }
        )}
}
