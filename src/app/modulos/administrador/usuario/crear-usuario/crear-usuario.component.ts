import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/servicios/producto.service';
import { of } from 'rxjs';
import {from} from 'rxjs';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { ModeloUsuario } from 'src/app/modelos/datos.modelo';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    
    'nombre': ['', [Validators.required]],
    'apellido': ['', [Validators.required]],
    'celular': ['', [Validators.required]],
    'telefono': ['', [Validators.required]],
    'correo': ['', [Validators.required]],
    'contrasena': ['', [Validators.required]],
    'rol': ['', [Validators.required]],  
    
  });

  constructor(
    private fb: FormBuilder,
    private servicioUsuario: UsuarioService,
    private router: Router) { }

  ngOnInit(): void {
  }

  GuardarUsuario() {

    let nombre = this.fgValidador.controls["nombre"].value;
    let apellido = this.fgValidador.controls["apellido"].value;
    let celular = this.fgValidador.controls["celular"].value;
    let correo = this.fgValidador.controls["correo"].value;    
    let telefono = this.fgValidador.controls["telefono"].value;
    let contrasena = this.fgValidador.controls["contrasena"].value;
    let rol = this.fgValidador.controls["rol"].value;
     
    let p = new ModeloUsuario();

    p.nombre = nombre;
    p.apellido = apellido;
    p.celular = celular;
    p.correo = correo; 
    p.telefono = telefono;
    p.contrasena = contrasena;
    p.rol = rol;
    
    this.servicioUsuario.crearUsuario(p).subscribe((datos: ModeloUsuario) => {      
      alert("usuario almacenado correctamente")
      this.router.navigate(["/administrador/listar-usuario"]);          
        }, (error: any) => {
          alert("error almacenando el usuario")
        }
    )
  } 
  }
    
  








 
   
