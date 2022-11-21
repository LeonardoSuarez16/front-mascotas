import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloUsuario } from '../modelos/datos.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'http://localhost:3000';
  token: string = '';
  constructor(private http: HttpClient, private seguridadServicio: SeguridadService) {
    this.token = this.seguridadServicio.obtenerToken();
  } 

  obtenerRegistros(): Observable<ModeloUsuario[]>{
    return this.http.get<ModeloUsuario[]>(`${this.url}/usuarios`)
  }

  // generamos una busqueda adicional por id para el mudulo de editar productos
  // ademas le quitamos los [] para que  no obtengamos una lista sino uno solo
  obtenerRegistrosPorId(id:string): Observable<ModeloUsuario>{
    return this.http.get<ModeloUsuario>(`${this.url}/usuarios/${id}`)
  }

  crearUsuario(usuario: ModeloUsuario): Observable<ModeloUsuario> { 
    return this.http.post<ModeloUsuario>(`${this.url}/usuarios`, usuario, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  } 
  ActualizarUsuario(usuario: ModeloUsuario): Observable<ModeloUsuario> { 
    return this.http.put<ModeloUsuario>(`${this.url}/usuarios/${usuario.id}`, usuario, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
  
  // EliminarUsuario(id: string): Observable<any> { 
  //   return this.http.delete(`${this.url}/usuarios-servicios/${id}`, {
  //     headers: new HttpHeaders({
  //       'Authorization': `Bearer ${this.token}`
  //     })
  //   })
  // }

}
