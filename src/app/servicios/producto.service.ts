import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Model } from 'mongoose';
import { Observable } from 'rxjs';
import { ModeloProductos } from '../modelos/producto.modelo';
import { SeguridadService } from './seguridad.service';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url = 'http://localhost:3000';
  token: string = '';
  constructor(private http: HttpClient, private seguridadServicio: SeguridadService) {
    this.token = this.seguridadServicio.obtenerToken();
  } 

  obtenerRegistros(): Observable<ModeloProductos[]>{
    return this.http.get<ModeloProductos[]>(`${this.url}/productos-servicios`)
  }

  crearProducto(producto: ModeloProductos): Observable<ModeloProductos> { 
    return this.http.post<ModeloProductos>(`${this.url}/productos-servicios`, producto, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  } 
  ActualizarProducto(producto: ModeloProductos): Observable<ModeloProductos> { 
    return this.http.put<ModeloProductos>(`${this.url}/productos-servicios`, producto, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
  
  EliminarProducto(id: string): Observable<any> { 
    return this.http.delete(`${this.url}/productos-servicios/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

}
