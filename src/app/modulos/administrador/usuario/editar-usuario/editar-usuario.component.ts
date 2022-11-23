import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/datos.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  

  id: string = '';

  fgValidador: FormGroup = this.fb.group({
    // definimos otro control a diferencia del crear que es el de (id)
    'id': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'apellido': ['', [Validators.required]],
    'celular': ['', [Validators.required]],
    'telefono': ['', [Validators.required]],
    'correo': ['', [Validators.required]],
    'contrasena': ['', [Validators.required]],
    'rol': ['', [Validators.required]],  
  });
  
  constructor(private fb: FormBuilder,
    private servicioUsuario: UsuarioService,
    private router: Router,
  // nesecitamos leer este id de la url y para eso lo hacemos de desde este private la url
    private route: ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    
   
    this.BuscarUsuario();

  }
  BuscarUsuario() {
    
    this, this.servicioUsuario.obtenerRegistrosPorId(this.id).subscribe((datos: ModeloUsuario) => {
      
      //creamos esta linea que sige para que nos avilite el boton de editar
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["apellido"].setValue(datos.apellido);
      this.fgValidador.controls["celular"].setValue(datos.celular);
      this.fgValidador.controls["telefono"].setValue(datos.telefono);
      this.fgValidador.controls["correo"].setValue(datos.correo);
      this.fgValidador.controls["contrasena"].setValue(datos.contrasena);
      this.fgValidador.controls["rol"].setValue(datos.rol);
     
  })
  }

  // esta la cambiamos de nombre y le ponemos editar al codigo que trajimos de crear.
  EditarUsuario() {
    let id = this.fgValidador.controls["id"].value;
    let nombre = this.fgValidador.controls["nombre"].value;
    let apellido = this.fgValidador.controls["apellido"].value;
    let celular = this.fgValidador.controls["celular"].value;
    let telefono = this.fgValidador.controls["telefono"].value;
    let correo = this.fgValidador.controls["correo"].value;
    let contrasena = this.fgValidador.controls["contrasena"].value;
    let rol = this.fgValidador.controls["rol"].value;
    
    let p = new ModeloUsuario();
    p.id = id;
    p.nombre = nombre;
    p.apellido = apellido;
    p.celular = celular;
    p.telefono = telefono;
    p.correo = correo
    p.contrasena = contrasena;
    p.rol = rol;
    // tambien debemos agregar esta linea que sige que es el identificador
    p.id = this.id;

    // debemos enbocar es a actualizar productos
    this.servicioUsuario.ActualizarUsuario(p).subscribe((datos: ModeloUsuario) => {      
      alert("usuario actualizado correctamente")
      this.router.navigate(["/administrador/listar-usuario"]);          
        }, (error: any) => {
          alert("error actualizando el usuario")
        }
        )}
}

