import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../components/empleado/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private http: HttpClient) {

  }

  private API_EMPLEADOS = "https://futuramaapi.com/api/characters";

  //Revisar
  //Observable, son tareas que sep ueden tardar 
  getEmpleado(): Observable<{ items: Empleado[] }> {
    return this.http.get<{ items: Empleado[] }>(this.API_EMPLEADOS)
  }

}
