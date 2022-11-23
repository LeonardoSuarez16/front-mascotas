import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloSucursal } from 'src/app/modelos/sucursal.modelo';
import { SucursalService } from 'src/app/servicios/sucursal.service';

@Component({
  selector: 'app-editar-sucursal',
  templateUrl: './editar-sucursal.component.html',
  styleUrls: ['./editar-sucursal.component.css']
})
export class EditarSucursalComponent implements OnInit {
// creamos el atributo para que pueda funcionar y lo inicialisamos en 0
  
id: string = '';
  
// en este lugar copiamos lo que cortamos de muestra de crear y empezamos a importar los pquetes
// para pode quitar los errores
fgValidador: FormGroup = this.fb.group({
  // definimos otro control a diferencia del crear que es el de (id)
  'id': ['', [Validators.required]],
  'departamento': ['', [Validators.required]],
  'ciudad': ['', [Validators.required]],
  'direccion': ['', [Validators.required]],
  'telefono': ['', [Validators.required]]
});

constructor(private fb: FormBuilder,
  private servicioSucursal: SucursalService,
  private router: Router,
// nesecitamos leer este id de la url y para eso lo hacemos de desde este private la url
  private route: ActivatedRoute){}

ngOnInit(): void {

  //atraves de la linea anterior en el ngonInit podemos decile para luego utilizarlo y para esto 
  //implementamos las dos lineas que siguen 
  this.id = this.route.snapshot.params["id"];
  this.BuscarSucursal();
}
// creamos esta funcion
BuscarSucursal() {
  this, this.servicioSucursal.obtenerRegistrosPorId(this.id).subscribe((datos: ModeloSucursal) => {
    //creamos esta linea que sige para que nos avilite el boton de editar
    this.fgValidador.controls["id"].setValue(this.id);
    this.fgValidador.controls["departamento"].setValue(datos.departamento);
    this.fgValidador.controls["ciudad"].setValue(datos.ciudad);
    this.fgValidador.controls["direccion"].setValue(datos.direccion);
    this.fgValidador.controls["telefono"].setValue(datos.telefono);
})
}

// esta la cambiamos de nombre y le ponemos editar al codigo que trajimos de crear.
EditarSucursal() {
  let departamento = this.fgValidador.controls["departamento"].value;
  let ciudad = this.fgValidador.controls["ciudad"].value;
  let direccion = this.fgValidador.controls["direccion"].value;
  let telefono = this.fgValidador.controls["telefono"].value;
  
  let p = new ModeloSucursal();
  p.departamento = departamento;
  p.ciudad = ciudad;
  p.direccion = direccion;
  p.telefono = telefono 
  // tambien debemos agregar esta linea que sige que es el identificador
  p.id = this.id;

  // debemos enbocar es a actualizar productos
  this.servicioSucursal.ActualizarSucursal(p).subscribe((datos: ModeloSucursal) => {      
    alert("Sucursal actualizado correctamente")
    this.router.navigate(["/administrador/listar-sucursal"]);          
      }, (error: any) => {
        alert("error actualizando la sucursal")
      }
      )}
}

