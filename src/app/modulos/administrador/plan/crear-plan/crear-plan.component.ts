import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloPlan } from 'src/app/modelos/plan.modelo';
import { PlanService } from 'src/app/servicios/plan.service';

@Component({
  selector: 'app-crear-plan',
  templateUrl: './crear-plan.component.html',
  styleUrls: ['./crear-plan.component.css']
})
export class CrearPlanComponent implements OnInit {
  
  fgValidador: FormGroup = this.fb.group({
    'nombre': ['', [Validators.required]],
    'descripcion': ['', [Validators.required]],
    'precio': ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder,
    private servicioPlan: PlanService,
    private router: Router) { }

  ngOnInit(): void {
  }

  GuardarPlan() {
    let nombre = this.fgValidador.controls["nombre"].value;
    let descripcion = this.fgValidador.controls["descripcion"].value;
    let precio = parseInt(this.fgValidador.controls["precio"].value);
    
    
    
    let p = new ModeloPlan();
    p.nombre = nombre;
    p.descripcion = descripcion;
    p.precio = precio
    
    this.servicioPlan.crearPlan(p).subscribe((datos: ModeloPlan) => {      
      alert("plan almacenado correctamente")
      this.router.navigate(["/administrador/listar-plan"]);          
        }, (error: any) => {
          alert("error almacenando el plan")
        }
        )}
  }
