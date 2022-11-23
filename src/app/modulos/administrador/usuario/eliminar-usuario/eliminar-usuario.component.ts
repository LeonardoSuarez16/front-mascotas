import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/datos.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.component.html',
  styleUrls: ['./eliminar-usuario.component.css']
})
export class EliminarUsuarioComponent implements OnInit {
  id: string = '';
  nombre: string = '';

  constructor(
    private servicioUsuario: UsuarioService,
    private router: Router,
    private route: ActivatedRoute) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.params["id"];
      this.BuscarUsuario();
    }
    BuscarUsuario() {    
      this.servicioUsuario.obtenerRegistrosPorId(this.id).subscribe((datos: ModeloUsuario) => {
        
        // if (datos.id && datos.nombre) {
        //   this.id = datos.id;
        //   this.nombre = datos.nombre;
        // }
      })
    }
  
    EliminarUsuario(){
      this.servicioUsuario.EliminarUsuario(this.id).subscribe((datos: any) => {
        alert("Usuario eliminado correctamente LD");
        this.router.navigate(["/administrador/listar-usuario"]);
      }, (error: any) => {
        alert("Error al eliminar LD")
      })
    }
  }




