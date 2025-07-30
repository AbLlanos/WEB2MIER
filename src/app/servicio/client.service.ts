import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Cliente } from '../components/lista-clientes/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private API_CLIENTES = "https://mov2proyecto-default-rtdb.firebaseio.com";

  constructor(private http: HttpClient) { }

  guardarCliente(cliente: any): Observable<any> {
    return this.http.post(`${this.API_CLIENTES}/clientes.json`, cliente);
  }

  getCliente(): Observable<Cliente[]> {
    return this.http.get<{ [key: string]: Cliente }>(`${this.API_CLIENTES}/clientes.json`)
      .pipe(
        map(response => {
          if (!response) return [];
          return Object.values(response);
        })
      );
  }

  leerClientes():Observable<any>{
        return this.http.get<{ [key: string]: Cliente }>(`${this.API_CLIENTES}/clientes.json`)
  }

}
