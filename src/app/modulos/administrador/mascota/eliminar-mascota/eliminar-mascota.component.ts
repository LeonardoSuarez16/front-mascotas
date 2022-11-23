import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';

@Component({
  selector: 'app-eliminar-mascota',
  templateUrl: './eliminar-mascota.component.html',
  styleUrls: ['./eliminar-mascota.component.css']
})
export class EliminarMascotaComponent implements OnInit {
  id: string = '';
  nombre: string = '';

  constructor(
    private servicioMascota: MascotaService,
    private router: Router,
    private route: ActivatedRoute) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.params["id"];
      this.BuscarMascota();
    }
    BuscarMascota() {    
      this.servicioMascota.obtenerRegistrosPorId(this.id).subscribe((datos: ModeloMascota) => {
      })
    }
    EliminarMascota(){
      this.servicioMascota.EliminarMascota(this.id).subscribe((datos: any) => {
        alert("Mascota eliminado correctamente LD");
        this.router.navigate(["/administrador/listar-mascotas"]);
      }, (error: any) => {
        alert("Error al eliminar LD")
      })
    }
  }



