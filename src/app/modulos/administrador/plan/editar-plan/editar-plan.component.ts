import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloPlan } from 'src/app/modelos/plan.modelo';
import { PlanService } from 'src/app/servicios/plan.service';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-editar-plan',
  templateUrl: './editar-plan.component.html',
  styleUrls: ['./editar-plan.component.css']
})
export class EditarPlanComponent implements OnInit {
  
  id: string = '';

   // en este lugar copiamos lo que cortamos de muestra de crear y empezamos a importar los pquetes
  // para pode quitar los errores
  fgValidador: FormGroup = this.fb.group({
    // definimos otro control a diferencia del crear que es el de (id)
    'id': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'descripcion': ['', [Validators.required]],
    'precio': ['', [Validators.required]],   
  });

  constructor(private fb: FormBuilder,
    private servicioPlan: PlanService,
    private router: Router,
  // nesecitamos leer este id de la url y para eso lo hacemos de desde este private la url
    private route: ActivatedRoute){}

  ngOnInit(): void {

    //atraves de la linea anterior en el ngonInit podemos decile para luego utilizarlo y para esto 
    //implementamos las dos lineas que siguen 
    this.id = this.route.snapshot.params["id"];
    this.BuscarPlan();
  }
// creamos esta funcion
  BuscarPlan() {
    this, this.servicioPlan.obtenerRegistrosPorId(this.id).subscribe((datos: ModeloPlan) => {
      //creamos esta linea que sige para que nos avilite el boton de editar
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["descripcion"].setValue(datos.descripcion);
      this.fgValidador.controls["precio"].setValue(datos.precio);      
  })
}

// esta la cambiamos de nombre y le ponemos editar al codigo que trajimos de crear.
  EditarPlan() {
    let nombre = this.fgValidador.controls["nombre"].value;
    let descripcion = this.fgValidador.controls["descripcion"].value;
    let precio = parseInt(this.fgValidador.controls["precio"].value);
    
    
    let p = new ModeloPlan();
    p.nombre = nombre;
    p.descripcion = descripcion 
    p.precio = precio;    
    // tambien debemos agregar esta linea que sige que es el identificador
    p.id = this.id;

    // debemos enbocar es a actualizar productos
    this.servicioPlan.ActualizarPlan(p).subscribe((datos: ModeloPlan) => {      
      alert("plan actualizado correctamente")
      this.router.navigate(["/administrador/listar-plan"]);          
        }, (error: any) => {
          alert("error actualizando el plan")
        }
        )}
}
