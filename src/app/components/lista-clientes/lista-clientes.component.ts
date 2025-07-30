import { Component } from '@angular/core';
import { ClientService } from '../../servicio/client.service';
import { Cliente } from './cliente';

@Component({
  selector: 'app-lista-clientes',
  standalone: true,
  imports: [],
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


  ngOnInit() {
    this.servicioCliente.leerClientes().subscribe(data => {
      this.clientes = Object.values(data);
    });
  }


}
