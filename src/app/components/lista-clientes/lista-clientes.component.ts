import { Component } from '@angular/core';
import { ClientService } from '../../servicio/client.service';
import { Cliente } from './cliente';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-clientes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lista-clientes.component.html',
  styleUrl: './lista-clientes.component.css'
})
export class ListaClientesComponent {

  constructor(private servicioCliente: ClientService) { }
  /*
    clientes: Cliente[] = [];
  
  
    ngOnInit() {
      this.servicioCliente.getCliente().subscribe(data => {
        this.clientes = data;
      });
    }
      */

  clientes: any[] = [];

  //Canviar oir keys

  ngOnInit(): void {
    this.servicioCliente.leerClientes().subscribe(data => {
      this.clientes = Object.keys(data).map(key => ({
        id: key, ...data[key]
      }));
    });
  }

  eliminar(id: string): void {
    this.servicioCliente.eliminarCliente(id).subscribe(() => {
      this.clientes = this.clientes.filter(cliente => cliente.id !== id)
    }, error => {
      console.log("Erorro al eliminar cinte", "error")
    })
  }


}
