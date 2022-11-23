import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';

@Component({
  selector: 'app-editar-mascota',
  templateUrl: './editar-mascota.component.html',
  styleUrls: ['./editar-mascota.component.css']
})
  
export class EditarMascotaComponent implements OnInit {
  
  id: string = '';
  

  fgValidador: FormGroup = this.fb.group({
    
    // definimos otro control a diferencia del crear que es el de (id)
    'id': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'foto': ['', [Validators.required]],
    'estado': ['', [Validators.required]],
    'especie': ['', [Validators.required]],
    'comentario': ['', [Validators.required]],    
  });
 
  constructor(private fb: FormBuilder,
  private servicioMascota: MascotaService,
  private router: Router,
  // nesecitamos leer este id de la url y para eso lo hacemos de desde este private la url
  private route: ActivatedRoute){}
  
  ngOnInit(): void {
    
    this.id = this.route.snapshot.params["id"];   
    this.BuscarMascota();
  }
  BuscarMascota() {
   
    this, this.servicioMascota.obtenerRegistrosPorId(this.id).subscribe((datos: ModeloMascota) => {      
      //creamos esta linea que sige para que nos avilite el boton de editar
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["foto"].setValue(datos.foto);
      this.fgValidador.controls["estado"].setValue(datos.estado);
      this.fgValidador.controls["especie"].setValue(datos.especie);
      this.fgValidador.controls["comentario"].setValue(datos.comentario);
     
    })
  }

  // esta la cambiamos de nombre y le ponemos editar al codigo que trajimos de crear.
  EditarMascota() {
    let id = this.fgValidador.controls["id"].value;
    let nombre = this.fgValidador.controls["nombre"].value;
    let foto = this.fgValidador.controls["foto"].value;
    let estado = this.fgValidador.controls["estado"].value;
    let especie = this.fgValidador.controls["especie"].value;
    let comentario = this.fgValidador.controls["comentario"].value;
    
    let p = new ModeloMascota();

    p.id = id;
    p.nombre = nombre;
    p.foto = foto;
    p.estado = estado;
    p.especie = especie;
    p.comentario = comentario;
    
    // tambien debemos agregar esta linea que sige que es el identificador
    p.id = this.id;

    // debemos enbocar es a actualizar productos
    
    this.servicioMascota.ActualizarMascota(p).subscribe((datos: ModeloMascota) => {      
      alert("mascota actualizado correctamente")
      this.router.navigate(["/administrador/buscar-mascota"]);          
        }, (error: any) => {
          alert("error actualizando la mascota")
        }
        )}
}



