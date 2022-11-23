import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloPlan } from 'src/app/modelos/plan.modelo';
import { PlanService } from 'src/app/servicios/plan.service';

@Component({
  selector: 'app-eliminar-plan',
  templateUrl: './eliminar-plan.component.html',
  styleUrls: ['./eliminar-plan.component.css']
})
export class EliminarPlanComponent implements OnInit {

  id: string = '';
  nombre: string = '';

  constructor(
    private servicioPlan: PlanService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarPlan();
  }

  BuscarPlan() {    
    this.servicioPlan.obtenerRegistrosPorId(this.id).subscribe((datos: ModeloPlan) => {
      
      if (datos.id && datos.nombre) {
        this.id = datos.id;
        this.nombre = datos.nombre;
      }
    })
  }

  EliminarPlan(){

    this.servicioPlan.EliminarPlan(this.id).subscribe((datos: any) => {
      alert("plan eliminado correctamente LD");
      this.router.navigate(["/administrador/listar-plan"]);
    }, (error: any) => {
      alert("Error al eliminar LD")
    })
  }
}

